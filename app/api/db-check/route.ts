import { pool } from "@/lib/db";
import { sendResponse } from "@/lib/response";

export async function GET() {
  try {
    const r = await pool.query(
      "SELECT NOW() AS database_time"
    );

    return sendResponse(
      "db_check",
      0,
      "PostgreSQL холболт амжилттай.",
      [
        {
          connected: true,
          databaseTime: r.rows[0].database_time,
        },
      ]
    );
  } catch (error) {
    console.error("DB check failed", error);

    return sendResponse(
      "db_check",
      5001,
      "Өгөгдлийн сантай холбогдож чадсангүй.",
      [{ connected: false }],
      500
    );
  }
}