/** @jsx h */
import { h, JSX } from "preact";
import { apply, tw } from "../utils/twind.ts";
import Input, { InputProps } from "./Input.tsx";
import Button, { ButtonProps } from "./Button.tsx";

export type FormProps = JSX.HTMLAttributes<HTMLFormElement>;

export default function Form(props: FormProps) {
  return <form {...props} />;
}

const input = apply`block`;

export function FormInput(props: InputProps) {
  const { className, ...rest } = props;
  return <Input className={tw(input, className)} {...rest} />;
}

const submit = apply`block`;

export function FormSubmit(props: ButtonProps) {
  const { className, ...rest } = props;
  return <Button className={tw(submit, className)} {...rest}>Submit</Button>;
}
