import NewsDetail from '../components/NewsDetail'
import { Carousel, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { NewsContext } from '../context/NewsContext'


function Details() {
  const {news} = useContext(NewsContext);

  return (
    <Container className='mt-3 mb-3 bg-light p-3 rounded shadow'>
    <Carousel variant='dark' className='mt-3 mb-3 bg-light p-3 rounded shadow ' indicators={false}>
      <h3 className='text-center fw-bold fs-1 text-uppercase text-black 100px180'>Otras noticias</h3>
      {news && Array.isArray(news) && news.map((noticia,id) => (
            <Carousel.Item as={Link} to={`/news/${id}`} key={id} className=' dark text-decoration-none text-black text-center shadow'>{noticia.titulo}</Carousel.Item>
          ))}
          <p>  </p>
    </Carousel>
    <NewsDetail />
    </Container>
  )
}

export default Details