import React from 'react'
import { useState } from 'react';
import Showresult0301 from './Showresult0301';
export default function Showresult03() {
    const [showResultContent, setShowResultContent] = useState(false);
    const [showResultContent01,setShowResultContent01] = useState(false);
  const handleClick01 = () => {
    setShowResultContent(true);
  };
  const handleClick02 = () => {
    setShowResultContent01(true);
  };
  return (
    <>
      <select >
        <option>Select Department</option>
        <option>CSE</option>
        <option>ECE</option>
        <option>CI</option>
      </select>
      <br></br> <br></br>
      <button onClick={handleClick01}>Next</button><br></br>
      {showResultContent && <Showresult0301 />}<br></br><br></br> 
      <br></br>
    </>
  )
}
