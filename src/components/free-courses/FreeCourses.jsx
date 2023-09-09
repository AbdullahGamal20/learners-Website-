import { Container , Row ,Col } from "react-bootstrap"
import courseImage01 from"../../assets/web-development.png"
import courseImage02 from"../../assets/kids-learning.png"
import courseImage03 from"../../assets/seo.png"
import courseImage04 from"../../assets/ui-ux.png"
import FreeCoursesCard from "./FreeCoursesCard"
import "./free.css"

const freeCoursesData=[
  {
    id:"01",
    title:"Basic Web Development",
    imageUrl:courseImage01 ,
    students:"5.3",
    rating:"1.7"
  }
  ,
  {
    id:"02",
    title:"Coding For Junior Basic Course" ,
    imageUrl:courseImage02,
    students:"5.3",
    rating:"1.7"
  }
  ,
  {
    id:"03",
    title:"Search Engine Optimization - Basic ",
    imageUrl:courseImage03,
    students:"5.3",
    rating:"1.7"
  }
  ,
  {
    id:"04",
    title:"Basic UI/UX Design - Figma",
    imageUrl:courseImage04,
    students:"5.3",
    rating:"1.7"
  }
]

function FreeCourses(){

  return(
    <section>
      <Container>
        <Row>

          <Col lg="12" className="text-center mb-5 ">
            <h2 className="fw-bold">Our Free Courses </h2>
          </Col>

          
            {
              freeCoursesData.map((item)=>{
                return(
                  <Col lg="3" key={item.id}> 
                    <FreeCoursesCard item={item}/>
                  </Col>
                )
              })
            }

        </Row>
      </Container>
    </section>
  )
}

export default FreeCourses