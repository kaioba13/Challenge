import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Content.module.css";

export default function Content({ data }) {
  const [post, setPost] = useState(null);
  const { idContent } = useParams();

  async function loadPosts() {
    try {
      const response = await axios.get(
        `https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts/${idContent} `
      );
      const data = response.data;
      console.log(data);
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <img src={post.featured_media.medium} />
          <div
            className={styles.divContent}
            dangerouslySetInnerHTML={{
              __html: `<div>${post?.content || ""}</div>`,
            }}
          />
          <span>{post.tags[0].name}</span>
          <p>{post.author.name}</p>
          <span>{post.published}</span>
          <div
            dangerouslySetInnerHTML={{
              __html: `<div>${post?.bibliography || ""}</div>`,
            }}
          />
        </div>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
}
