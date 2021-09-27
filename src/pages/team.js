import * as React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";
import Footer from "../components/Footer";

// markup
const TeamPage = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <TeamCard />
            <Footer />
        </div>
    )
}

export default TeamPage
