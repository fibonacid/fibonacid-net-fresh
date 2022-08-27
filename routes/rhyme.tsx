/** @jsx h */
import { h } from "preact";
import Center from "../components/Center.tsx";
import Layout from "../components/Layout.tsx";
import MyRhyme from "../islands/Rhyme.tsx";

export default function Rhyme() {
  return (
    <Layout>
      <Center>
        <MyRhyme />
      </Center>
    </Layout>
  );
}
