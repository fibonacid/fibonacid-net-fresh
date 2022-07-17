/** @jsx h */
import { h } from "preact";
import { apply, tw } from "../utils/twind.ts";

export interface SpacerProps {
  className?: string;
}

const spacer = apply`p-4`;

export default function Spacer(props: SpacerProps) {
  const { className } = props;
  return <div className={tw(spacer, className)} />;
}
