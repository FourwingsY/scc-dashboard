import { getClient } from "../../getClient";

export async function GET(req: Request) {
  const client = getClient();
  const token = req.headers.get("Authorization") ?? "";

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
  });

  return Response.json({ valid: true });
}
