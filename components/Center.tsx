/** @jsx h */
import { ComponentChild, h } from "preact";
import { apply, tw } from "@twind";

interface CenterProps {
  children: ComponentChild;
  className?: string;
}

const center = apply`absolute inset-0 flex justify-center items-center`;

export default function Center(props: CenterProps) {
  const { children, className } = props;
  return (
    <div
      className={tw(
        center,
        className,
      )}
    >
      {children}
    </div>
  );
}
