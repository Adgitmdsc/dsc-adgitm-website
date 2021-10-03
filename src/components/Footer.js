import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
    return (

        <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: '#333' }}
        >

            <section className="p-3 pt-3">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-8 text-center text-md-start">

                        <div className="p-3" style={{ fontSize: 24, fontWeight: 600 }}>
                            <img style={{ height: 30, marginRight: 10 }} src="https://www.dscsdmc.org/img/logo.png" alt="" />
                            DSC ADGITM
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

                        <a style={{ marginLeft: 20 }} href="/"
                        ><img className="icon" style={{ width: 50, height: 50 }} src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" /></a>

                        <a style={{ marginLeft: 20 }} href="/"
                        ><img className="icon" style={{ width: 50, height: 50 }} src="https://img.icons8.com/color/48/000000/linkedin.png" /></a>

                        <a style={{ marginLeft: 20 }} href="/"
                        ><img className="icon" style={{ width: 50, height: 50 }} src="https://img.icons8.com/material-outlined/48/000000/github.png" /></a>

                        <a style={{ marginLeft: 20 }} href="/"
                        ><img className="icon" style={{ width: 50, height: 50 }} src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png" /></a>


                    </div>
                </div>
            </section>
        </footer >
    )
}

export default Footer
