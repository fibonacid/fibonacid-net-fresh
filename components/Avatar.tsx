/** @jsx h */
import { h } from "preact";
import { apply, tw } from "@twind";

interface AvatarProps {
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

export default function Avatar(props: AvatarProps) {
  const { className } = props;
  return (
    <div className={tw(avatar, className)}>
      <img
        className={tw("absolute inset-0 w-full h-full object-cover")}
        src="/avatar.jpg"
      />
    </div>
  );
}
