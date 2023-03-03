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

  document.addEventListener("DOMContentLoaded", function () {
    const backToTopLink = document.createElement("a");
    backToTopLink.href = "#";
    backToTopLink.className = "back-to-top";

    const backToTopImg = document.createElement("img");
    backToTopImg.src = "../../assets/voltar_topo";

    backToTopLink.appendChild(backToTopImg);
    document.body.appendChild(backToTopLink);

    function toTop() {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
          backToTopLink.style.display = "block";
        } else {
          backToTopLink.style.display = "none";
        }
      });

      backToTopLink.addEventListener("click", function (event) {
        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }

    toTop();
  });

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
