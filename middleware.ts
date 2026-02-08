import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const roleRules = [
  { prefix: "/admin", role: "ADMIN" },
  { prefix: "/tech", role: "TECH" },
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const rule = roleRules.find((entry) => pathname.startsWith(entry.prefix));

  if (!rule) {
    return NextResponse.next();
  }

  const token = await getToken({ req: request });
  const userRole = token?.role;

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (userRole !== rule.role) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/tech/:path*"],
};
