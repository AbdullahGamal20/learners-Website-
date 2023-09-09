import { Col } from "react-bootstrap"

function FreeCoursesCard(props){
  const {imageUrl , title , students , rating } = props.item
return(
  
    <div className="single__free__course ">

      <div className="free__course__image mb-4">
        <img src={imageUrl} alt="Free Course-1" className="w-100" />
        <button className="btn free__btn">Free</button>
      </div>

      <div className="free__course__details mb-5">
        <h6>{title}</h6>
        <div className="d-flex align-items-center justify-content-between">
          <span className=""><i className="fa-solid fa-user me-1"></i>{students}K</span>
          <span className=""><i className="fa-solid fa-star me-1 "></i>{rating}K</span>
        </div>
      </div>

    </div>

)
}

export default FreeCoursesCard