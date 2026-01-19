import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ⛔️ Bỏ qua sitemap & robots (RẤT QUAN TRỌNG)
  if (
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  // Nếu đã có locale thì cho qua
  if (pathname.startsWith("/vi") || pathname.startsWith("/en")) {
    return NextResponse.next();
  }

  // Redirect mặc định sang /vi
  const url = request.nextUrl.clone();
  url.pathname = `/vi${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next|api|sitemap.xml|robots.txt|favicon.ico).*)",
  ],
};