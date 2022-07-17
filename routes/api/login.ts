import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req, _ctx) {
    const url = new URL(req.url);
    const word = url.searchParams.get("word");
    if (word) {
      return Response.redirect("http://localhost:8000/" + word);
    }
    return Response.error()
  },
};
