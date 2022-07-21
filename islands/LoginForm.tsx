/** @jsx h */
import { apply, tw } from "@twind";
import { h } from "preact";
import { useCallback, useState } from "preact/hooks";
import Avatar from "../components/Avatar.tsx";
import FadeIn from "../components/FadeIn.tsx";
import FadeInList from "../components/FadeInList.tsx";
import Form, { FormInput, FormProps, FormSubmit } from "../components/Form.tsx";
import { MouseCursor } from "../components/MouseCursor.tsx";
import Spacer from "../components/Spacer.tsx";
import gsap from "../utils/gsap.ts";

const form = apply`
  flex
  flex-col
  items-center
`;

const redirect = (word: string) => {
  window.location.href = "/api/login?word=" + word;
};

export default function LoginForm() {
  const [timeline] = useState(() => gsap.timeline());
  const [word, setWord] = useState<string>();
  const [showSubmit, setShowSubmit] = useState(false);
  return (
    <Form
      className={tw(form)}
      action="/api/login"
      onSubmit={(event) => {
        event.preventDefault();
        const { value } = event.currentTarget;
        redirect(value)
      }}
      onBlur={() => {
        setShowSubmit(!!word?.length);
      }}
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
            onChange={(event) => setWord(event.currentTarget.value)}
            value={word}
          />
        </div>
      </FadeInList>
      {showSubmit && (
        <FadeIn
          timeline={timeline}
          vars={{ scale: 0, duration: 0.3 }}
        >
          <Spacer className={tw`p-2`} />
          <FormSubmit className={tw`w-full`} />
        </FadeIn>
      )}
    </Form>
  );
}
