import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./Card.module.css";
import noImg from "../../assets/no_image";

import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function CardContent({ data, ...rest }) {
  return (
    <Card style={{ width: "35rem", height: "40rem" }} {...rest}>
      {data.featured_media?.large ? (
        //Variação de imagem com ternario
        <Card.Img
          variant="top"
          style={{ objectFit: "cover", height: "23.2rem" }}
          src={data.featured_media?.large}
        />
      ) : (
        <Card.Img
          variant="top"
          style={{ objectFit: "cover", height: "23.2rem" }}
          src={noImg}
        />
      )}
      <Card.Body>
        <Card.Title className={styles.title}>{data.title}</Card.Title>
        <Card.Text className={styles.description}>
          {data.categories[0].description}
        </Card.Text>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            margin: "50px 10px 10px 10px",
          }}
          className="divBtn"
        >
          <Button
            href={data.link}
            id={styles.button}
            variant="primary"
            target="_blank"
          >
            Lea mas
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

/*
<div className={styles.container} {...rest}>
<div className={styles.Card}>
  <div>
    <img src={data.featured_media?.large} />
  </div>
  <div className={styles.CardContent}>
    <h1 className={styles.CardTitulo}>{data.title}</h1>
    <p className={styles.CardDescricao}>
      {data.categories[0].description}
    </p>
    <span className={styles.CardTag}>{data.categories[0].name}</span>
  </div>
</div>
</div>
);
*/
