import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
function ShowResult() {
    const skills = ['Aptitude', 'Reasoning', 'Technical'];
    const scores = [Math.floor(Math.random() * 21), Math.floor(Math.random() * 21), Math.floor(Math.random() * 21)];
    const yourScore = [90, 85, 95];
  
    return (
    <>
    <br></br>
        <div align ="center">
      <MDBTable responsive
        striped
        hover
        className="table table-bordered border-black" style={{ width: '600px',padding:'10px' }}>
        <MDBTableHead>
          <tr>
            <th>Skill</th>
            <th>Score</th>
          </tr>
          </MDBTableHead>
        <MDBTableBody>
    {skills.map((skill, index) => (
      <tr key={skill}>
        <td style={{ textAlign: "center" }}>{skill}</td>
        <td>{index === 0 ? scores[index] : yourScore[index - 1]}</td>
        
      </tr>
    ))}
  </MDBTableBody>
      </MDBTable>
      </div>
      </>
    );
  }

export default ShowResult
