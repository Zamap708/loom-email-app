//TODO: Encrypt UserID + Token + DisplayName and set as session
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const res = new NextResponse();
    const data = await req.json()
    const expires = new Date(Date.now() + 10 * 1000);
    const session = data.token;
    const username = data.user.displayName
    console.log(username)
    console.log(session)
    res.cookies.set("session", session, { expires, httpOnly: true });
    res.cookies.set("username", username, { expires, httpOnly: true })
    //   console.log(token);
    
  return res;
}

//Check for existing session cookie, decrypt and parse info if exists
//else return something to trigger redirect to home page
export async function GET(req: NextRequest) {
  const username = req.cookies.get('session')?.value;
    return username
}