import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/", "/cap-moi-tai-khoan", "/dong-bo-tai-khoan"];
const authPaths = ["/login"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("access_token")?.value;

  // Chưa đăng nhập thì không cho vào private paths
  if (
    privatePaths.some((path) => pathname.startsWith(path)) &&
    !accessToken &&
    pathname !== "/login"
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Đăng nhập rồi thì không cho vào login/register nữa
  if (authPaths.some((path) => pathname.startsWith(path)) && accessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login", "/cap-moi-tai-khoan", "/dong-bo-tai-khoan"],
};
