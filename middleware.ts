import { NextResponse } from "next/server";

export function middleware() {
  // Bypass Clerk temporarily
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/"],
};