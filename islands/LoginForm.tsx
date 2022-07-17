/** @jsx h */
import { apply, tw } from "@twind";
import { h } from "preact";
import Avatar from "../components/Avatar.tsx";
import Form, { FormInput, FormProps, FormSubmit } from "../components/Form.tsx";
import Spacer from "../components/Spacer.tsx";

type LoginFormProps = Pick<FormProps, "onSubmit" | "className">;

const form = apply`
  flex
  flex-col
  items-center
`;

export default function LoginForm(props: LoginFormProps) {
  const { className, onSubmit } = props;
  return (
    <Form className={tw(form, className)} action="/api/login" onSubmit={onSubmit}>
      <Avatar />
      <Spacer className={tw`p-4`} />
      <FormInput
        className={tw`block text-center leading-loose w-64`}
        name="word"
        type="word"
        placeholder={`Type anything to enter`}
        required
      />
      <Spacer className={tw`p-2`} />
      <FormSubmit className={tw`w-full`} />
    </Form>
  );
}
