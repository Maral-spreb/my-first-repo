import { sendResponse } from "@/lib/response";

export async function POST() {
  return sendResponse(
    "login",
    0,
    "Login endpoint ажиллаж байна.",
    []
  );
}