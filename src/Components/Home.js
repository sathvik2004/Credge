import React, { useState } from 'react';
import Chatbot from './Chatbot';
import ShowResult from './ShowResult';
import ShowResult01 from './ShowResult01';
import ShowResult02 from './ShowResult02';
import Accordion from 'react-bootstrap/Accordion';
import './Home.css';
import ATS from './ATS';
import { Link } from 'react-router-dom';
export default function Home() {
  const [showResultContent, setShowResultContent] = useState(false);
  const [showResultContent01, setShowResultContent01] = useState(false);
  const [showResultContent02, setShowResultContent02] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick01 = () => {
    setShowResultContent(true);
  };

  const handleClick02 = () => {
    setShowResultContent01(true);
  };

  const handleClick03 = () => {
    setShowResultContent02(true);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    window.location.href = '/'; // Redirect to homepage on logout
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-light" style={{ backgroundColor: "#167ac6" }}>
        <img
          src="https://mrcet.com/images/logo_mallareddy.png"
          style={{ height: "fit-content" }}
          alt="Malla Reddy Logo"
        />
        <img src="https://mrcet.com/images/logo_121.png" alt="Logo" />

        <div className="dropdown" style={{ position: 'relative' }}>
          <h4 onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
            <i className="fa-solid fa-circle-user"></i>
            <span style={{ color: '#fff' }}> Welcome Admin</span>
          </h4>

          {dropdownOpen && (
            <div
              className="dropdown-menu"
              style={{
                display: 'block',
                position: 'absolute',
                top: '100%',
                left: '0',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                zIndex: 1,
              }}
            >
              <a className="dropdown-item" href="#">
                User Profile
              </a>
              <a className="dropdown-item" href="#" onClick={handleLogout}>
                Logout
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Marquee Section */}
      <nav className="navbar navbar-light bg-warning">
        <marquee>
          <h3 className="navbar-brand mb-0 h1">
            Highest Package AC.Yr 2024: 21N31A66G2 (31 LPA), 21N31A66Y0 (31 LPA) -- OpenAI
          </h3>
        </marquee>
      </nav>

      {/* Main Content */}
      <div className="main-content text-center">
        <div className="button-container text-center">
          <Accordion className="Acco">
            <Accordion.Item eventKey="0">
              <Accordion.Header style={{ textAlign: 'center' }}>Test Information</Accordion.Header>
              <Accordion.Body>
                <button onClick={handleClick01} className="btn btn-primary">
                  Written Test Results
                </button>
                {showResultContent && <ShowResult />}
                <br /><br />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Company Information</Accordion.Header>
              <Accordion.Body>
                <button className="btn btn-success" onClick={handleClick02}>
                  Companies Active
                </button>
                {showResultContent01 && <ShowResult01 />}
                <br /><br />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Placement Schedules</Accordion.Header>
              <Accordion.Body>
                <button className="btn btn-info" onClick={handleClick03}>
                  Schedule
                </button>
                {showResultContent02 && <ShowResult02 />}
                <br /><br />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Link to="/ATS">
            <button className="btn btn-warning">Check Resume Score</button>
          </Link>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </>
  );
}


