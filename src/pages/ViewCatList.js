import React, {useState,useCallback} from 'react';
import {useLocalStore,useObserver} from 'mobx-react';
import { Row, Col ,Container,Button} from 'reactstrap';
import {StoreContext,StoreProvider} from '../components/store'
import {CatList} from '../components/catList'
import {CatForm} from '../components/catForm'
import { default as logo } from '../svgs/destinations.svg';
import {useHistory} from 'react-router-dom';



function ViewCatList() {
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
                    Categories
                    </text>  
              </div>
              <div className="top_bar_right">
                  <div className="operations">

                    View
                  </div>
                  <div onClick={()=>{history.push("/AddCategory")}} className="operations">

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
       <Col  className="view_loc_left d-md-block d-none"md="6" >
      <div>
      <img src={logo} alt="location image" className="img_location"/>
      </div>
       </Col>
       <Col  className="view_loc_right" xs="12" md="6">
          <div className="loc_row_title">
          <div className="name loc_text_title">name</div>
          <div className="name loc_text_title"></div>
          <div className="name loc_text_title"></div>
          <div className="name loc_text_title"></div>
          </div>
          <div className="loc_container">
          <CatList />
          </div>
        
          <div className="bottom_nav">
           <button  onClick={()=>{handleOnClick();}}   className="btn_view">
            View Locations
           </button>
          
          </div>
         
       </Col>
      
       </Row>
       </Container>
       </StoreProvider>
       </>
   
    );
  }
  
  export default ViewCatList;