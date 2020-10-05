import React from "react";
import { Cert, DscLogo } from "../assets/logo";
import { DoubleArrow } from "@material-ui/icons";
import axios from "axios";
import { useParams } from "react-router-dom";

const Certificate = () => {

  let { id } = useParams();

  const [one, setOne] = React.useState("Just a sec");
  const [two, setTwo] = React.useState("Please Wait");
  const [three, setThree] = React.useState("Fetching you certificate, it may take upto 10-11 seconds");
  const [four, setFour] = React.useState("");
  const [five, setFive] = React.useState("Fetching");

  React.useEffect(() => {
    const getData = async () => {
      await axios(`https://dsc-adgitm.herokuapp.com/certificate/${id}`)
        .then(response => {
          let data = response.data;
          console.log(data);
          setOne(data.one);
          setTwo(data.two);
          setThree(data.three);
          setFour(data.four);
          setFive(data.five);
        }).catch(error => {
          console.log(error)
          alert(`${error.code} : ${error.message}`)
          setOne("Not Found");
          setTwo("not found");
          setThree("not found");
        })
    };
    getData();
  });

  return (
    <div>
      <br />
      <br />
      <br />
      <div className="cert">
        {/* certificate-header */}

        <div className="cert__header">
          <div className="cert__dsc-logo">
            <DscLogo />
            <span className="cert__dsc-name text">Developer Student Clubs</span>
          </div>
          <div className="cert__dq-logo">
            <img src={four} alt="second-associate" className="cert__dq-img" />
          </div>
        </div>
        <br />
        {/* Certificate- content */}
        <h1 >{five}</h1>
        <br />
        <p className="text u-container">{one}</p>
        <div className="cert__content">
          <div className="cert__name-group">
            <div className="cert__arrow-l">
              <DoubleArrow />
            </div>
            <p className="cert__name">{two}</p>
            <div className="cert__arrow-r">
              <DoubleArrow />
            </div>
          </div>
          <p className="text u-container">{three}</p>
          <p className="text u-container">Certificate id : {id} </p>
        </div>

        {/* Certificate- footer */}
        <div className="cert__footer">
          <div className="cert__svg">
            <Cert />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Certificate;
