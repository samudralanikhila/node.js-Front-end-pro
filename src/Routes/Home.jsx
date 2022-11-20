import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

export default function Home() {
  const[data,setData] = useState([])
  useEffect(()=>{
    fetch(`https://reactapp-one.herokuapp.com/home/bollywood`)
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[])
  return (
    <div>
        <Navbar/>
      <div className='home1'>
        <div className='home2'>
          <div className='one'>
          <p style={{ color: "white", fontSize: "25px", margin: "0" }}>
              Tittle of vertical gallery
            </p>
            <span style={{ color: "white" }}>Travel Aug/2022</span>
          </div>
        </div>
        <div className="home3">
          <div className="one1">
            <div className="onn3">
              <p style={{ color: "white", fontSize: "25px", margin: "0" }}>
                Tittle of vertical gallery
              </p>
              <span style={{ color: "white" }}>Travel Aug/2022</span>
            </div>
          </div>
          <div className="one2">
            <div className="onn3">
              <p style={{ color: "white", fontSize: "25px", margin: "0" }}>
                Tittle of vertical gallery
              </p>
              <span style={{ color: "white" }}>Travel Aug/2022</span>
            </div>
          </div>
        </div>
      </div>

      <h1>The Latest</h1>
      <hr className="one4" align="left"></hr>

      <div className="latest1">
        <div className="two">
          <img
            src="https://www.nativeplanet.com/img/2017/08/1-30-1504070931.jpg"
            alt=""
            srcset=""
            width={"350px"}
          />
          <h2>KONARK Is The Most Famous Temple In India</h2>
          <p>
            The Konark or Konarak Sun temple is dedicated to the Hindu sun god
            Surya, and, conceived as a giant stone chariot with 12 wheels, it is
            the most famous of the few sun temples built in India.
          </p>
          <span>Travel Aug/2020</span>
        </div>

        <div className="two">
          <img
            src="https://www.nativeplanet.com/img/2017/08/1-30-1504070931.jpg"
            alt=""
            srcset=""
            width={"350px"}
          />
          <h2>KONARK Is The Most Famous Temple In India</h2>
          <p>
            The Konark or Konarak Sun temple is dedicated to the Hindu sun god
            Surya, and, conceived as a giant stone chariot with 12 wheels, it is
            the most famous of the few sun temples built in India.
          </p>
          <span>Travel Aug/2020</span>
        </div>

        <div className="two">
          <img
            src="https://www.nativeplanet.com/img/2017/08/1-30-1504070931.jpg"
            alt=""
            srcset=""
            width={"350px"}
          />
          <h2>KONARK Is The Most Famous Temple In India</h2>
          <p>
            The Konark or Konarak Sun temple is dedicated to the Hindu sun god
            Surya, and, conceived as a giant stone chariot with 12 wheels, it is
            the most famous of the few sun temples built in India.
          </p>
          <span>Travel Aug/2020</span>
        </div>
      </div>

      <h1>The Artical</h1>
      <hr className="one4" align="left"></hr>

      <div className='two1'>
        <div className='two2'>
          {data.map((home) => {
            const{img, tittle,dis,travel} = home
            return(
              <div className='niki'>
                <hr></hr>
                <div className='niki1'>
                  <img src={img} alt="" height="200px" width="300px"/>
                  <div className='niki3'>
                    <h1>{tittle}</h1>
                    <p>{dis}</p>
                    <p>{travel}</p>
                  </div>
                </div>
              </div>
            )
          })}
          <img src="https://img.mensxp.com/media/content/2022/Nov/Brahamastra-OTT-Release-Leaves-Boycott-Gang-Sorry1400_636bab925bb7d.jpeg?w=1100&h=558&cc=1" alt="" width="800px" hight="100px"/>
        </div>
        <div className='two3'>
          <div className='two4'>
          <h1 className="two5">ADVERTISTEMENT</h1>
          </div>
          <h1>Top strories</h1>
          <div className='two6'>
            {data.map((home)=>{
              const{img,tittle, travel, number} = home
              return(
                <div className='two7'>
                  <img src={img} alt="" height="125px" width="125px" />
                  <div>
                    <p>{tittle}</p>
                    <p>{travel}</p>
                  </div>
                  <h1 className='three'>{number}</h1>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
