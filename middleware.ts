import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const VALID_SPECIAL_KEY = "development";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const specialKey = url.searchParams.get("specialKey");

  // Debugging: Log để kiểm tra specialKey
  console.log("specialKey in middleware:", specialKey);

  // Nếu specialKey không hợp lệ, chuyển hướng đến trang unauthorized
  if (specialKey !== VALID_SPECIAL_KEY) {
    // Lấy URL gốc mà người dùng đang cố truy cập
    const redirectUrl = url.pathname + url.search;
    // Chuyển hướng đến /unauthorized với redirectUrl làm query parameter
    const redirectTo = new URL("/unauthorized", request.url);
    redirectTo.searchParams.set("redirect", redirectUrl);
    return NextResponse.redirect(redirectTo);
  }

  // Nếu hợp lệ, tiếp tục render trang
  return NextResponse.next();
}

// Áp dụng middleware cho toàn bộ trang, trừ một số route cụ thể
export const config = {
  matcher: ["/((?!unauthorized|_next/static|_next/image|favicon.ico).*)"],
};
