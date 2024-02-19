import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST(req: NextRequest) {
    const res = new NextResponse();
    const token = await req.json()
    const expires = new Date(Date.now() + 10 * 1000);
    const session = token;
    cookies().set("session", session, { expires, httpOnly: true });
  console.log(token);
  return res;
}
