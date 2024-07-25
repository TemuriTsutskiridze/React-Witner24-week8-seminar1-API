import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const [post, setPost] = useState<IPost>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [postBody, setPostBody] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        if (response.status === 200) {
          const data = await response.data;
          setPost(data);
          setLoading(false);
        } else {
          throw new Error("Failed to fetch a post");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPost();
  }, []);

  async function fetchPostBody() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.data;
    setPostBody(data.body);
  }

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{post?.title}</h1>
          <h2>This post was posted by {post?.userId} user</h2>
          <button onClick={fetchPostBody}>Show Body</button>
          {postBody ? <p>{postBody}</p> : null}
        </div>
      )}
    </>
  );
}
