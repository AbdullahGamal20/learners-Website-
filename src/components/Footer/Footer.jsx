
import { Col, Container, Row , ListGroup , ListGroupItem } from "react-bootstrap"
import"./footer.css"

const footerQuickLinks=[
  {
    display:"Home",
    url:"#"
  },

  {
    display:"About Us",
    url:"#"
  },


  {
    display:"Courses",
    url:"#"
  },

  {
    display:"Pages",
    url:"#"
  },
  {
    display:"Blog",
    url:"#"
  },
]
  

const footerInfoLinks=[
  {
    display:"Privacy Policy",
    url:"#"
  },

  {
    display:"Membership",
    url:"#"
  },


  {
    display:"Purshases Guide",
    url:"#"
  },

  {
    display:"Terms of Service",
    url:"#"
  },
]



function Footer(){
  return(
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <h2 className="d-flex align-items-center gap-1 header"> <i className="fa-solid fa-swatchbook"></i>Learners.</h2>
            <div className="follows">
              <div className="d-flex flex-column">
                <p className="mb-0 d-flex justify-content-start fs-4 mt-4 fol" >Follow Us on Social Media</p>

                <div className="d-flex align-items-center gap-4 fs-4 mt-4">
                  <span className="d-flex  ">
                    <a href="facebook.com"><i className="fa-brands fa-facebook"></i></a>
                  </span>

                  <span className="d-flex align-items-center ">
                    <a href="instagram.com"><i className="fa-brands fa-instagram"></i></a>
                  </span>

                  <span className="d-flex align-items-center ">
                    <a href="linkedin.com"><i className="fa-brands fa-linkedin-in"></i></a>
                  </span>

                  <span className="d-flex align-items-center ">
                    <a href="twitter.com"><i className="fa-brands fa-twitter"></i></a>
                  </span>
                </div>

              </div>
            </div>
          </Col>

          <Col lg='3'>
            <div className="list">
              <h6 className="fw-bold">Explore</h6>
              <ListGroup>
                {
                  footerQuickLinks.map((item , index)=>{
                    return(
                      <ListGroupItem className="border-0 ps-0 link__item" key={index}><a href={item.url}>{item.display}</a></ListGroupItem>
                    )
                  })
                }
              </ListGroup>
            </div>
            
          </Col>

          
          <Col lg='3'>
            <div className="list">
              <h6 className="fw-bold">Information</h6>
              <ListGroup>
                {
                  footerInfoLinks.map((item , index)=>{
                    return(
                      <ListGroupItem className="border-0 ps-0 link__item" key={index}><a href={item.url}>{item.display}</a></ListGroupItem>
                    )
                  })
                }
              </ListGroup>
              </div>
          </Col>

          <Col lg='3'>
            <div className="list">
              <h6 className="fw-bold">Get in Touch</h6>
              <p>Address: Cairo , Egypt</p>
              <p>Phone: +20 01123347691</p>
              <p>Email: abdallhagamal17@gmail.com</p>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}
export default Footer;
