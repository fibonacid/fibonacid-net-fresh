/** @jsx h */
import { apply, tw } from "@twind";
import { h } from "preact";
import { forwardRef } from "preact/compat";
import { MutableRef, useImperativeHandle, useRef } from "preact/hooks";
import gsap from "../utils/gsap.ts";

export interface CursorProps {
  className?: string;
}

const WIDTH = 40;

const cursor = apply`
absolute
left-0
top-0
w-[${WIDTH}px]
h-[${WIDTH}px]
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
      gsap.to(container.current, {
        x: x - WIDTH * 0.5,
        y: y - WIDTH * 0.5,
      });
    },
  }));

  return (
    <span
      ref={container}
      className={tw(
        cursor,
        className,
      )}
    />
  );
}

export default forwardRef(Cursor);
