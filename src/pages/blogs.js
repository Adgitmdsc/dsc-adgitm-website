import * as React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Helmet from "../components/Meta";
import Navbar from "../components/NavbarComponent";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

// markup
const BlogsPage = () => {

 

    return (
        <div>
            <Helmet />
            <Navbar />
            <BlogCard />
            <Footer />
        </div>
    )
}

export default BlogsPage
