import React,{useState} from 'react'
import {StoreContext,StoreProvider} from './store'



export const CatForm =()=>{
    const store = React.useContext(StoreContext);
    const [category,setCategory] = useState("");
    
  
    
  
    return(
      <>
      <div><input type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}}/></div>
      <div><button onClick={()=>{store.addCat(category);setCategory(" ")}}>Add</button></div>
      
      </>
    )
  }