import { useState } from 'react';
import { useParams } from 'react-router-dom'

import React from 'react';
import Stack from '@mui/material/Stack';

import Footer from './Footer';

const Moviedes =  (props) => {

      const  {id}= useParams();
            const MovieList =  JSON.parse(localStorage.getItem('MovieList'))
       const movie = MovieList.find((item)=>{return item._id == id});
            
          console.log(movie)
 

 

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
       <img className="movieimage" src={movie.image} alt="" style={{ width:"500px", height:"500px"}}/>
        
          
     <div className="details">  
       <h4 style={{color:"white", fontFamily:"serif"}}>Movie Name:</h4> <h6 style={{color:"white"}}> {movie.name}</h6>
       <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Movie Platform: </h4> <h6 style={{color:"white"}}>{movie.platform}</h6>
         <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Occasion: </h4>  <h6 style={{color:"white"}}> {movie.occasion}</h6>
       <br/>
       <h4 style={{color:"white", fontFamily:"serif"}}>Movie Date: </h4> <h6 style={{color:"white"}}> {movie.date}</h6>
        <br/>
        <h4 style={{color:"white", fontFamily:"serif"}}>Movie Time: </h4>  <h6 style={{color:"white"}}>{movie.time}</h6>
                </div>
               
         </Stack>  

         <br/>
         <br/> 
      
          <Footer/>   
         </div>

      );
}
 
export default Moviedes;