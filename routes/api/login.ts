import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req, _ctx) {
    const url = new URL(req.url);
    const [password] = url.searchParams.getAll("password");
    if (password) {
      return Response.redirect("http://localhost:8000/" + password);
    }
    return Response.error();
  },
};
