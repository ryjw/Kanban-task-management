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
        error: "Please include both a username and password",
      });
    }
    const isUserExisting = await prisma.user.findUnique({
      where: { username },
    });
    if (isUserExisting) {
      return Response.json({
        success: false,
        error: "User already exists, please login",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 15);

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ userId: user.id, username }, process.env.SECRET);

    const cookieStore = cookies();
    cookieStore.set("auth", token);

    return Response.json({ success: true, message: `Welcome ${username}!` });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
