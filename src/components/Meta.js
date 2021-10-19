import React from 'react'
import { Helmet } from "react-helmet";
import Favicon from "../images/favicon.ico";

const Meta = () => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>DSC-ADGITM </title>
            <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                rel="stylesheet"
            ></link>
        </Helmet>
    )
}

export default Meta
