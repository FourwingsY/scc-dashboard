import * as google from "@googleapis/sheets";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const sheets = google.sheets("v4");
  const token = req.headers.get("Authorization") ?? "";
  const res = await sheets.spreadsheets.values.batchGet({
    access_token: token,
    spreadsheetId: url.searchParams.get("id") ?? "",
    ranges: [
      "1!A1:P100",
      "2!A1:P100",
      "3!A1:P100",
      "4!A1:P100",
      "5!A1:P100",
      "6!A1:P100",
      "7!A1:P100",
      "8!A1:P100",
      "9!A1:P100",
      "10!A1:P100",
      "11!A1:P100",
      "12!A1:P100",
      "13!A1:P100",
      "14!A1:P100",
      "15!A1:P100",
      "16!A1:P100",
      "17!A1:P100",
      "18!A1:P100",
      "19!A1:P100",
      "20!A1:P100",
      "21!A1:P100",
      "22!A1:P100",
      "23!A1:P100",
      "24!A1:P100",
      "25!A1:P100",
      "26!A1:P100",
      "27!A1:P100",
      "28!A1:P100",
      "29!A1:P100",
      "30!A1:Q100", // 친구초대 컬럼 하나 더 있음
    ],
  });
  return Response.json(res.data);
}
