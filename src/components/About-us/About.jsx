import"./about.css"
import{Container , Row , Col}from"react-bootstrap"
import aboutImage from"../../assets/about-us.png"
import CountUP from"react-countup"
function About(){
  return (
    <section>
      <Container>
        <Row>

          <Col lg="6" md="6" >
            <div className="about__img">
              <img src={aboutImage} alt="about" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6" >
            <div className="about__content">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor <br /> nemo fugit voluptates sed 
                tempore totam illo mollitia? Est, eveniet sit?
              </p>
              <div className="about__counter">
                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUP start={0} end={25} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUP start={0} end={12} duration={2} suffix="M" />
                    </span>
                    <p className="counter__title">Patient Around World </p>
                  </div>
                </div>
                
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUP start={0} end={25} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUP start={0} end={12} duration={2} suffix="M" />
                    </span>
                    <p className="counter__title">Patient Around World </p>
                  </div>
                </div>
                
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default About