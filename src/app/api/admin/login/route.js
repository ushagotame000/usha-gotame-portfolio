import { NextResponse } from "next/server";
import Admin from "../../../../models/Admin";
import { connectMongo } from "../../../lib/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await connectMongo();

    const { email, password } = await req.json();

    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    //  Compare the entered password with the hashed one
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    //  Successful login
    const token = jwt.sign(
      { id: admin._id, email: admin.email, name: admin.name },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    // Send the token in the response
    return NextResponse.json({
      success: true,
      message: "Login successful",
      token, 
    });
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
