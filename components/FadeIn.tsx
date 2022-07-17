/** @jsx h */
import { ComponentChild, h } from "preact";
import { useLayoutEffect, useRef } from "preact/hooks";

export interface FadeInProps {
  children: ComponentChild;
  timeline: GSAPTimeline;
  vars?: gsap.TweenVars;
  position?: gsap.Position;
}

export default function FadeIn(props: FadeInProps) {
  const { children, timeline, vars = {}, position } = props;
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      timeline.from(ref.current.children, {
        opacity: 0,
        ...vars,
      }, position);
    }
  }, []);

  return <span ref={ref}>{children}</span>;
}
