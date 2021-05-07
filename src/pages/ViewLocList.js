import React, {useState,useCallback} from "react";
import {useLocalStore,useObserver} from 'mobx-react';
import { Row, Col ,Container,Button} from 'reactstrap';
import {StoreContext,StoreProvider} from '../components/store'
import {LocationList} from '../components/locationList'
import {CatForm} from '../components/catForm'
import { default as logo } from '../svgs/destinations.svg';
import {useHistory} from 'react-router-dom';



function ViewLocList() {
 
  const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/ViewCategories'), [history]);



    return (
      <> 
        <StoreProvider>
        <Container style={{backgroundColor:"#f2f7f5",color:"black"}} fluid>
          <Row>
            <Col className="top_bar" xs="12">
              <div style={{display:"flex",flexDirection:"column",justifyContent:"center",width:"30%"}}>
                    <text className="top_bar_title">
                    Locations
                    </text>  
              </div>
              <div className="top_bar_right">
                  <div className="operations">

                    View
                  </div>
                  <div onClick={()=>{ history.push('/AddLocation')}} className="operations">

                    add
                </div>
                <div className="operations">

                    edit
                </div>    
                <div className="operations">
                  delete
                    
                </div>
              </div>
            </Col>
          </Row>
       <Row  className="columnContainer">
       <Col hidden-xs className="view_loc_left d-none d-md-block"md="6">
      <div>
      <img src={logo} alt="location image" className="img_location"/>
      </div>
       </Col>
       <Col  className="view_loc_right" md="6" xs="12">
          <div className="loc_row_title">
          <div className="name loc_text_title">name</div>
          <div className="name loc_text_title">address</div>
          <div className="name loc_text_title d-md-block d-none">coordinate</div>
          <div className="name loc_text_title">category</div>
          </div>
          <div className="loc_container">
          <LocationList  />
          </div>
        
          <div className="bottom_nav">
           <button onClick={()=>{handleOnClick();}} className="btn_view">
            View Categories
           </button>
          
          </div>
         
       </Col>
      
       </Row>
       </Container>
       </StoreProvider>
       </>
   
    );
  }
  
  export default ViewLocList;