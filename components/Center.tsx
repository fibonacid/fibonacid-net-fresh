/** @jsx h */
import { h, JSX } from "preact";
import { apply, tw } from "@twind";

type CenterProps = JSX.HTMLAttributes<HTMLDivElement>;

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
