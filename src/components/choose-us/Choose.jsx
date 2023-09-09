import { Container , Row , Col } from "react-bootstrap"
import "./choose.css"
import chooseImage from"../../assets/why-choose-us.png"
import ReactPlayer from"react-player"
import { useState } from "react"

function Choose(){
  const [showVideo , setShowVideo] = useState(false)


  return(
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="choose__content">
              <h2>Why Choose Us </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum 
                voluptatibus est aliquid temporibus, praesentium assumenda 
                ex totam amet ipsum pariatur. Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Ea non et voluptas obcaecati magni tempora. Lorem ipsum 
                dolor sit amet consectetur adipisicing elit. Ex doloribus sit hic illum 
                dolore tempora voluptatibus quas eos! Et, sunt!
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className="choose__image">
              {
                showVideo ? <ReactPlayer url={"https://www.youtube.com/watch?v=yEAmNisPOzk&pp=ygUFcXVyYW4%3D"} 
                controls width={"100%"} height={"300px"} /> 
                :<img src={chooseImage} alt="Choose Us Image" className="w-100" />
              }

              {
                !showVideo &&  <span className="play__icon">
                <i className="fa-solid fa-circle-play" onClick={()=>setShowVideo(!showVideo)}></i>
              </span> 
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Choose;