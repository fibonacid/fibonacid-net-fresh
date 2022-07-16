/** @jsx h */
import { ComponentChild, h } from "preact";
import { tw } from "@twind";

interface CenterProps {
  children: ComponentChild;
  className?: string;
}

export default function Center(props: CenterProps) {
  const { children, className } = props;
  return (
    <div
      className={tw(
        "absolute inset-0 flex justify-center items-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
