
import { Col, Container, Row } from "react-bootstrap";
import"./news.css";


function NewsLetter(){
  return(
    <section >
      <Container className="newsLetter">
        <Row>
          <Col lg='12' className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
              <input type="text" placeholder="Email" />
              <button className="btn">Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default NewsLetter