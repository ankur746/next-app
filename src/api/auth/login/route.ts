import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Fake user check (email: test@test.com, password: 123456)
  if (email === "test@test.com" && password === "123456") {
    return NextResponse.json({ name: "Test User", email });
  }

  return new NextResponse("Invalid credentials", { status: 401 });
}
