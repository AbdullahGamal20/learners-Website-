import { Col, Container, Row } from "react-bootstrap";
import "./Testimonials.css"
import testImage01 from"../../assets/testimonial01.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';





function Testimonials(){

  const settings = {
    infinite: true,
    dots:true,
    speed: 500,
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed :3000,
    slidesToScroll: 1
  };
  return(
    <section>
      <Container>
        <Row>
          <Col lg='10'  className="m-auto main">
            <div className="testimonial__wrapper d-flex 
            justify-content-between align-items-center   ">

                <div className="testimonial__image w-50">
                  <img src={testImage01} alt="Testimonials Image" className="w-100" />
                </div>
                
                <div className="testimonial__content w-50 text-start ">
                  <h2 className="mb-4 head">Our Students Voice </h2>
                  <Slider {...settings}>

                    <div className="ahmed" >
                      <div className="single__testimonial ">
                          <h6 className="mb-3 fw-bold">Excellent Course of Materials</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Amet aperiam laudantium provident provident <br />
                            Praesentium architecto beatae commodi provident <br /> et veritatis? ratione tempore?  provident veritatis
                          </p>
                          <div className="student__info mt-4">
                            <h6 className="fw-bold">Jhon Doe</h6>
                            <p>California , USA</p>
                          </div>
                      </div>
                    </div>

                    <div >
                      <div className="single__testimonial ">
                          <h6 className="mb-3 fw-bold">Excellent Course of Materials</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Amet aperiam laudantium provident provident <br />
                            Praesentium architecto beatae commodi provident <br /> et veritatis? ratione tempore?  provident veritatis
                          </p>
                          <div className="student__info mt-4">
                            <h6 className="fw-bold">Jhon Doe</h6>
                            <p>California , USA</p>
                          </div>
                      </div>
                    </div>

                    <div >
                      <div className="single__testimonial ">
                          <h6 className="mb-3 fw-bold">Excellent Course of Materials</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Amet aperiam laudantium provident provident <br />
                            Praesentium architecto beatae commodi provident <br /> et veritatis? ratione tempore?  provident veritatis
                          </p>
                          <div className="student__info mt-4">
                            <h6 className="fw-bold">Jhon Doe</h6>
                            <p>California , USA</p>
                          </div>
                      </div>
                    </div>

                    <div >
                      <div className="single__testimonial ">
                          <h6 className="mb-3 fw-bold">Excellent Course of Materials</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Amet aperiam laudantium provident provident <br />
                            Praesentium architecto beatae commodi provident <br /> et veritatis? ratione tempore?  provident veritatis
                          </p>
                          <div className="student__info mt-4">
                            <h6 className="fw-bold">Jhon Doe</h6>
                            <p>California , USA</p>
                          </div>
                      </div>
                    </div>  

                    
                  </Slider>


                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Testimonials