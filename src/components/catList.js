import React,{useState} from 'react'

import {useLocalStore,useObserver} from 'mobx-react';
import { Row, Col ,Container,Button} from 'reactstrap';
import {StoreContext} from './store'





export const CatList =()=>{
  const store = React.useContext(StoreContext);

  return useObserver(() =>(
    <ul>
      {store.categories.map(cat=>(
        <li key={cat}>{cat}</li>
      ))}
    </ul>
  ))
}