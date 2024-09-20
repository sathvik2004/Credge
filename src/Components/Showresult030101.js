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
export default function Showresult030101() {
  return (
    <>
        <br></br>
      <div align="center">
      <MDBTable bordered hover striped className="table table-bordered border-black" style={{ width: '600px',padding:'10px' }}>
        <tr>
            <th>
                Name
            </th>
            <th>
                CGPA
            </th>
            <th>
                No of offer Letters
            </th>
        </tr>
        <tr>
            <td>
                Sample
            </td>
            <td>
                9.8
            </td>
            <td>
                4
            </td>
        </tr>

      </MDBTable>
    </div>
    </>
  )
}
