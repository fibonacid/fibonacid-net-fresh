/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import LoginForm from "../components/LoginForm.tsx";

export default function Home() {
  return (
    <div class={tw`absolute inset-0 bg-black flex justify-center items-center`}>
      <LoginForm password="hello" />
    </div>
  );
}
