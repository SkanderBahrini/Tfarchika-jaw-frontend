import { Button, Form } from "react-bootstrap";

import { useRef, useState} from "react";

import ScrollAnimation from "react-animate-on-scroll";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';

import Stack from '@mui/material/Stack';

import React from "react";

const SearchMovie = () => {
 
     const  [name,setname]=useState('');
  
   
  

  
   
   const [bool, setbool]= useState(false)
   

   const refname=useRef();
  
  
  
            const MovieList =  JSON.parse(localStorage.getItem('MovieList'))
       const movie = MovieList.find((item)=>{return item.name == name });


       console.log(movie)

   const handleSubmit=( e => {
       
      e.preventDefault();
            //window.location.reload();
     setbool(true)
    });    
   




 


  
 
    const field = { color: 'white'}

    return ( 
         <div className="player">

            <div className="container">

    <br/>
    <br/>
    {/*  title*/}
 <ScrollAnimation animateIn='animate__zoomInUp'
  initiallyVisible={true}>
 <h1 style={{"font-family": "serif", color:'white'}}> Search for your Movie  </h1>
</ScrollAnimation>

{/** Form */}
                <br/>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={field}>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" ref={refname}  onChange={(e) => setname(refname.current.value)} />
    
  </Form.Group>
   

  
 
 <br/>
 <br/>
  <Button variant="primary" type="submit" onClick={handleSubmit}>
    Submit
  </Button>
          </Form>
             </div>

{/*  proposition*/}
<ScrollAnimation animateIn='animate__slideInLeft'
  initiallyVisible={true}>
 <h1 style={{"font-family": "serif", color:'white'}}> These are our propositions for you   </h1>
</ScrollAnimation>

 <Stack
  direction="row"
  justifyContent="space-around"
  alignItems="flex-start"
  alignContent="space-between"
  spacing={2}
  ml={20}
  mr={20}
  flexWrap= "wrap"

>
 { bool &&  <div className="details">  
      
      <Link to={`/description/${movie._id}`}>
  <Card sx={{ maxWidth: 200, backgroundColor:"#577BC1", color:"black" ,maxHeight: 300, minHeight:300 , fontSize: 10, flex: "diplay", alignContent: "space-between" }}>
      <CardActionArea>
        <CardMedia style={{ height:"200px", width:"200px"}}
          component="img"
          height="140"
          image={movie.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx ={{fontSize: 16 }}>
           {movie.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
                </div> }

                </Stack>
  
  <br/>



   
    
     

     <br/>
     <br/>
   
        </div>
     );
}
 
export default SearchMovie;