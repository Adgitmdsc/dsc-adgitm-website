import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Linkedin, Github, Instagram, Twitter } from "react-bootstrap-icons";
import '../styles/SocialLinks.css'

function SocialLinks() {
    return (
        <div id="socialLinks">
            <div className="socials-container">
                <a href="/"
                ><Linkedin className="sticky-icons" id="linkedin-icon" style={{ fontSize: '1.6rem' }} /></a>

                <a href="/"
                ><Github className="sticky-icons" id="github-icon" style={{ fontSize: '1.6rem' }} /></a>

                <a href="/"
                ><Instagram className="sticky-icons" id="instagram-icon" style={{ fontSize: '1.6rem' }} /></a>

                <a href="/"
                ><Twitter className="sticky-icons" id="twitter-icon" style={{ fontSize: '1.6rem' }} /></a>
            </div>

        </div>
    )
}

export default SocialLinks
