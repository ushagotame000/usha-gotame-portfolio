import { NextResponse } from "next/server";
import Admin from "../../../../models/Admin";
import { connectMongo } from "../../../lib/mongodb";

export async function POST(req) {
  try {
    // ✅ Ensure database connection
    await connectMongo();

    const { name, email, password } = await req.json();

    // Check if admin already exists
    const existing = await Admin.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: "Admin already exists" }, { status: 400 });
    }

    // Create new admin
    const admin = new Admin({ name, email, password });
    await admin.save();

    return NextResponse.json({ success: true, admin }, { status: 201 });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
