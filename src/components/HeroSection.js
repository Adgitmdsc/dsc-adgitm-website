import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import '../styles/HeroSection.css'

function HeroSection() {
    return (
        <>
            <div className="container HeroSection">
                <div className="left-container p-3">
                    <h1 className="pb-4">Welcome Abroad</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, at. Dicta fugit repudiandae, Ipsum, inventore iure.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, saepe.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sint illum atque tempore neque maxime.</p>
                    <Button className="mt-4" style={{ fontSize: '1.2rem' }} variant="success">Collaborate on Project</Button>

                </div>
                <div className="right-container">
                    <img src="https://dscupt.tech/_next/static/images/home-875df7ff864cdbe3f228360a1b1e263f.webp" alt="" />
                </div>
            </div>
            <img className="mb-5" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-down-arrows-those-icons-fill-those-icons-1.png" />
        </>
    )
}

export default HeroSection
