/** @jsx h */
import { apply, tw } from "@twind";
import { ComponentChildren, h } from "preact";
import { useState } from "preact/hooks";
import Avatar from "../components/Avatar.tsx";
import FadeIn from "../components/FadeIn.tsx";
import Form, { FormInput, FormProps, FormSubmit } from "../components/Form.tsx";
import Spacer from "../components/Spacer.tsx";
import gsap from "../utils/gsap.ts";

type LoginFormProps = Pick<FormProps, "onSubmit" | "className">;

const form = apply`
  flex
  flex-col
  items-center
`;

const timelineVars = {
  scale: 0,
};
const timelinePosition = "-=50%"

export default function LoginForm(props: LoginFormProps) {
  const { className, onSubmit } = props;
  const [timeline] = useState(() => gsap.timeline());
  return (
    <Form
      className={tw(form, className)}
      action="/api/login"
      onSubmit={onSubmit}
    >
      <FadeIn timeline={timeline} vars={timelineVars} position={timelinePosition}>
        <Avatar />
      </FadeIn>
      <Spacer className={tw`p-4`} />
      <FadeIn timeline={timeline} vars={timelineVars} position={timelinePosition}>
        <FormInput
          className={tw`block text-center leading-loose w-64`}
          name="word"
          type="word"
          placeholder={`Type anything to enter`}
          required
        />
      </FadeIn>
      <Spacer className={tw`p-2`} />
      <FadeIn timeline={timeline} vars={timelineVars} position={timelinePosition}>
        <FormSubmit className={tw`w-full`} />
      </FadeIn>
    </Form>
  );
}
