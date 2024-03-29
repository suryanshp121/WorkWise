import React from 'react';
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Outer Ring Road, Bengaluru – 560103, Karnataka, India",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "LAVELLE ROAD, BENGALURU, Karnataka, India",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Water Tank Road,BSK 3rd Stage, 3rd Phase, 4th Block, Bengaluru, Karnataka- 560085,India",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];
  return (
    <>
      <div className="companies">
        <div className="container">
          <h3>TOP COMPANIES</h3>
          <div className="banner">{
            companies.map((element)=>{
              return(
                <div className="card"key={element.id}>
                  <div className="content">
                    <div className="icon">{element.icon}</div>
                    <div className="text">
                      <p>{element.title}</p>
                      <p>{element.location}</p>
                    </div>
                  </div>
                  <button>Open Positions : {element.openPositions}</button>
                </div>
              )
            })
          }</div>
        </div>
      </div>
    </>
  )
}

export default PopularCompanies
