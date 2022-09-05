/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import Center from "../components/Center.tsx";
import LoginForm from "../islands/LoginForm.tsx";

export default function Home() {
  console.log("Hello");
  if (!IS_BROWSER) console.log(Deno.env.toObject());

  return (
    <Layout>
      <Center className={tw`font-sans bg-black flex`}>
        <LoginForm />
      </Center>
    </Layout>
  );
}
