/** @jsx h */
import { apply, tw } from "@twind";
import { h } from "preact";
import { forwardRef } from "preact/compat";
import { MutableRef, useImperativeHandle, useRef } from "preact/hooks";
import gsap from "gsap";

export interface CursorProps {
  className?: string;
}

const cursor = apply`
absolute
left-0
top-0
w-10 
h-10
border
border-gray
rounded-[50%]
`;

export type CursorRef = {
  moveTo: (x: number, y: number) => void;
} | null;

function Cursor(props: CursorProps, ref: MutableRef<CursorRef>) {
  const { className } = props;
  const container = useRef<HTMLSpanElement>(null);

  useImperativeHandle(ref, () => ({
    moveTo(x, y) {
      gsap.to(container.current, { x, y });
    },
  }));

  return <span ref={container} className={tw(cursor, className)} />;
}

export default forwardRef(Cursor);

