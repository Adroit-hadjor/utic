import React, {useState,useCallback} from "react";
import { Row, Col ,Container,Button} from 'reactstrap';
import {FaInstagram,FaTwitter,FaGithub,FaLinkedinIn,FaDev} from 'react-icons/fa';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { default as logo } from '../svgs/travel.svg';
import {useHistory} from 'react-router-dom';



function App() {

    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/ViewLocations'), [history]);
  return (
  <Container fluid>
      <Row className="header">
          <Col md="6" className="header_left">
          <img className="header_logo" src={logo} />
          </Col>
          <Col md="6" className="header_right">
           <div>
              <h1>Hi there, </h1> 
           </div>
           <div>
              <h4> Welcome to Cats & Locs</h4>
           </div>
           <div>
             This is the webpage of cats and locs,
              a system designed to help keep track of your locations by classifying them into categories
              Want to remember all your fun locations without a hustle, register now with Cats and locs.Cheers!
           </div>
           <button onClick={()=>{handleOnClick();}} className="explore_button">
                See where you've been
           </button >
          </Col>
      </Row>
  </Container>
 
  );
}

export default App;
