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

export default forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(props, ref) {
    const { className } = props;

    return (
      <div ref={ref} className={tw(avatar, className)}>
        <img
          className={tw("absolute inset-0 w-full h-full object-cover")}
          src="/avatar.jpg"
        />
      </div>
    );
  },
);
