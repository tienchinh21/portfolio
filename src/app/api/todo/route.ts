import { NextResponse } from "next/server";

const disabledResponse = {
  success: false,
  message: "Todo API is disabled because database support was removed.",
};

export async function GET() {
  return NextResponse.json({ success: true, data: [] });
}

export async function POST() {
  return NextResponse.json(disabledResponse, { status: 503 });
}

export async function PATCH() {
  return NextResponse.json(disabledResponse, { status: 503 });
}

export async function DELETE() {
  return NextResponse.json(disabledResponse, { status: 503 });
}
