/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
import Avatar from "./Avatar.tsx";
import Form, { FormInput, FormProps, FormSubmit } from "./Form.tsx";
import Spacer from "./Spacer.tsx";

type LoginFormProps = Pick<FormProps, "onSubmit" | "className">

export default function LoginForm(props: LoginFormProps) {
  const { className, onSubmit } = props;
  return (
    <Form className={className} action="/api/login" onSubmit={onSubmit}>
      <Avatar />
      <Spacer className={tw`p-2`} />
      <FormInput
        className={tw`block text-center leading-loose bg-[#000]`}
        name="word"
        type="word"
        placeholder={`Type anything to enter`}
      />
      <Spacer className={tw`p-2`} />
      <FormSubmit className={tw`w-full`} />
    </Form>
  );
}
