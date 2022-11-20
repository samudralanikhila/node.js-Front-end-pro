import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

export default function Technology() {
  const [data,setData] =useState([])
  useEffect(()=>{
    fetch(`https://reactapp-one.herokuapp.com/home/technology`)
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[])
  return (
    <div>
        <Navbar/>
        <div className="bolly1">
        {/* left */}
        <div className="bolly2">
          <h1>Technology</h1>
          <hr className="bolly4" align="left"></hr>
          <div>
            {data.map((tech) => {
              const { img, tittle, dis, travel } = tech;
              return (
                <div className="bolly5">
                  <img src={img} alt="" width="250px" height="250px" />
                  <div className="bolly6">
                    <h3>{tittle}</h3>
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
          <img src="https://coingeek.com/wp-content/uploads/2022/11/us-prosecutors-seek-12-month-probation-for-bitmex-employee-380x188.jpg" alt="" width='500px' height='200px'/>
          <div>
            {data.map((tech)=>{
              const { img, tittle,travel,number } = tech;
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
  )
}
