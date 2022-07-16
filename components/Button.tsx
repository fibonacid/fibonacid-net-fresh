/** @jsx h */
import { ComponentChildren, h } from "preact";
import { apply, tw } from "@twind";

interface ButtonProps {
  className?: string;
  onClick?: (event: MouseEvent) => void;
  children: ComponentChildren;
}

const button = apply`text-black bg-white px-4 py-1 rounded-md w-24`;

export default function ButtonProps(props: ButtonProps) {
  const { children, className, onClick } = props;
  return (
    <button className={tw(button, className)} onClick={onClick}>
      {children}
    </button>
  );
}
