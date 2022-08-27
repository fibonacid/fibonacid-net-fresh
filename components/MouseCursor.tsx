/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useRef } from "preact/hooks";
import Cursor, { CursorProps, CursorRef } from "./Cursor.tsx";

export type MouseCursorProps = CursorProps;

export function MouseCursor(props: MouseCursorProps) {
  const { className } = props;
  const ref = useRef<CursorRef>(null);

  useEffect(() => {
    let visible = false;

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      if (!visible) {
        ref.current?.to({ opacity: 1 });
        visible = true;
      }
      ref.current?.move(x, y);
    };

    const handleFocusIn = () => {
      console.log("focus in");
      ref.current?.to({ scale: 0, opacity: 0 });
    };

    const handleFocusOut = () => {
      console.log("focus out");
      ref.current?.to({ scale: 1, opacity: 1 });
    };

    self.addEventListener("mousemove", handleMouseMove);
    self.addEventListener("focusin", handleFocusIn);
    self.addEventListener("focusout", handleFocusOut);

    return () => {
      self.removeEventListener("mousemove", handleMouseMove);
      self.removeEventListener("foc1usin", handleFocusIn);
      self.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  return (
    <Cursor {...props} ref={ref} className={tw(`opacity-0 -z-1`, className)} />
  );
}
