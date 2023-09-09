import About from "../components/About-us/About";
import Company from "../components/Company-section/Company";
import Feature from "../components/Feature/Feature";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import Choose from "../components/choose-us/Choose";
import Courses from "../components/course-section/Courses";
import FreeCourses from "../components/free-courses/FreeCourses";
import Testimonials from "../components/testimonial/Testimonials";
import NewsLetter from "../components/newsletter/NewsLetter";
import Footer from "../components/Footer/Footer";


function Home(){
  return(
    <>
      <Header/>
      <HeroSection/>
      <Company/>
      <About/>
      <Courses/>
      <Choose/>
      <Feature/>
      <FreeCourses/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}
export default Home;