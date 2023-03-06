import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import noImg from "../../assets/no_image";
import styles from "./Details.module.css";
import Button from "react-bootstrap/Button";

export default function Details() {
  const [contents, setContent] = useState([]);

  async function loadContent() {
    try {
      const response = await axios.get(
        "https://api.beta.mejorconsalud.com/wp-json/mc/v1/categories/salud"
      );
      debugger;
      const data = response.data;
      console.log(data.metas.title);
      setContent(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadContent();
  }, []);

  return (
    <div className={styles.container}>
      <h2>{contents.metas.title}</h2>
      <p>{contents.metas.description}</p>
    </div>
  );
}
/*
const [contents, setContent] = useState([]);

async function loadContent() {
  try {
    const response = await axios.get(
      "https://api.beta.mejorconsalud.com/wp-json/mc/v1/categories/salud"
    );
    const data = response.data;

    setContent(data);
    console.log(data.sidebar.widgets[4].content);
  } catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  loadContent();
}, []);
return (
  <div>
    <main>
      {contents.map((content) => (
        <Card key={String(content.id)} data={content} />
      ))}
    </main>
  </div>
);
*/
