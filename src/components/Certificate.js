import React from "react";
import { Cert, DscLogo } from "../assets/logo";
import DQ from "../assets/DQ.png";
import { DoubleArrow } from "@material-ui/icons";
import axios from "axios";
import { useParams } from "react-router-dom";

const Certificate = () => {

  let { id } = useParams();

  const [name, setName] = React.useState("");
  const [date_issued, setDate_issued] = React.useState("");
  const [event_name, setEvent_name] = React.useState("");
  // const [o_one, setO_one] = React.useState("");
  // const [t_one, setT_one] = React.useState("");
  const [on, setOn] = React.useState("");

  React.useEffect(() => {
    const getData = async () => {
      await axios(`https://dsc-adgitm.herokuapp.com/certificate/${id}`)
      .then(response => {
        let data = response.data;
        console.log(data);
        setName(data.name);
        setDate_issued(data.data_issued);
        setEvent_name(data.event_name);
        setOn(data.on)
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
            <img src={DQ} alt="dq-logo" className="cert__dq-img" />
          </div>
        </div>
        <br />
        {/* Certificate- content */}
        <p className="text u-container">This is to certify</p>
        <div className="cert__content">
          <div className="cert__name-group">
            <div className="cert__arrow-l">
              <DoubleArrow />
            </div>
            <p className="cert__name">{name}</p>
            <div className="cert__arrow-r">
              <DoubleArrow />
            </div>
          </div>
          <p className="text u-container">
            On attending the <b>{event_name}</b> conducted from{" "}
            <b>{on}</b>
          </p>
          <p className="text u-container">Issued Data : {date_issued} </p>
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