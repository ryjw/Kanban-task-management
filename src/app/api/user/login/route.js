import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const data = await req.json();
    const { username, password } = data;

    if (!username || !password) {
      return Response.json({
        success: false,
        error: "Invalid username or password",
      });
    }

    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) {
      return Response.json({
        success: false,
        error: "User and/or Password Invalid",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return Response.json({
        success: false,
        error: "User and/or Password Invalid",
      });
    }

    const token = jwt.sign({ userId: user.id, username }, process.env.SECRET);

    const cookieStore = cookies();

    cookieStore.set("auth", token);

    return Response.json({
      success: true,
      message: "You're successfully logged in",
    });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
