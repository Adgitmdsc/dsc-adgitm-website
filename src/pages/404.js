import * as React from "react"
import { Link } from "gatsby"
import Navbar from '../components/NavbarComponent'
import '../styles/404page.css'

const NotFoundPage = () => {
  return (
    <div className="errpage">
      <Navbar />
      <img src="https://image.freepik.com/free-vector/error-404-concept-landing-page_114360-2279.jpg" alt="" />
    </div>
  )
}

export default NotFoundPage
