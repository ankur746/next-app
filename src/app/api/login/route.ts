import { BASE_PATH, LOGIN } from "@/constants/Endpoints";
import { NextRequest, NextResponse } from "next/server";

import { cookies } from 'next/headers';


export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, password } = body;

  try {
    const res = await fetch(`${BASE_PATH}/${LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 60,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const data = await res.json();
    const cookieStore = await cookies();
    cookieStore.set('user', JSON.stringify(data), {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax',
    });
    return NextResponse.json({ message: "Login successful", user: data });

  } catch (error) {
    return NextResponse.json({ error: error || "Internal server error" }, { status: 500 });
  }
}
