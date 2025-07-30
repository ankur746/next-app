import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function GET() {
    const cookieStore = await cookies();
  const user = cookieStore.get("user");
  
  if (!user) {
    return NextResponse.json({ user: null }, { status: 200 });
  }
  try {
    return NextResponse.json({ user: JSON.parse(user.value) }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ user: null, error: e || 'Something went wrong' }, { status: 400 });
  }
}