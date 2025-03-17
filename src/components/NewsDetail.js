import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import { useParams } from "react-router";
import { Card } from "react-bootstrap";

function NewsDetail() {
  const { news } = useContext(NewsContext);
  const { id } = useParams();

  const index = parseInt(id, 10);


  const noticia = news && Array.isArray(news) && index >= 0 && index < news.length 
    ? news[index] 
    : undefined;

  if (!noticia) {
    return <div>Cargando...</div>;
  }

  return (
    <Card style={{ width: "24rem" }} className="mx-auto mt-5 mb-5 shadow border border-dark border-2 ">
      <Card.Header>
        <Card.Title className="text-center fw-bold fs-3">{noticia.titulo}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>Categoria:</strong> {noticia.categoria} <p>Fecha: {noticia.fecha} </p>  Por: {noticia.autor}
        </Card.Text>
        <Card.Text>{noticia.contenido}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewsDetail;
