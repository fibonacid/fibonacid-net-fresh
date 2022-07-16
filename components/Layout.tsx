/** @jsx h */
import { asset, Head } from "$fresh/runtime.ts";
import { ComponentChildren, Fragment, h } from "preact";
import { theme, tw } from "../utils/twind.ts";
import { css } from "twind/css";

interface LayoutProps {
  children: ComponentChildren;
}

const globalStyles = css({
  ":global": {
    body: {
      color: theme("colors.white"),
      backgroundColor: theme("colors.black"),
      fontFamily: theme("fontFamily.sans"),
    },
  },
});

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href={asset("/fonts.css")}></link>
      </Head>
      <div className={tw(globalStyles)}></div>
      <main>
        {children}
      </main>
    </Fragment>
  );
}
