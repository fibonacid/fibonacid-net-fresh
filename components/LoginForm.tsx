/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Avatar from "./Avatar.tsx";

interface LoginFormProps {
  password: string;
}

export default function LoginForm(props: LoginFormProps) {
  const { password } = props;
  return (
    <form>
      <Avatar />
      <div className={tw`p-2`} />
      <input
        className={tw`block text-center leading-loose bg-[#000]`}
        name="password"
        type="password"
        placeholder={`Type "${password}" to enter`}
      />
    </form>
  );
}
