import * as React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Helmet from "../components/Meta";
import Navbar from "../components/NavbarComponent";
import CodeConduct from "../components/CodeConduct";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

// markup
const CodeCoductPage = () => {

    React.useEffect(() => {
        alert("Site under construction !!")
      },[])

    return (
        <div>
            <Helmet />
            <Navbar />
            <Container>
                <br />
                <br /><br /><br />
                <CodeConduct />
            </Container>
            <Footer />
        </div>
    )
}

export default CodeCoductPage
