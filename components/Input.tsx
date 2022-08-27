/** @jsx h */
import { apply, tw } from "@twind";
import { h, JSX } from "preact";
import { forwardRef } from "preact/compat";

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

export default forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const { className, ...rest } = props;
    return (
      <input
        {...rest}
        ref={ref}
        className={tw(input, className)}
      />
    );
  },
);
