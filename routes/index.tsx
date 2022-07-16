/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "../components/Layout.tsx";
import LoginForm from "../components/LoginForm.tsx";

export default function Home() {
  return (
    <Layout>
      <div
        class={tw
          `font-sans absolute inset-0 bg-black flex justify-center items-center`}
      >
        <LoginForm password="hello" />
      </div>
    </Layout>
  );
}
