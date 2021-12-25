
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { Carousel, Container, TabContent } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { red } from '@mui/material/colors';
import {Link} from 'react-router-dom';
import Footer from'./Footer'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Stack from '@mui/material/Stack';
import SearchMovie from './SearchMovie';
import How from './How';







const Movielist = () => {

   const [Movielist,setMovielist]=useState(

        []
    );

 React.useEffect(() => {
    axios.get('http://localhost:3002/movies/movie').then((response) => {
    //   setMovielist(response.data);
      setMovielist(response.data.response)
        localStorage.setItem('MovieList',JSON.stringify(response.data.response))
    });

  }, []);



   
       return(

     
             <div style={{ backgroundColor:"#182952"}}>
 <br/>
 <ScrollAnimation animateIn='animate__flash'
  initiallyVisible={true}>
 <h1 style={{"font-family": "serif", color:'white'}}> Here you can find a panel of movies   </h1>
</ScrollAnimation>
  <br/>
 <br/>

    {/* Carousel */}

    <Container>
     <Carousel fade>
  <Carousel.Item>
    <img style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://besthqwallpapers.com/Uploads/6-4-2020/127441/thumb2-no-time-to-die-2020-james-bond-poster-promotional-materials.jpg"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://www.ungeek.ph/wp-content/uploads/2018/09/Venom-Banner.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://uhdwallpapers.xyz/media/images/800x/2020/08/25/jumanji-the-next-level-4k-8-hd-movies-wallpaper-5385841598367322.webp"
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>
</Container>
<br/>
{/* title*/}
 <ScrollAnimation animateIn='animate__flash'
  initiallyVisible={true}>
 <h1 style={{"font-family": "serif", color:'white'}}> How will we help you find a movie ?   </h1>
</ScrollAnimation>

{/*  */}
  <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white">📽️Have look at our movies catalogue</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white"> 🔍 Seach for your perfect movie fit via ou filter</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white"> ✔️Enter your movie criteria</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent color="white">😁Have good time </TimelineContent>
      </TimelineItem>
    </Timeline>

    <How/>

<br/>
<br/>
{/* title*/}
<ScrollAnimation animateIn='animate__flash'
  initiallyVisible={true}>
 <h1 style={{"font-family": "serif", color:'white'}}> Let us find your adequate movie from our catalogue  </h1>
</ScrollAnimation>
<br/>


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
   { Movielist.map(e => 
  
  <ScrollAnimation animateIn='animate__backInLeft'
  initiallyVisible={true}  duration={5}>

      <Link to={`/description/${e._id}`}>
  <Card sx={{ maxWidth: 200, backgroundColor:"#577BC1", color:"black" ,maxHeight: 300, minHeight:300 , fontSize: 10, flex: "diplay", alignContent: "space-between" }}>
      <CardActionArea>
        <CardMedia style={{ height:"200px", width:"200px"}}
          component="img"
          height="140"
          image={e.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx ={{fontSize: 16 }}>
           {e.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
    </ScrollAnimation>
 
  
   )}
</Stack>

<br/>



<br/>

<SearchMovie/>
<br/>


<Footer/>
 
   </div>

   



       
    );
}
 
export default Movielist;