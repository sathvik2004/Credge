import React from 'react'
import Showresult03 from './Showresult03'
import Showresult04 from './Showresult04'
import Showresult05 from './Showresult05'
import { useState } from 'react';
import "./Home.css"
import Accordion from 'react-bootstrap/Accordion';
export default function Homerec() {
  const [showResultContent, setShowResultContent] = useState(false);
  const [showResultContent01,setShowResultContent01] = useState(false);
  const [showResultContent02,setShowResultContent02] = useState(false);
  const handleClick01 = () => {
    setShowResultContent(true);
  };
  const handleClick02 = () => {
    setShowResultContent01(true);
  };
  const handleClick03 = () => {
    setShowResultContent02(true);
  };
  return (
    <>
    <nav className="navbar navbar-light " style={{backgroundColor:"#167ac6"}}>
        <img src="https://mrcet.com/images/logo_mallareddy.png" style={{height:"fit-content"}}/>
        <img src="https://mrcet.com/images/logo_121.png" />
        <h4><i class="fa-solid fa-circle-user"></i><h4 style={{color:"#fff"}}>Welcome Admin</h4></h4>
        
      </nav>
      <nav className="navbar navbar-light bg-warning">
        <marquee>
          <h3 className="navbar-brand mb-0 h1">Highest Package AC.Yr 2024:  20N31A66G2(31 LPA),20N31A66Y0(31 LPA) -- OpenAI</h3>
        </marquee>
      </nav><br></br><br></br>
    <div className="main-content text-center">
      <div className="button-container text-center">
      <Accordion className="Acco">
          <Accordion.Item eventKey="0">
          <Accordion.Header style={{textAlign:"center"}}>Student Information</Accordion.Header>
          <Accordion.Body>
        <button className="btn btn-success" onClick={handleClick01}>View Student Profiles</button><br></br><br></br>
        {showResultContent && <Showresult03 />}<br></br><br></br>
        </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
          <Accordion.Header>Actions</Accordion.Header>
          <Accordion.Body>
        <button className="btn btn-info" onClick={handleClick02}>Schedule Interview</button><br></br><br></br>
        {showResultContent01 && <Showresult04 />}<br></br><br></br>
        </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
          <Accordion.Header>Help!</Accordion.Header>
          <Accordion.Body>
        <button className="btn btn-success" onClick={handleClick03}>Contact Administrator</button><br></br><br></br>
        {showResultContent02 && <Showresult05 />}<br></br><br></br> 
        </Accordion.Body>
          </Accordion.Item>
          </Accordion>
      </div>
    </div>
  </>
  )
}
