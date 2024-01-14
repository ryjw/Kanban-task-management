import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  try {
    const response = NextResponse.next();
    const hasAuth = req.cookies.has("auth");
    if (!hasAuth) {
      return response;
    }
    const authCookie = req.cookies.get("auth");
    const secret = new TextEncoder().encode(process.env.SECRET);
    const { payload } = await jwtVerify(authCookie.value, secret);
    response.cookies.set("user", payload);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

// middleware triggers for every route except user and image routes
export const config = {
  matcher: ["/((?!api/user|_next/static|_next/image|favicon.ico).*)"],
};
