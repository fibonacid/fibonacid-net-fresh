/** @jsx h */
import { ComponentChild, h } from "preact";
import { useLayoutEffect, useRef, useState } from "preact/hooks";
import { apply, tw } from "@twind";
import gsap from "../utils/gsap.ts";

export interface FadeInProps {
  children: ComponentChild;
  timeline?: GSAPTimeline;
  vars?: gsap.TweenVars;
  position?: gsap.Position;
  className?: string;
}

const container = apply`block`;

export default function FadeIn(props: FadeInProps) {
  const { className, children, timeline, vars = {}, position } = props;
  const [animation] = useState(() => timeline || gsap.timeline());
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      animation.from(ref.current.children, {
        opacity: 0,
        ...vars,
      }, position);
    }
  }, []);

  return <span className={tw(container, className)} ref={ref}>{children}</span>;
}
