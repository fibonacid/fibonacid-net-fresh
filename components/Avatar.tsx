/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";


export default function Avatar() {
  return (
    <div className={tw("w-40 h-40 relative rounded-[50%] overflow-hidden")}>
      <img className={tw("absolute inset-0 w-full h-full object-cover")} src="/avatar.jpg" />
    </div>
  );
}
