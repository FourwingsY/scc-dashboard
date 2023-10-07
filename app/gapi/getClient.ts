import * as google from "@googleapis/sheets";

const CLIENT_ID = "386913378487-jca583phk73elbpc799op3ffgp0lchd5.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "http://localhost:3000/gapi/oauth/callback";

export function getClient() {
  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
  return oAuth2Client;
}
