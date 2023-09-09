import{Container , Row , Col}from"react-bootstrap"
import "./company-section.css"


function Company(){

  return(
    <section >
      <Container className="cont">
      <Row  className="row">
        <Col lg="2" md="3" >
          <h2 className="d-flex align-items-center gap-1"><i className="fa-brands fa-vimeo"></i>Viemo</h2>
        </Col>

        <Col lg="2" md="3" >
          <h2 className="d-flex align-items-center gap-1"><i className="fa-brands fa-pinterest"></i>Pinterest</h2>
        </Col>

        <Col lg="2" md="3"  >
          <h2 className="d-flex align-items-center gap-1"><i className="fa-brands fa-dribbble"></i>Dribble</h2>
        </Col>

        <Col lg="2" md="3"  >
          <h2 className="d-flex align-items-center gap-1"><i className="fa-brands fa-apple"></i>Apple</h2>
        </Col>

        <Col lg="2" md="3" >
          <h2 className="d-flex align-items-center gap-1"><i className="fa-solid fa-filter"></i>Finder</h2>
        </Col>

        <Col lg="2" md="3">
          <h2 className="d-flex align-items-center gap-1"><i className="fa-brands fa-google"></i>Google</h2>
        </Col>

      </Row>
      </Container>
    </section>
  )
}

export default Company