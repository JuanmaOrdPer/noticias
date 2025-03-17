import React, { useContext } from 'react'
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';


function NewsNavbar() {
  const {news} = useContext(NewsContext);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" >Noticias</Navbar.Brand>
        <Nav className="me-auto">
        <NavDropdown title="Noticias" id="basic-nav-dropdown">
          {news && Array.isArray(news) && news.map((noticia,id) => (
            <NavDropdown.Item as={Link} to={`/news/${id}`} key={id}>{noticia.titulo}</NavDropdown.Item>
          ))}
        </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NewsNavbar