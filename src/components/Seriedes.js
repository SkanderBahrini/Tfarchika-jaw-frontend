import { useState } from 'react';
import { useParams } from 'react-router-dom'

import React from 'react';
import Stack from '@mui/material/Stack';

import Footer from './Footer';



const Seriedes = () => {

      const  {id}= useParams();
            const SerieList =  JSON.parse(localStorage.getItem('SerieList'))
       const serie = SerieList.find((item)=>{return item._id == id});
    return ( 
        
     <div  style={{backgroundColor:"#182952"}}>
              
               <br/>
             
               <h1 style={{color:"white", fontFamily:"serif"}}> These Are Movies Details  </h1>
               <br/>

            <Stack
  direction="row"
  ml={20}
  alignItems="flex-start"
  
  spacing={20}
>  
       <img className="movieimage" src={serie.image} alt="" style={{ width:"500px", height:"500px"}}/>
        
          
     <div className="details">  
       <h4 style={{color:"white", fontFamily:"serif"}}>Serie Name:</h4> <h6 style={{color:"white"}}> {serie.name}</h6>
       <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Serie Platform: </h4> <h6 style={{color:"white"}}>{serie.platform}</h6>
         <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Occasion: </h4>  <h6 style={{color:"white"}}> {serie.occasion}</h6>
       <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Serie Date: </h4> <h6 style={{color:"white"}}> {serie.date}</h6>
        <br/>
        <h4 style={{color:"white", fontFamily:"serif"}}>Serie Time: </h4>  <h6 style={{color:"white"}}>{serie.time}</h6>
                </div>
               
         </Stack>  

         <br/>
         <br/> 
      
          <Footer/>   
         </div>


     );
}
 
export default Seriedes;