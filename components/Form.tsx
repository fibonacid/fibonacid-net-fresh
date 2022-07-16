/** @jsx h */
import { h, JSX } from "preact";

export type FormProps = JSX.HTMLAttributes<HTMLFormElement>

export default function Form(props: FormProps) {
  return (
    <form {...props} />
  );
}
