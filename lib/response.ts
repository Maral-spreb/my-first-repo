export function getMongoliaTime(): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Ulaanbaatar",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const p = Object.fromEntries(
    parts.map((x) => [x.type, x.value])
  );

  return `${p.year}-${p.month}-${p.day} ${p.hour}:${p.minute}:${p.second}`;
}

export function sendResponse<T>(
  action: string,
  resultCode: number,
  resultMessage: string,
  data: T[] = [],
  httpStatus = 200
) {
  return Response.json(
    {
      action,
      resultCode,
      resultMessage,
      data,
      len: data.length,
      date: getMongoliaTime(),
    },
    {
      status: httpStatus,
    }
  );
}