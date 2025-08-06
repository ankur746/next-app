// import { ProtectedRoutes } from "@/constants/Endpoints";
// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//     const userCookies = request.cookies.get("user");
    
//     const pathName = request.nextUrl.pathname;
//     const isProtected = ProtectedRoutes.some(route => pathName.startsWith(route))
    
//     if (isProtected && !userCookies) { 
//         return NextResponse.redirect(new URL("/login", request.url));
//     }

//     return NextResponse.next();
// }
 
// export const config = {
//   matcher: ["/dashboard/:path*", "/account/:path*", "/admin/:path*"],
// };