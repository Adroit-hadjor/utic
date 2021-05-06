import React,{useState} from 'react'

import './App.scss';
import { Row, Col ,Container,Button} from 'reactstrap';
import {FaInstagram,FaTwitter,FaGithub,FaLinkedinIn,FaDev} from 'react-icons/fa';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Homepage from './pages/HomePage'
import AddCat from './pages/AddCat'
import AddLoc from './pages/AddLoc'
import ViewCat from './pages/ViewCat'
import ViewLoc from './pages/ViewLoc'
import ViewCatList from './pages/ViewCatList'
import ViewLocList from './pages/ViewLocList'

function App() {
 

  return (
    <Router >
   
      <Switch>
              
            
               <Route
                exact 
                path={"/"}
              
                >
                {<Homepage />}
                 </Route>
                 
                 <Route
             
                path={"/AddCategory" }
                component={<AddCat />}
                >
                {<AddCat />}
                 </Route>

                 <Route
                path={"/AddLocation"}
                component={<AddLoc />}

                >
                {<AddLoc />}
                 </Route>
                 <Route
             
                path={"/ViewCategory"}
                component={<ViewCat />}
                >
                {<ViewCat />}
                 </Route>
                 <Route
             
                path={"/ViewLocation"}
                component={<ViewLoc />}
                >
                {<ViewLoc />}
                 </Route>

                 <Route
             
                path={"/ViewCategories"}
                component={<ViewCatList />}
                >
                {<ViewCatList />}
                  </Route>
                  <Route
              
                path={"/ViewLocations"}
                component={<ViewLocList />}
                >
                {<ViewLocList />}
                  </Route>
           
              </Switch>
        
              </Router>
 
  );
}

export default App;
