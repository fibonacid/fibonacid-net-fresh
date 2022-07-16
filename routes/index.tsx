/** @jsx h */
import { Head, asset } from "$fresh/runtime.ts"
import { Fragment, h } from "preact";
import { tw } from "@twind";
import LoginForm from "../components/LoginForm.tsx";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href={asset("/fonts.css")}></link>
      </Head>
      <div
        class={tw`font-sans absolute inset-0 bg-black flex justify-center items-center`}
      >
        <LoginForm password="hello" />
      </div>
    </Fragment>
  );
}
