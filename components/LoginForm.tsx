/** @jsx h */
import { h, JSX } from "preact";
import { tw } from "@twind";
import Avatar from "./Avatar.tsx";
import Button from "./Button.tsx";
import Input from "./Input.tsx";
import Form, { FormProps } from "./Form.tsx";

interface LoginFormProps extends Pick<FormProps, "onSubmit"> {
  password: string;
}

export default function LoginForm(props: LoginFormProps) {
  const { password, onSubmit } = props;
  return (
    <Form action="/api/login" onSubmit={onSubmit}>
      <Avatar />
      <div className={tw`p-2`} />
      <Input
        className={tw`block text-center leading-loose bg-[#000]`}
        name="password"
        type="password"
        placeholder={`Type "${password}" to enter`}
      />
      <div className={tw`p-2`} />
      <Button className={tw`w-full`}>Submit</Button>
    </Form>
  );
}
