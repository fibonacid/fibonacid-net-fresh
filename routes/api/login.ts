import { Handlers } from "$fresh/server.ts";

const siteUrl = Deno.env.get("SITE_URL") || "http://localhost:8000";

export const handler: Handlers = {
  GET(req, _ctx) {
    const url = new URL(req.url);
    const word = url.searchParams.get("word");
    if (word) {
      return Response.redirect(siteUrl + "/" + word);
    }
    return Response.error();
  },
};
