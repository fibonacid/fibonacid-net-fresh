/** @jsx h */
import { apply, tw } from "@twind";
import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import Avatar, { AvatarRef } from "../components/Avatar.tsx";
import Cursor, { CursorRef } from "../components/Cursor.tsx";
import FadeInList from "../components/FadeInList.tsx";
import Form, { FormInput, FormProps, FormSubmit } from "../components/Form.tsx";
import { MouseCursor } from "../components/MouseCursor.tsx";
import Spacer from "../components/Spacer.tsx";
import gsap from "../utils/gsap.ts";

type LoginFormProps = Pick<FormProps, "onSubmit" | "className">;

const form = apply`
  flex
  flex-col
  items-center
`;

export default function LoginForm(props: LoginFormProps) {
  const { className, onSubmit } = props;
  const [timeline] = useState(() => gsap.timeline());

  return (
    <Form
      className={tw(form, className)}
      action="/api/login"
      onSubmit={onSubmit}
    >
      <MouseCursor />
      <FadeInList
        timeline={timeline}
        vars={{ scale: 0, duration: 0.3 }}
        position={"-=50%"}
      >
        <div>
          <Avatar />
          <Spacer className={tw`p-4`} />
        </div>
        <div>
          <FormInput
            className={tw`block text-center leading-loose w-64`}
            name="word"
            type="word"
            placeholder={`Type anything to enter`}
            required
          />
          <Spacer className={tw`p-2`} />
        </div>
        <FormSubmit className={tw`w-full`} />
      </FadeInList>
    </Form>
  );
}
