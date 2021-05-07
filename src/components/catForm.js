import React, {useState} from 'react';
import '../bootstrap.min.css';
import '../styles.scss';
import { Row, Col ,Container,Button} from 'reactstrap';
import {StoreContext,StoreProvider} from '../components/store'
import {useHistory} from 'react-router-dom';


const CatForm = () => {

    const history = useHistory();
    const [locName, setlocName] = React.useState("")
   

    const handleLocName = (e) => {
        setlocName(e.target.value)
    }
   

    


    const store = React.useContext(StoreContext);

    const handlesubmit = () => {
        const location = {
            name:locName,
           
          
        }
     
            const loc = store.categories
             loc.push(locName)
             localStorage.setItem("categories",JSON.stringify(loc))
        
     
       history.push('/ViewCategories')
    }
    
    return (
        <Row>
                <Col md="3">
              
                </Col>
                <Col className="middle_form" md="6">
                <form onSubmit={()=>{handlesubmit();}} className="loc_form">
                    <div className="input_row">
                    <div>Category name : </div>
                    <div className="input_wrapper"><input onChange={(e)=>{handleLocName(e);}} type="text" required={true} style={{width:"100%",height:"40px"}} /></div>
                    </div>
                    
                    <div className="input_row_button">
                   
                    <input type="submit" style={{width:"20%",color:"white",backgroundColor:"#6C63FF",outline:"none",border:"none"}} />
                    </div>

                   
                    <div>
                 
                    </div>
                   
                </form>
                </Col>
                <Col md ="2">
             
                </Col>
        </Row>
    )
}

export default CatForm;