/** @jsx h */
import { h, JSX } from "preact";
import { apply, tw } from "@twind";

export type InputProps = JSX.HTMLAttributes<HTMLInputElement>;

const input = apply`block text-center leading-loose bg-black`;

export default function Input(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <input
      className={tw(input, className)}
      {...rest}
    />
  );
}
