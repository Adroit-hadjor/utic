import React, {useState} from 'react';
import '../bootstrap.min.css';
import '../styles.scss';
import { Row, Col ,Container,Button} from 'reactstrap';
import {StoreContext,StoreProvider} from '../components/store'
import {useHistory} from 'react-router-dom';


const LocationForms = () => {

    const history = useHistory();
    const [locName, setlocName] = React.useState("")
    const [locAdd, setlocAdd] = React.useState("")
    const [locCoord, setlocCoord] = React.useState("")
    const [locCat, setlocCat] = React.useState("")
    const [loc, setloc] = React.useState("")

    const handleLocName = (e) => {
        setlocName(e.target.value)
    }
    const handleLocAdd = (e) => {
        setlocAdd(e.target.value)
    }
    const handleLocCoord = (e) => {
        setlocCoord(e.target.value)
    }

    const handleLocCat = (e) => {
        setlocCat(e.target.value)
    }

    


    const store = React.useContext(StoreContext);

    const handlesubmit = () => {
        const location = {
            name:locName,
            address:locAdd,
            category:locCat,
            coordinates:locCoord,
          
        }
        setloc(location)
        store.addLoc(location)

       
            const loc = store.locations
             loc.push(location)
             localStorage.setItem("locations",JSON.stringify(loc))
        
     
      history.push('/ViewLocations')
    }
    
    return (
        <Row>
                <Col md="3">
              
                </Col>
                <Col className="middle_form" md="6">
                <form onSubmit={()=>{handlesubmit();}} className="loc_form">
                    <div className="input_row">
                    <div>Location name : </div>
                    <div className="input_wrapper"><input onChange={(e)=>{handleLocName(e);}} type="text" required={true} style={{width:"100%",height:"40px"}} /></div>
                    </div>
                    <div className="input_row">
                    <div>Location address : </div>
                    <div className="input_wrapper"><input onChange={(e)=>{handleLocAdd(e);}} type="text" required={true} style={{width:"100%",height:"40px"}} /></div>
                    </div>
                    <div className="input_row">
                    <div>Location coordinate : </div>
                    <div className="input_wrapper"><input onChange={(e)=>{handleLocCoord(e);}} type="text" required={true} style={{width:"100%",height:"40px"}} /></div>
                    </div>
                    <div className="input_row">
                    <div>Location category : </div>
                    <div className="input_wrapper">
                        <select  required={true} style={{width:"100%",height:"40px"}} onChange={(e)=>{handleLocCat(e);}}>
                        {store.categories.map(cat=>(
                            <option value={cat}>{cat}</option>
                        ))}
                        </select>
                        </div>
                    </div>
                    <div className="input_row_button">
                   
                    <input type="submit" style={{width:"20%",color:"white",backgroundColor:"#6C63FF",outline:"none",border:"none"}} />
                    </div>

                   
                   
                   
                </form>
                </Col>
                <Col md ="2">
             
                </Col>
        </Row>
    )
}

export default LocationForms;