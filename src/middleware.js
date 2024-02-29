import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  try {
    const response = NextResponse.next();
    const hasAuth = req.cookies.has("auth");
    if (!hasAuth) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    const authCookie = req.cookies.get("auth");
    const secret = new TextEncoder().encode(process.env.SECRET);
    const { payload } = await jwtVerify(authCookie.value, secret);
    if (!payload) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    response.headers.set("userId", payload.id);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

// middleware triggers for every route except user and image routes
export const config = {
  matcher: ["/((?!api/user|login|_next/static|_next/image|favicon.ico).*)"],
};
