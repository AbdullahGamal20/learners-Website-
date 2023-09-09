import "./courses.css"
import{Container , Row , Col}from"react-bootstrap"
import courseImage1  from"../../assets/web-design.png"
import courseImage2  from"../../assets/graphics-design.png"
import courseImage3 from"../../assets/ui-ux.png"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Courses(){
  return(
    <section>
      <Container className="container">

        <Row>
          <Col lg="12" className="mb-4">
            <div className="course__top  d-flex justify-content-between align-items-center ">
              <div className="courser__top__left ">
                <h2>Our Popular Courses</h2>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Dolores et perferendis
                    saepe accusamus itaque cum repudiandae
                    ratione, aliquid voluptates error?
                </p>
              </div>
                
                <div className="w-25">
                  <Button className="btn">See All</Button>
                </div>
              
            </div>
          </Col>

          <Col lg="4">
    
            <Card className="card" style={{ width: '23rem' }}>
              <Card.Img variant="top" src={courseImage2} />
              <Card.Body>
                <Card.Title>Web Design Bootcamp-2023</Card.Title>
                <Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div>
                      <i className="fa-solid fa-book-open-reader pe-2"></i>
                      12 Lessons
                    </div>
                    <div>
                      <i className="fa-solid fa-user pe-2"></i>
                      12.5K Users
                    </div>
                  </div>
                
                </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <i className="fa-solid fa-star pe-2"></i>8.6K
                      </div>
                      <div>
                        <a className="link" variant="outline-success ">Enroll Now</a>
                      </div>
                  </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="4">
            <Card className="card" style={{ width: '23rem' }}>
              <Card.Img variant="top" src={courseImage1} />
              <Card.Body>
                <Card.Title>Web Development Bootcamp-2023</Card.Title>
                <Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div>
                      <i className="fa-solid fa-book-open-reader pe-2"></i>
                      48 Lessons
                    </div>
                    <div>
                      <i className="fa-solid fa-user pe-2"></i>
                      18.2K Users
                    </div>
                  </div>
                
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <i className="fa-solid fa-star pe-2"></i>9.8K
                    </div>
                    <div>
                      <a className="link" variant="outline-success ">Enroll Now</a>
                    </div>
                  </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="4">
            <Card className="card" style={{ width: '23rem' }}>
              <Card.Img variant="top" src={courseImage3} />
              <Card.Body>
                <Card.Title> Graphic Design Bootcamp-2023</Card.Title>
                <Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-4">

                    <div>
                      <i className="fa-solid fa-book-open-reader pe-2"></i>
                      18 Lessons
                    </div>
                    <div>
                      <i className="fa-solid fa-user pe-2"></i>
                      10.5K Users
                    </div>
          
                  </div>
                </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <i className="fa-solid fa-star pe-2"></i>5.9K
                    </div>
                    <div>
                      <a className="link" variant="outline-success ">Enroll Now</a>
                    </div>
                  </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Courses;