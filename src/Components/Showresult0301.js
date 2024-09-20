import React from 'react'
import Showresult030101 from './Showresult030101'
import { useState } from 'react';
export default function Showresult0301() {
    const [showResultContent, setShowResultContent] = useState(false);
    const handleClick01 = () => {
        setShowResultContent(true);
      };
  return (
    <>
        <br></br>
      <select >
        <option>Select RollNo</option>
        <option>21N31A66G2</option>
        <option>21N31A66K2</option>
        <option>21N31A66F3</option>
      </select>
      <br></br> <br></br>
      <button onClick={handleClick01}>Submit</button><br></br><br></br>
      {showResultContent && <Showresult030101 />}<br></br><br></br>
    </>
  )
}
