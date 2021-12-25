
import { useState } from 'react';
import { useParams } from 'react-router-dom'

import React from 'react';
import Stack from '@mui/material/Stack';

import Footer from './Footer';




const Activitydes = () => {

    const {id} = useParams();

    const Acitvitylist =  JSON.parse(localStorage.getItem('Activitylist'))

     const activity = Acitvitylist.find((item)=>{return item._id == id});
    return ( 
        <div  style={{backgroundColor:"#182952"}}>
              
               <br/>
             
               <h1 style={{color:"white", fontFamily:"serif"}}> These Are Activity Details  </h1>
               <br/>

            <Stack
  direction="row"
  ml={20}
  alignItems="flex-start"
  
  spacing={20}
>  
       <img className="movieimage" src={activity.image} alt="" style={{ width:"500px", height:"500px"}}/>
        
          
     <div className="details">  
       <h4 style={{color:"white", fontFamily:"serif"}}>Activity  Name:</h4> <h6 style={{color:"white"}}> {activity.name}</h6>
       <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Occasion: </h4>  <h6 style={{color:"white"}}> {activity.occasion}</h6>
       <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Activity Price: </h4> <h6 style={{color:"white"}}> {activity.price}</h6>
        <br/>
        <h4 style={{color:"white", fontFamily:"serif"}}>Activity place: </h4>  <h6 style={{color:"white"}}>{activity.place}</h6>
                </div>
               
         </Stack>  

         <br/>
         <br/> 
      
          <Footer/>   
         </div> 

        

        
     );
}
 
export default Activitydes;