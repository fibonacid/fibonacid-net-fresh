/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useRef } from "preact/hooks";
import Cursor, { CursorProps, CursorRef } from "./Cursor.tsx";

export type MouseCursorProps = CursorProps;

export function MouseCursor(props: MouseCursorProps) {
  const ref = useRef<CursorRef>(null);

  useEffect(() => {
    let visible = false;
    const onMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      if (!visible) {
        ref.current?.to({ opacity: 1 });
        visible = true;
      }
      ref.current?.move(x, y);
    };
    self.addEventListener("mousemove", onMouseMove);
    return () => {
      self.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <Cursor ref={ref} className={tw(`opacity-0`)} />;
}
