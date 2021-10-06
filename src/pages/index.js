import * as React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/NavbarComponent'
import HeroSection from '../components/HeroSection'
import BlogSection from '../components/BlogSection'
import ProjectSection from '../components/ProjectSection'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'
import SocialLinks from "../components/SocialLinks";

// markup
const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <SocialLinks />
      <HeroSection />
      <BlogSection />
      <ProjectSection />
      <TeamSection />
      <Footer />
    </div>
  )
}

export default IndexPage
