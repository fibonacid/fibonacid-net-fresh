import { Handlers } from "$fresh/server.ts";
import { siteUrl } from "../../utils/env.ts";

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
