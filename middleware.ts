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
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  // Nếu hợp lệ, tiếp tục render trang
  return NextResponse.next();
}

// Áp dụng middleware cho toàn bộ trang, trừ một số route cụ thể
export const config = {
  matcher: ["/((?!unauthorized|_next/static|_next/image|favicon.ico).*)"],
};
