import { NextResponse } from "next/server";
import { connectMongo } from "./mongodb";

/**
 * Generic CRUD handler factory for Next.js App Router.
 * @param {Mongoose.Model} Model - Mongoose model
 */
export function createCRUDHandlers(Model) {
  return {
    //  Create document
    async POST(req) {
      await connectMongo();
      const data = await req.json();
      const item = new Model(data);
      await item.save();
      return NextResponse.json(item, { status: 201 });
    },

    //  Get all documents
    async GET() {
      await connectMongo();
      const items = await Model.find();
      return NextResponse.json(items, { status: 200 });
    },

    //  Update document by ID
    async PUT(req, { params }) {
      await connectMongo();
      const data = await req.json();
      const updated = await Model.findByIdAndUpdate(params.id, data, { new: true });
      return NextResponse.json(updated, { status: 200 });
    },

    //  Delete document by ID
    async DELETE(_, { params }) {
      await connectMongo();
      await Model.findByIdAndDelete(params.id);
      return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
    },
  };
}
