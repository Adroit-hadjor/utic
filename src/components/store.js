import React,{useState} from 'react'
import { Row, Col ,Container,Button} from 'reactstrap';
import {FaInstagram,FaTwitter,FaGithub,FaLinkedinIn,FaDev} from 'react-icons/fa';
import {useLocalStore,useObserver} from 'mobx-react';



export const StoreContext = React.createContext();
export const StoreProvider = ({children})=>{
  const store  = useLocalStore(()=>({
    categories:["sports","fashion","religion","entertainment","news","food","lifestyle","travel"],
    locations:[
      {
        name:"Legon pool side",
        address:"P.O.Box LG 27",
        coordinates:"21°33′N 21°33′N",
        category:"lifestyle"
      },
      {
        name:"Legon stadium",
        address:"P.O.Box  17",
        coordinates:"31°33′N 31°3′N",
        category:"sports"
      },
      {
        name:"Accra mall",
        address:"P.O.Box LG 7",
        coordinates:"21°33′N 20°3′N",
        category:"shopping"
      },
      {
        name:"Adenta kfc",
        address:"P.O.Box LG 347",
        coordinates:"20°31′N 21°33′N",
        category:"food"
      },
      {
        name:"kotoka airport",
        address:"P.O.Box LG 27",
        coordinates:"21°33′N 21°33′N",
        category:"travel"
      }
    ],
    addCat:cat=>{
      store.categories.push(cat)
    },
    addLoc:loc=>{
      store.categories.push(loc)
    }
    
    })
    
    )



    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}