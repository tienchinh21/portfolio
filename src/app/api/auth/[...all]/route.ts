import { NextResponse } from "next/server";

function disabledAuthResponse() {
  return NextResponse.json(
    {
      success: false,
      message: "Auth is disabled because database support was removed.",
    },
    { status: 410 }
  );
}

export const GET = disabledAuthResponse;
export const POST = disabledAuthResponse;
