/** @jsx h */
import { ComponentChild, h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import "../utils/gsap.ts";

export interface FadeOutProps {
  in: boolean;
  children: ComponentChild;
  timeline: GSAPTimeline;
  vars?: gsap.TweenVars;
  position?: gsap.Position;
}

export default function FadeOut(props: FadeOutProps) {
  const { children, timeline, vars = {}, position } = props;
  const [active, setActive] = useState(true);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      timeline.to(ref.current, {
        opacity: 0,
        ...vars,
        onComplete: () => setActive(false),
      }, position);
    }
  }, []);

  return active ? <span ref={ref}>{children}</span> : null;
}
