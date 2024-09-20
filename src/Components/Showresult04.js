import React from 'react'
import { useState } from 'react';
import Showresult0401 from './Showresult0401';
export default function Showresult04() {
    const [showResultContent, setShowResultContent] = useState(false);
    const handleClick01 = () => {
        setShowResultContent(true);
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
      <button onClick={handleClick01}>Next</button><br></br><br></br>
      {showResultContent && <Showresult0401 />}<br></br><br></br> 
    </>
  )
}
