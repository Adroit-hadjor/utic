import {useLocalStore,useObserver} from 'mobx-react';
import { Row, Col ,Container,Button} from 'reactstrap';
import {StoreContext,StoreProvider} from '../components/store'
import {LocationList} from '../components/locationList'
import {CatForm} from '../components/catForm'
import { default as logo } from '../svgs/destinations.svg';

function ViewCatList() {
 

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
                  <div className="operations">

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
       <Col  className="view_loc_left"xs="6">
      <div>
      <img src={logo} alt="location image" className="img_location"/>
      </div>
       </Col>
       <Col  className="view_loc_right" xs="6">
          <div className="loc_row_title">
          <div className="name loc_text_title">name</div>
          <div className="name loc_text_title">address</div>
          <div className="name loc_text_title">coordinate</div>
          <div className="name loc_text_title">category</div>
          </div>
          <div className="loc_container">
          <LocationList />
          </div>
        
          <div className="bottom_nav">
           <button   className="btn_view">
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
  
  export default ViewCatList;