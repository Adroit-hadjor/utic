import React, {useState,useCallback} from "react";
import {useLocalStore,useObserver} from 'mobx-react';
import { Row, Col ,Container,Button} from 'reactstrap';
import {StoreContext,StoreProvider} from '../components/store'
import {CatList} from '../components/catList'
import LocationForms from '../components/locationForm'
import {useHistory} from 'react-router-dom';



function AddLoc() {
  const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/ViewLocations'), [history]);


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
       <Col  className="left" xs="12">
              
        <LocationForms />
       </Col>
       </Row>
       </Container>
       </StoreProvider>
       </>
   
    );
  }
  
  export default AddLoc;