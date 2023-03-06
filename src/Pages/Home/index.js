import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import BackToTop from "../../Components/BackToTop/BackToTop";
import Card from "../../Components/Card/Card";
import styles from "./Home.module.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    try {
      const response = await axios.get(
        "https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts"
      );
      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.HomeContent}>
        {posts.map((post) => (
          <Card key={String(post.id)} data={post} />
        ))}

        <BackToTop />
      </main>
    </div>
  );
}
