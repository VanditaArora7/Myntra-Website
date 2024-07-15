import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Mid from '../Mid/Mid'
import './MyCarousel.css'
import MoodBoard from '../MoodBoard/MoodBoard'

const MyCarousel = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item className='carousel-item'>
       <Mid/>
        {/* <Carousel.Caption className='carousel-caption'>
         
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
       <MoodBoard/>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
     
    </Carousel>
  )
}

export default MyCarousel
