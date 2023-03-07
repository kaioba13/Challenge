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
      {contents ? <Card abc={true} data={contents} /> : <div>Nada</div>}
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

{contents.metas ? <h2>{contents.metas.title}</h2> : <div>Nada</div>}
*/
