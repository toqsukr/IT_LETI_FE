import React from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "../components/Card/Card";
import Head from "next/head";

const BlogItem = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <div>
      <Head>
        <title>Blog page</title>
      </Head>
      {
        <div
          className="container container-lg container-md container-sm"
          style={{ maxWidth: "600px", maxHeight: "600px" }}
        >
          <Card url={data.url} title={data.title} />
        </div>
      }
    </div>
  );
};

export default BlogItem;

export async function getStaticProps(context) {
  const obj = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${context.params.id}`
  ).then((res) => res.json());
  return {
    props: {
      data: obj,
    },
  };
}

export async function getStaticPaths(context) {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}
