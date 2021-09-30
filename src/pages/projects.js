import * as React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../components/NavbarComponent";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

// markup
const ProjectsPage = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <ProjectCard />
            <Footer />
        </div>
    )
}

export default ProjectsPage
