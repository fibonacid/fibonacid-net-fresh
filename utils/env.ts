import { IS_BROWSER } from '$fresh/runtime.ts';

export const siteUrl = IS_BROWSER ? 
    window.location.origin : 
    Deno.env.get("SITE_URL") || "http://localhost:8000";
