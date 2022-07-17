/** @jsx h */
import { h, JSX } from "preact";
import { apply, tw } from "@twind";

export type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement>;

const button = apply`
  text-black 
  bg-white 
  px-4 
  py-1 
  rounded-md 
  w-24
  border
  border-gray
`;

export default function ButtonProps(props: ButtonProps) {
  const { className, ...rest } = props;
  return <button className={tw(button, className)} {...rest} />;
}
