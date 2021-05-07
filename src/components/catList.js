import React,{useState,useEffect} from 'react'

import {useLocalStore,useObserver} from 'mobx-react';
import { Row, Col ,Container,Button} from 'reactstrap';
import {StoreContext} from './store'





export const CatList =()=>{

  const store = React.useContext(StoreContext);

  useEffect(()=>{
    if (JSON.parse(localStorage.getItem("locations"))){
      console.log("there")
      
    }else{
      localStorage.setItem("categories",store.categories)
    }
   
  })

  return useObserver(() =>(
    <div>
      {
        
      
      store.categories.map(cat=>(
      
        <div className="loc_row" key={cat}>
        <div className="name loc_text"> {cat}</div>
        <div className="name loc_text"> </div>
        <div className="name loc_text"> </div>
        <div className="name loc_text"> </div>
       </div>
      ))}
    </div>
  ))
}