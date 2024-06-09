import { NextResponse } from "next/server";

const { revalidatePath } = require("next/cache");

async function handler(request) {
  revalidatePath("/", "layout");

  return NextResponse.json({})
}
export { handler as POST, handler as GET };
