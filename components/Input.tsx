/** @jsx h */
import { h, JSX } from "preact";
import { apply, tw } from "@twind";

type InputProps = JSX.HTMLAttributes<HTMLInputElement>;

const input = apply`block text-center leading-loose bg-[#000]`;

export default function Input(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <input
      className={tw(input, className)}
      {...rest}
    />
  );
}
