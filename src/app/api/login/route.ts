import { BASE_PATH, LOGIN } from "@/constants/Endpoints";
import { NextRequest, NextResponse } from "next/server";

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

    const response = NextResponse.json({ message: "Login successful", user: data });

    response.cookies.set("accessToken", data.accessToken, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60,
    });

    response.cookies.set("refreshToken", data.refreshToken, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error || "Internal server error" }, { status: 500 });
  }
}
