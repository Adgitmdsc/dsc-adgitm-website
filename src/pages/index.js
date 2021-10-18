import React, { useEffect } from "react";
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
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/index.css";


function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DSC-ADGITM</title>
        <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Navbar />
      <SocialLinks />
      <HeroSection />
      <FadeInWhenVisible>
        <AimSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <BlogSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <ProjectSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <TeamSection />
      </FadeInWhenVisible>

      <Footer />
    </div>
  );
};

export default IndexPage;
