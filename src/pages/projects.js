import * as React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Helmet from "../components/Meta";
import Navbar from "../components/NavbarComponent";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

// markup
const ProjectsPage = () => {
    return (
        <div>
            <Helmet />
            <Navbar />
            <Container>
                <ProjectCard />
            </Container>
            <Footer />
        </div>
    )
}

export default ProjectsPage
