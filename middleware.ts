import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
    console.log(request.nextUrl);
    // get cookie
    const cookies = request.cookies.getAll();
    console.log(cookies);
    // if req.headers contains token
    return NextResponse.next();
};

export default middleware;

export const config = {
    matcher: '/api/:path*',
};