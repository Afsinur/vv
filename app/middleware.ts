import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

export function middleware(request: NextRequest) {
  // Check if the user is authenticated
  const isAuthenticated = auth.isAuthenticated();
  const pathname = request.nextUrl.pathname;
  const isLoginPage = pathname === "/login";

  // Check if the current path is a protected route
  const isProtectedRoute =
    pathname === "/" ||
    pathname.startsWith("/details") ||
    pathname.startsWith("/find-blog");

  // If trying to access protected route without authentication, redirect to login
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If trying to access login while already authenticated, redirect to home
  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Specify which routes the middleware should run on
export const config = {
  matcher: ["/", "/login"],
};
