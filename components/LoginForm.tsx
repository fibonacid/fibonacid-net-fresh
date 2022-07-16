/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Avatar from "./Avatar.tsx";
import Form, { FormInput, FormProps, FormSubmit } from "./Form.tsx";

type LoginFormProps = Pick<FormProps, "onSubmit" | "className">

export default function LoginForm(props: LoginFormProps) {
  const { className, onSubmit } = props;
  return (
    <Form className={className} action="/api/login" onSubmit={onSubmit}>
      <Avatar />
      <div className={tw`p-2`} />
      <FormInput
        className={tw`block text-center leading-loose bg-[#000]`}
        name="word"
        type="word"
        placeholder={`Type anything to enter`}
      />
      <div className={tw`p-2`} />
      <FormSubmit className={tw`w-full`} />
    </Form>
  );
}
