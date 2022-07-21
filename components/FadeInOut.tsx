/** @jsx h */
import { ComponentChild, h } from "preact";
import FadeIn from "./FadeIn.tsx";
import FadeOut from "./FadeOut.tsx";
import "../utils/gsap.ts"

export interface FadeInOutProps {
  show: boolean;
  children: ComponentChild;
  timeline: GSAPTimeline;
  position?: gsap.Position;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
}

export default function FadeInOut(props: FadeInOutProps) {
  const { from = {}, to = {}, show, ...rest } = props;

  return <FadeIn {...rest}><FadeOut in={props.show} {...rest} /></FadeIn>
}
