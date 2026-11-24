import { cookies } from "next/headers";
import { sendResponse } from "@/lib/response";

export async function POST() {
  const jar = await cookies();

  jar.set("access_token", "", {
    httpOnly: true,
    secure: process.env.COOKIE_SECURE === "true",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return sendResponse(
    "logout",
    0,
    "Системээс гарлаа.",
    []
  );
}