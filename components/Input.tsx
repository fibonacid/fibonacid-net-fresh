/** @jsx h */
import { h, JSX } from "preact";
import { apply, tw } from "@twind";

export type InputProps = JSX.HTMLAttributes<HTMLInputElement>;

const input = apply`
  block 
  text-center 
  leading-loose 
  bg-black 
  px-2 
  border 
  border-gray
  rounded-md
`;

export default function Input(props: InputProps) {
  const { className, ...rest } = props;
  return (
    <input
      className={tw(input, className)}
      {...rest}
    />
  );
}
