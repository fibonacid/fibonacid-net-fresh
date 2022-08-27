/** @jsx h */
import { h, JSX, Ref } from "preact";
import { forwardRef } from "preact/compat";
import { apply, tw } from "../utils/twind.ts";
import Input, { InputProps } from "./Input.tsx";
import Button, { ButtonProps } from "./Button.tsx";

export type FormProps = JSX.HTMLAttributes<HTMLFormElement>;

function Form(props: FormProps, ref: Ref<HTMLFormElement>) {
  return <form ref={ref} {...props} />;
}

export default forwardRef(Form);

const input = apply`block`;

export const FormInput = forwardRef<HTMLInputElement, InputProps>(
  function FormInput(props, ref) {
    const { className, ...rest } = props;
    return <Input {...rest} ref={ref} className={tw(input, className)} />;
  },
);

const submit = apply`block`;

export const FormSubmit = forwardRef<HTMLButtonElement, ButtonProps>(
  function FormSubmit(props, ref) {
    const { className, ...rest } = props;
    return (
      <Button {...rest} ref={ref} className={tw(submit, className)}>
        Submit
      </Button>
    );
  },
);
