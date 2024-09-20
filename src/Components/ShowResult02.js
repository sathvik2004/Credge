import React from 'react'
import './Result.css'
import {
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
export default function ShowResult02() {
  return (
    <div align="center">
      <MDBTable bordered hover striped className="table table-bordered border-black" style={{ width: '600px',padding:'10px' }}>
      <MDBTableHead>
    <tr>
      <th scope="col" style={{ textAlign: "center" }}>10:00 - 11:30</th>
      <th scope="col" style={{ textAlign: "center" }}>12:00</th>
      <th scope="col" style={{ textAlign: "center" }}>14:00 - 17:00</th>
    </tr>
    </MDBTableHead>
  <tbody>
    <tr>
      <td>Written-Test</td>
      <td>Shortlist Announcement</td>
      <td>Interviews</td>
    </tr>
  </tbody>
</MDBTable>
    </div>
  )
}
