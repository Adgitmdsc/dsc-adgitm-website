import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Helmet from "../components/Meta";
import Navbar from "../components/NavbarComponent";
import HeroSection from "../components/HeroSection";
import BlogSection from "../components/BlogSection";
import ProjectSection from "../components/ProjectSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import AimSection from "../components/AimSection";
import "../styles/index.css";

const IndexPage = () => {
  return (
    <div>
      <Helmet />
      <Navbar />
      <SocialLinks />
      <HeroSection />
      <AimSection />
      <BlogSection />
      <ProjectSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default IndexPage;
