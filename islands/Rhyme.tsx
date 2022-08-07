/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export default function Rhyme() {
  const [line, setLine] = useState<string>("Loading...");

  useEffect(() => {
    const generator = lineGenerator();
    (async function () {
      for await (const line of generator) {
        setLine(line);
      }
    })();
  }, []);

  return <div>{line}</div>;
}

function sleep(s = 1000) {
  return new Promise((resolve) => setTimeout(resolve, s));
}

async function* lineGenerator() {
  while (true) {
    yield "c'era una volte un re";
    await sleep();
    yield "seduto sul sofà";
    await sleep();
    yield "che disse alla sua serva";
    await sleep();
    yield "raccontami una storia";
    await sleep();
    yield "e la serva incominciò:";
    await sleep();
  }
}
