import { NextRequest, NextResponse } from "next/server";

const middleware = async (request: NextRequest) => {
    // if it starts with _next, return next()
    if (request.nextUrl.pathname.startsWith("/_next") || request.nextUrl.pathname.startsWith("/api"))
        return NextResponse.next();
	console.log(request.nextUrl, request.nextUrl.pathname);
	// get cookie
	const cookies = request.cookies.getAll().reduce((acc: any, cookie) => {
		acc[cookie.name] = cookie.value;
		return acc;
	}, {});
	console.log(cookies);
	if (!cookies.token) {
		if (request.nextUrl.pathname !== "/login")
			return NextResponse.redirect(new URL("/login", request.nextUrl));
	} else {
		if (request.nextUrl.pathname === "/login")
			return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
	}
	return NextResponse.next();
};

export default middleware;
