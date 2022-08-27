/** @jsx h */
import { apply, tw } from "@twind";
import { Fragment, h } from "preact";
import { useRef, useState } from "preact/hooks";
import Avatar from "../components/Avatar.tsx";
import Form, { FormInput, FormSubmit } from "../components/Form.tsx";
import { MouseCursor } from "../components/MouseCursor.tsx";
import Spacer from "../components/Spacer.tsx";
import { siteUrl } from "../utils/env.ts";
import gsap, { Flip } from "../utils/gsap.ts";

const form = apply`
  flex
  flex-col
  items-center
`;

const redirect = (word: string) => {
  const url = new URL(siteUrl + "/api/login");
  url.searchParams.append("word", word);
  window.location.assign(url);
};

export default function LoginForm() {
  const [word, setWord] = useState<string>();

  const formRef = useRef<HTMLFormElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);

  const toggleSubmit = (show: boolean) => {
    // Collect elements
    const submit = submitRef.current;
    const avatar = avatarRef.current;
    const input = inputRef.current;
    console.log(show);

    if (submit) {
      // Capture state
      const targets = [submit, avatar, input];
      const state = Flip.getState(targets);

      // Alter state
      if (show) {
        submit.classList.remove("hidden");
      } else {
        submit.classList.add("hidden");
      }

      // Animate
      Flip.from(state, {
        absolute: true,
        onEnter() {
          gsap.to(submit, { opacity: 1 });
        },
        onLeave() {
          gsap.to(submit, { opacity: 0 });
        },
      });
    }
  };

  return (
    <Fragment>
      <MouseCursor />
      <Form
        ref={formRef}
        className={tw(form)}
        action="/api/login"
        onSubmit={(event) => {
          event.preventDefault();
          if (word) {
            gsap.to(formRef.current, {
              opacity: 0,
              duration: 0.3,
              onComplete() {
                redirect(word);
              },
            });
          }
        }}
        onBlur={() => {
          toggleSubmit(!!word);
        }}
      >
        <Avatar ref={avatarRef} />
        <Spacer className={tw`p-4`} />
        <FormInput
          ref={inputRef}
          className={tw`block text-center leading-loose w-64`}
          name="word"
          type="word"
          placeholder={`Type anything to enter`}
          required
          onChange={(event) => setWord(event.currentTarget.value)}
          value={word}
        />
        <Spacer className={tw`p-2`} />
        <FormSubmit ref={submitRef} className={tw`w-full hidden opacity-0`} />
      </Form>
    </Fragment>
  );
}
