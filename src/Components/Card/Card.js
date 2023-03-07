import React from "react";
import Card from "react-bootstrap/Card";
import noImg from "../../assets/no_image";
import Button from "react-bootstrap/Button";
import styles from "./Card.module.css";

export default function CardContent({ data, abc, ...rest }) {
  if (abc) {
    const result = data.sidebar.widgets[4].content;
    console.log(result);
    return (
      <div className={styles.contentCard}>
        {result.map((item) => {
          return (
            <Card style={{ width: "32rem", height: "32rem" }} {...rest}>
              {item.featured_media?.large ? (
                //Variação de imagem com ternario
                <Card.Img
                  variant="top"
                  style={{ objectFit: "cover", height: "23.2rem" }}
                  src={item.featured_media?.large}
                />
              ) : (
                <Card.Img
                  variant="top"
                  style={{ objectFit: "cover", height: "23.2rem" }}
                  src={noImg}
                />
              )}
              <Card.Body>
                <Card.Title className={styles.title}>{item.title}</Card.Title>

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
                    href={`/Details/${data.id}/${item.id}`}
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
        })}
      </div>
    );
  }
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
