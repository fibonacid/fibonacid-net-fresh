/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useRef } from "preact/hooks";
import Cursor, { CursorProps, CursorRef } from "./Cursor.tsx";

export type MouseCursorProps = CursorProps;

export function MouseCursor(props: MouseCursorProps) {
  const ref = useRef<CursorRef>(null);
  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      ref.current?.moveTo(x, y);
    };
    self.addEventListener("mousemove", onMouseMove);
    return () => {
      self.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <Cursor ref={ref} className={tw(``)} />;
}
