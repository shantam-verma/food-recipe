import { NextResponse } from "next/server";
import { ACCESS_KEY } from "./utils/constants";

export default async function myMiddleware(request) {
  const isLoggedIn = request.cookies.get(ACCESS_KEY);
  const url = request.nextUrl.pathname;

  // Allow access to these pages even if the user is logged in
  if (
    isLoggedIn &&
    (url.startsWith("/cuisine/") ||
      url.startsWith("/recipe/") ||
      url.startsWith("/search/"))
  ) {
    return NextResponse.next();
  }

  if (!isLoggedIn && (url === "/login" || url === "/sign-up")) {
    // Allow access to login and sign-up pages even if not logged in
    return NextResponse.next();
  }

  if (!isLoggedIn) {
    if (url !== "/login") {
      // Redirect to login if not logged in and not already on the login page
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (url !== "/sign-up") {
      // Redirect to sign-up if not logged in and not already on the sign-up page
      return NextResponse.redirect(new URL("/sign-up", request.url));
    }
  }

  if (isLoggedIn && url !== "/") {
    // Redirect to home ("/") if logged in and not already on the home page
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow the request to continue if no redirection is needed
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/sign-up",
    "/cuisine/:path*",
    "/recipe/:path*",
    "/search/:path*",
  ],
};
