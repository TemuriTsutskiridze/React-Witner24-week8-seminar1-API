import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Posts() {
  const [data, setData] = useState<TPosts>([]);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (response.status === 200) {
          const data = await response.data;
          setData(data);
        } else {
          throw new Error("Failed to fetch Posts");
        }
      } catch (error) {
        setError(true);
      }
    }

    fetchPost();
  }, []);
  return (
    <>
      {error ? (
        <h1>Network Error</h1>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {data.map((post) => {
            return (
              <div
                key={post?.id}
                style={{
                  border: "2px solid red",
                  cursor: "pointer",
                }}
              >
                <h2>{post?.title}</h2>
                <Link to={`/posts/${post?.id}`}>See More...</Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Posts;
