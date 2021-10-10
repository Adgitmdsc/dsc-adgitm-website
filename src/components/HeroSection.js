import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import '../styles/HeroSection.css'

function HeroSection() {
    return (
        <>
            <Container fluid className="p-3 HeroSection">
                <div className="d-flex justify-content-between direction">
                    <div className="d-flex flex-column justify-content-start pt-3">
                        <h1 className="hero-header" style={{ textAlign: 'left', paddingLeft: '6rem' }} >Welcome Abroad</h1>
                        <p style={{ textAlign: 'left', paddingLeft: '6rem', fontSize: '1.1rem' }} className="pt-5 hero-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quibusdam tenetur neque consequatur non sequi.

                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, quae!</p>

                        </p>
                        <button style={{ marginLeft: '6rem', width: '40%' }} className="btn btn-primary mt-3 hero-button">Collaborate on Project</button>
                    </div>
                    <img style={{ width: '40%' }}
                        src="https://dscupt.tech/_next/static/images/home-875df7ff864cdbe3f228360a1b1e263f.webp"
                        alt="DSC Image"
                        id="hero-image"
                    />
                </div>
            </Container>
            <img className="pb-3 pt-1 mb-5" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/ffffff/external-down-arrows-those-icons-fill-those-icons-1.png" />
        </>
    )
}

export default HeroSection
