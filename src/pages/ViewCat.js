import {useLocalStore,useObserver} from 'mobx-react';
import { Row, Col ,Container,Button} from 'reactstrap';
import {StoreContext,StoreProvider} from '../components/store'
import {CatList} from '../components/catList'
import CatForm from '../components/catForm'

function ViewCat() {
 

    return (
      <> 
        <StoreProvider>
        <Container style={{backgroundColor:"#f2f7f5",color:"black"}} fluid>
       <Row  className="columnContainer">
       <Col  className="left" xs="6">
          <img src="" alt="location image" className="img_location"/>
          <div>title</div>
          <div>description</div>
          <div><CatList></CatList></div>
          <div>
            <CatForm></CatForm>
          </div>
         
       </Col>
       <Col  className="right"xs="6">
       aa
       </Col>
       </Row>
       </Container>
       </StoreProvider>
       </>
   
    );
  }
  
  export default ViewCat;