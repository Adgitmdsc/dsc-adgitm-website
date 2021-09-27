import * as React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import BlogSection from '../components/BlogSection'
import ProjectSection from '../components/ProjectSection'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'

// markup
const IndexPage = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <HeroSection />
      <BlogSection />
      <ProjectSection />
      <TeamSection />
      <Footer />
    </div>
  )
}

export default IndexPage
