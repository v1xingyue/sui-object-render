import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(" middleware request: =====", pathname);

  const path = pathname.toString();
  if (path.startsWith("/render")) {
    request.nextUrl.pathname = `/api${pathname}`;
  }

  if (pathname.toString().startsWith("/short")) {
    request.nextUrl.pathname = `/api${pathname}`;
  }
  console.log("changed : ", request.nextUrl.pathname.toString());
  return NextResponse.rewrite(request.nextUrl);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/render/:raw*", "/short/:raw*"],
};
