import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
import noImg from "../../assets/no_image";
import styles from "./Details.module.css";
import Button from "react-bootstrap/Button";

export default function Details() {
  const [contents, setContent] = useState(null);
  const { id } = useParams();

  async function loadContent() {
    try {
      const response = await axios.get(
        `https://api.beta.mejorconsalud.com/wp-json/mc/v1/categories/${id}`
      );

      const data = response.data;
      console.log(data);
      setContent(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadContent();
  }, []);

  return (
    <div>
      {contents ? (
        <main className={styles.content}>
          <div className={styles.contentDescription}>
            <h2>{contents.name}</h2>
            <p>{contents.description}</p>
          </div>

          <div className={styles.contentCard}>
            <Card abc={true} data={contents} />
          </div>
        </main>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
}
