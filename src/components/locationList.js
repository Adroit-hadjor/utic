import React,{useState,useCallback,useEffect} from 'react'

import {useLocalStore,useObserver} from 'mobx-react';
import { Row, Col ,Container,Button} from 'reactstrap';
import {StoreContext} from './store'
import {useHistory} from 'react-router-dom';




export const LocationList =()=>{
  const store = React.useContext(StoreContext);
  const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/ViewLocation'), [history]);

    useEffect(()=>{
     
        localStorage.setItem("locations",JSON.stringify(store.locations))
        
    
     
    })

   
       
          return(
        <div>
          {
                  
                 
                  store.locations.map(loc=>(
            <div onClick={()=>{localStorage.setItem("location",JSON.stringify(loc));handleOnClick()}} className="loc_row" key={loc?.name}>
               <div className="name loc_text"> {loc.name}</div>
               <div className="name loc_text"> {loc.address}</div>
               <div className="name loc_text d-none d-md-block"> {loc.coordinates}</div>
               <div className="name loc_text"> {loc.category}</div>
            </div>
          )
            
    
         
          )
        
        }
        </div>
      ) 
   
    
   
    
  }
   