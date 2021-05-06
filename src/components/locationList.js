import React,{useState} from 'react'

import {useLocalStore,useObserver} from 'mobx-react';
import { Row, Col ,Container,Button} from 'reactstrap';
import {StoreContext} from './store'





export const LocationList =()=>{
  const store = React.useContext(StoreContext);

  return useObserver(() =>(
    <div>
      {store.locations.map(loc=>(
        <div className="loc_row" key={loc.name}>
           <div className="name loc_text"> {loc.name}</div>
           <div className="name loc_text"> {loc.address}</div>
           <div className="name loc_text"> {loc.coordinates}</div>
           <div className="name loc_text"> {loc.category}</div>
        </div>
      ))}
    </div>
  ))
}