/** @jsx h */
import { apply, tw } from "@twind";
import { useImperativeHandle, useRef } from "preact/hooks";
import { h, Ref } from "preact";
import { forwardRef } from "preact/compat";

export interface AvatarProps {
  className?: string;
}

const avatar = apply`
  w-40 
  h-40 
  relative 
  rounded-[50%] 
  overflow-hidden
  border
  border-gray
`;

export type AvatarRef = {
  hello: () => void;
} | null;

function Avatar(props: AvatarProps, ref: Ref<AvatarRef>) {
  const { className } = props;
  const container = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    hello: () => console.log("hello"),
  }));

  return (
    <div ref={container} className={tw(avatar, className)}>
      <img
        className={tw("absolute inset-0 w-full h-full object-cover")}
        src="/avatar.jpg"
      />
    </div>
  );
}

export default forwardRef(Avatar);
