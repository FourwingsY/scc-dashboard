import { getClient } from "../../getClient";

export async function GET(req: Request) {
  const client = getClient();
  const bearerToken = req.headers.get("Authorization") ?? "";
  const token = bearerToken.replace("Bearer ", "");
  if (!token) {
    return Response.json({ valid: false });
  }

  const tokenInfo = await client.getTokenInfo(token);
  if (new Date(tokenInfo.expiry_date) < new Date()) {
    return Response.json({ valid: false });
  }

  return Response.json({ valid: true });
}
