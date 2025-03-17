import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContext } from "react";
import { NewsContext } from "../context/NewsContext.js";
import { Link } from "react-router-dom";

function NewsList() {
  const { news } = useContext(NewsContext);
  return (
    <ListGroup variant="flush">
      {news !== undefined &&
        news.map((noticia, id) => (
          <ListGroup.Item key={id}>
            <Link to={`/news/${id}`} className="text-decoration-none">{noticia.titulo}</Link>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}

export default NewsList;
