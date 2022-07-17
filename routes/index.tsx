/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "../components/Layout.tsx";
import Center from "../components/Center.tsx";
import LoginForm from "../islands/LoginForm.tsx";

export default function Home() {
  return (
    <Layout>
      <Center className={tw`font-sans bg-black flex`}>
        <LoginForm />
      </Center>
    </Layout>
  );
}
