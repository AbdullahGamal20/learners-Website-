import { Container , Row , Col } from "react-bootstrap"
import"./feature.css"

const featureData = [
  {
    tilte:"Quick Learning",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elitTenetur maioresvel sit delectus xercitationem eumcupiditate fuga aperiam totam ea",
    icon:"fa-solid fa-compass-drafting"
  },
  {
    tilte:"  All Time Support",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elitTenetur maioresvel sit delectus xercitationem eumcupiditate fuga aperiam totam ea",
    icon:"fa-solid fa-message"
  },
  
  {
      tilte:"Certification",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elitTenetur maioresvel sit delectus xercitationem eumcupiditate fuga aperiam totam ea",
      icon:"fa-solid fa-file-circle-check"
  }
]
function Feature(){
  return(
    <section>
      <Container>
        <Row className="d-flex align-items-center">
          {featureData.map((item , index)=>{
            return(
              <Col lg='4' md='6' sm='12' className="pt-sm-3" key={index}>
              <div className="single__feature text-center px-4 ">
                <h2 className="mb-3"><i className={item.icon}></i></h2>
                <h5 className="mb-2 ">{item.tilte}</h5>
                <p>
                  {item.desc}
                </p>
              </div>
            </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}
export default Feature