import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/NavbarComponent";
import HeroSection from "../components/HeroSection";
import BlogSection from "../components/BlogSection";
import ProjectSection from "../components/ProjectSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import AimSection from "../components/AimSection";
import { Helmet } from "react-helmet";
import Favicon from "../images/favicon.ico";

// markup
const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DSC-ADGITM</title>
        <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
      </Helmet>
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
