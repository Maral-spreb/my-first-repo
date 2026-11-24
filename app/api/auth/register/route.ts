import { sendResponse } from "@/lib/response";

export async function POST() {
  return sendResponse(
    "register",
    0,
    "Register endpoint ажиллаж байна.",
    []
  );
}