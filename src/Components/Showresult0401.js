import React from 'react'
import { useState } from 'react';
import Showresult040101 from './Showresult040101';
export default function Showresult0401() {
    const [showResultContent, setShowResultContent] = useState(false);
    const handleClick01 = () => {
        setShowResultContent(true);
      };
  return (
    <>
      <select >
        <option>Select TimeSlot</option>
        <option>Morning</option>
        <option>After Break</option>
        <option>Afternoon</option>
      </select>
      <br></br> <br></br>
      <button onClick={handleClick01}>Submit</button><br></br><br></br>
      {showResultContent && <Showresult040101 />}<br></br><br></br> 
    </>
  )
}
