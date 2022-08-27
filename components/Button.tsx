/** @jsx h */
import { h, JSX } from "preact";
import { forwardRef } from "preact/compat";
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

export default forwardRef<HTMLButtonElement, ButtonProps>(
  function ButtonProps(props, ref) {
    const { className, ...rest } = props;
    return <button {...rest} ref={ref} className={tw(button, className)} />;
  },
);
