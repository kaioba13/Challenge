import React from "react";
import styles from "./Card.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardContent({ data, ...rest }) {
  return (
    <Card style={{ width: "35rem" }} {...rest}>
      <Card.Img variant="top" src={data.featured_media?.large} />
      <Card.Body>
        <Card.Title className={styles.title}>{data.title}</Card.Title>
        <Card.Text className={styles.description}>
          {data.categories[0].description}
        </Card.Text>
        <Button
          href={data.link}
          id={styles.button}
          variant="primary"
          target="_blank"
        >
          Lea mas
        </Button>
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
