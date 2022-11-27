import React, { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import { Gallery } from "../components/Gallery/Gallery";
import { Text } from "../components/Text/Text";

export default function MyPage() {
  let [content, setContent] = useState(null);
  let [title, setTitle] = useState("");
  let [url, setUrl] = useState("");
  let [page, setPage] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    if (!url || !title) return;
    setContent((lastState) => [{ url, title }, ...(lastState || [])]);
    setTitle("");
    setUrl("");
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((obj) => setContent(obj));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div
          className="container container-lg container-md container-sm"
          style={{ marginRight: "30%" }}
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
