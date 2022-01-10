import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Helmet from "../components/Meta";
import Navbar from "../components/NavbarComponent";
import TeamPage from "../components/TeamPage";
import Footer from "../components/Footer";

// markup
const Team = () => {

  return (
    <div>
      <Helmet />
      <Navbar />
      <TeamPage />
      <Footer />
    </div>
  );
};

export default Team;
