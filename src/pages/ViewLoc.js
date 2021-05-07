import {useLocalStore,useObserver} from 'mobx-react';
import { Row, Col ,Container,Button} from 'reactstrap';
import {StoreContext,StoreProvider} from '../components/store'
import {CatList} from '../components/catList'
import {CatForm} from '../components/catForm'
import {useHistory} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';



function ViewLoc() {
     
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const location = localStorage.getItem("location")
  const loc = JSON.parse(location)
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
       <Col  className="loc_left" xs="6">
       {
             loc  
             ?
         <div className="loc_cont">
          
             <div className="loc_name">Name : {loc.name}</div>
             <div className="loc_address">Location : {loc.address}</div>
             <div className="loc_coordinates">Coordinates : {loc.coordinates}</div>
             <div className="loc_category">Category : {loc.category}</div>
            

       

         </div>
         :
         <div>

         </div>
         }
         
          <div>
            
          </div>
         
       </Col>
       <Col  className="right"xs="6">
       <div style={{ height: '100%', width: '100%' }}>
       
      </div>
       </Col>
       </Row>
       </Container>
       </StoreProvider>
       </>
   
    );
  }
  
  export default ViewLoc;