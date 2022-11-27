import React, { useState } from "react";
import { Button } from "../components/Button/Button";
import { Gallery } from "../components/Gallery/Gallery";
import { Text } from "../components/Text/Text";
import css from "./gallery.module.css";

export default function MyPage({ data }) {
  const [content, setContent] = useState(data);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    if (!url || !title) return;
    setContent((lastState) => [{ url, title }, ...(lastState || [])]);
    setTitle("");
    setUrl("");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div
          className="container container-lg container-md container-sm"
          id={css.block}
        >
          <form onSubmit={handleClick}>
            <div>
              <Text>URL</Text>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <div>
              <Text>Name</Text>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <Button type="submit">Add image</Button>
          </form>
        </div>
        <div>
          <Button
            type="button"
            onClick={() => setPage((p) => (p - 1 > -1 ? p - 1 : 0))}
          >
            prev
          </Button>
          <Button type="button" onClick={() => setPage((p) => p + 1)}>
            next
          </Button>
          <Text>Page #{page}</Text>
        </div>
      </nav>
      {content && (
        <Gallery content={content?.slice(page * 9, (page + 1) * 9)}></Gallery>
      )}
    </div>
  );
}

export async function getStaticProps(context) {
  const obj = await fetch("https://jsonplaceholder.typicode.com/photos").then(
    (res) => res.json()
  );
  return {
    props: {
      data: obj,
    },
  };
}
