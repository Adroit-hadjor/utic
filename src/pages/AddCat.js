import React, {useState,useCallback} from "react";
import {useLocalStore,useObserver} from 'mobx-react';
import { Row, Col ,Container,Button} from 'reactstrap';
import {StoreContext,StoreProvider} from '../components/store'
import {CatList} from '../components/catList'
import CatForm from '../components/catForm'
import {useHistory} from 'react-router-dom';

function AddCat() {
 
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
                    Add Category
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
      
        <CatForm />
       </Col>
       </Row>
       </Container>
       </StoreProvider>
       </>
       
   
    );
  }
  
  export default AddCat;