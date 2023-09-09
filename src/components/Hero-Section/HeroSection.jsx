import"./hero-section.css"
import{Container , Row , Col}from"react-bootstrap"
import heroImage from"../../assets/hero-img1.png"
function HeroSection(){
  return(
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 ">Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule</h2>
              <p className="mb-4">Lorem ipsum dolor sit,  amet consectetur <br /> adipisicing. Deserunt, dolorem quibusdam? <br /> alias commodi.
                  Autem a corporis quam, <br /> fugiat quasi dolorem quibusdam? Est.
              </p>  

              <div className="search">
                <input type="text" placeholder="Search" />
                <button className="btn">Search</button>
              </div>

            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImage} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default HeroSection