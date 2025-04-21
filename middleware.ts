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
    // Chuyển hướng đến /unauthorized với redirectUrl và invalidKey
    const redirectTo = new URL("/unauthorized", request.url);
    redirectTo.searchParams.set("redirect", redirectUrl);
    // Nếu có specialKey và nó không hợp lệ, thêm invalidKey=true
    if (specialKey) {
      redirectTo.searchParams.set("invalidKey", "true");
    }
    return NextResponse.redirect(redirectTo);
  }

  // Nếu hợp lệ, tiếp tục render trang
  return NextResponse.next();
}

// Áp dụng middleware cho toàn bộ trang, trừ một số route cụ thể
export const config = {
  matcher: [
    // Chỉ áp dụng middleware cho các route không bắt đầu bằng các đường dẫn tĩnh
    "/((?!unauthorized|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot|ico|ttf|mp4)).*)",
  ],
};
