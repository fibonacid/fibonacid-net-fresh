/** @jsx h */
import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { apply, tw } from "@twind";
import gsap from "gsap"

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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    gsap.from(element, { opacity: 0.0, duration: 1.5 });
  }, []);

  return (
    <div ref={ref} className={tw(avatar, className)}>
      <img
        className={tw("absolute inset-0 w-full h-full object-cover")}
        src="/avatar.jpg"
      />
    </div>
  );
}
