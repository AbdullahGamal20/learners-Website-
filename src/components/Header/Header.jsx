import {Container}from "react-bootstrap"
import"./header.css"
import { useRef } from "react"

const navLinks=[

  {
    display:"Home",
    url:"#"
  },
  {
    display:"About",
    url:"#"
  },

  {
    display:"Courses",
    url:"#"
  }
  , {
    display:"Page",
    url:"#"
  }
  ,
  {
    display:"Blog",
    url:"#"
  },
]

function Header(){
  const menuRef = useRef()

  const menuToggle = ()=>{
    menuRef.current.classList.toggle('active__menu')
  }

  return(
    <>
    <div className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center"><i className="fa-solid fa-swatchbook"></i>Learners.</h2>
          </div>

          <div className="nav d-flex align-items-center gap-5 ">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {
                navLinks.map((link , index)=>{
                  return(
                      
                    <li className="nav__item" key={index}>
                      <a href={link.url}>{link.display}</a>
                    </li>
                    
                  )
                })
                }
              </ul>
            </div>

            <div className="nav__right ">
              <p className="mb-0 d-flex align-items-center gap-2"><i className="fa-solid fa-phone"></i>+20 01123347691</p>
            </div>
          </div>

          <div className="moblie__menu">
            <span><i className="fa-solid fa-bars" onClick={()=>{menuToggle()}}></i></span>
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}
export default Header