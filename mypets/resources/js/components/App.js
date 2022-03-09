import './App.css';
import React from 'react';

import Animals from "./components/Animals";
import Menu from './components/Menu';
import {Route,Routes,Link}from "react-router-dom";
import myAnimals from "./components/Animals"
function App() {

  let myAnimals=[
    {nom : "Tom", espece : "Chat", age : "2", descr : "un chat hyper gentil", image :
    "/images/2.jpg", liked: false},

    {nom : "Greta", espece : "Hamster", age : "5", descr : "une Hamster adorable pour les enfants",image : "/images/3.jpg",liked: false},
    
    {nom : "Brandon", espece : "Loup", age : "10", descr : "Ce Loup est fait pour les grands amateurs",
    image : "/images/5.jpg",liked: false}
      ]



  return (
    <div className='App'>
      
      <Menu/>
     <Routes>
      
        
        <Route exact path="/animals" element={<Animals animaux={myAnimals}/>} />
        </Routes>
        
      
     

    </div>




  );
}

export default App;
