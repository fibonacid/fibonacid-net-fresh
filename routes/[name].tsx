/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import Center from "../components/Center.tsx";

export default function Greet(props: PageProps) {
  return (
    <Layout>
      <Center>Word: {props.params.name}</Center>
    </Layout>
  );
}
