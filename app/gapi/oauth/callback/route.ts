import { getClient } from "../../getClient";

export async function GET(req: Request) {
  const oAuth2Client = getClient();

  const url = new URL(req.url, "http://localhost:3000");
  const qs = url.searchParams;
  const code = qs.get("code");
  console.log(`Code is ${code}`);

  if (!code) {
    return Response.redirect(`${url.origin}/auth/callback?error=failed`);
  }

  // Now that we have the code, use that to acquire tokens.
  const r = await oAuth2Client.getToken(code);
  // Make sure to set the credentials on the OAuth2 client.
  oAuth2Client.setCredentials(r.tokens);
  console.info("Tokens acquired.");

  return Response.redirect(`${url.origin}/auth/callback?token=${r.tokens.access_token}`);
}
