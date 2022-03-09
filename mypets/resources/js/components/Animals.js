import React from "react";
import AnimalList from ".../components/AnimalList"


function Animals(props){

    


    return(
        
        <div>
             <h1>Animals</h1> 
             <div className="row row-cols-1 row-cols-md-3 g-4">
           
      

        <AnimalList Animaux1={props.animaux[2]}/>
        <AnimalList Animaux1={props.animaux[1]}/>
        <AnimalList Animaux1={props.animaux[0]}/>
        
        </div>
       
        
        </div>
    )


}
export default Animals;
