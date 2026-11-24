import { getMongoliaTime, sendResponse } from "@/lib/response";

export async function POST() {
  return sendResponse(
    "time",
    0,
    "Монголын цаг амжилттай авлаа.",
    [{ time: getMongoliaTime() }]
  );
}