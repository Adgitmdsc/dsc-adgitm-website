import * as React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../components/NavbarComponent";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

// markup
const ProjectsPage = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <Container>
                <ProjectCard />
            </Container>
            <Footer />
        </div>
    )
}

export default ProjectsPage
