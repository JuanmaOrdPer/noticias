import React from 'react'
import NewsList from '../components/NewsList'
import { Container } from 'react-bootstrap'

function Home() {
  return (
    <Container className='mt-3 mb-3 bg-light p-3 rounded shadow border border-dark border-2 '>
    <h1 className='text-center fw-bold fs-1 text-uppercase text-black 100px180' >Listado de Noticias</h1>
    <NewsList/>
    </Container>
  )
}

export default Home