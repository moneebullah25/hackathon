import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { v4 } from "uuid";
import { cookies } from "next/dist/client/components/headers";

export const GET = async (request: NextRequest) => {
  try {
    const res = await db.select().from(cartTable);
    console.log(res);
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();

  const userId = v4();
  const user_id = cookies().get("user_id")?.value

  if (!user_id) {
    cookies().set("user_id", userId);
  }

  try {
    const res = await db.insert(cartTable).values({
      product_id: req.product_id,
      quantity: req.quantity,
      user_id: cookies().get("user_id")?.value as string,
    });
    console.log(res);
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};
