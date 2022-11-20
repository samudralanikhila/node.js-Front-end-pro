import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Bollywood() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://reactapp-one.herokuapp.com/home/bollywood`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bolly1">
        {/* left */}
        <div className="bolly2">
          <h1>Bollywood</h1>
          <hr className="bolly4" align="left"></hr>
          <div>
            {data.map((bolly) => {
              const { img, tittle, dis, travel } = bolly;
              return (
                <div className="bolly5">
                  <img src={img} alt="" width="250px" height="250px" />
                  <div className="bolly6">
                    <h1>{tittle}</h1>
                    <p>{dis}</p>
                    <p>{travel}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* right */}
        <div className="bolly3">
          <h1>latest articals</h1>
          <hr className="boly4" align="left"></hr>
          <img src="https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg" alt="" width='500px' height='200px'/>
          <div>
            {data.map((bolly)=>{
              const { img, tittle,travel,number } = bolly;
              return(
                <div className="bolly7">
                  <img src={img} alt=""  width='150px' height='100px'/>
                  <div>
                    <p>{tittle}</p>
                    <p>{travel}</p>
                  </div>
                  <h1 className="bolly8">{number}</h1>
                </div>
              )
            })}
          </div>
          <div className="thre">
            <h1 className="thre1">ADVERTISTEMENT</h1>
          </div>
        </div>
      </div>

    </div>
  );
}
