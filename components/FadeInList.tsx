/** @jsx h */
import { ComponentChildren, Fragment, h, toChildArray } from "preact";
import FadeIn from "./FadeIn.tsx";

export interface FadeInListProps {
  children: ComponentChildren;
  timeline: GSAPTimeline;
  vars?: GSAPTimelineVars;
  position?: gsap.Position;
}

export default function FadeInList<T,>(props: FadeInListProps) {
  const { timeline, vars, position, children } = props;
  return (
    <Fragment>
      {toChildArray(children).map((child, index) => (
        <FadeIn key={index} timeline={timeline} vars={vars} position={position}>
          {child}
        </FadeIn>
      ))}
    </Fragment>
  );
}
