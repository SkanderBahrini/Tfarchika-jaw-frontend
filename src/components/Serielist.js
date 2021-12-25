import { Carousel, Container } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';
import React from "react";
import { useState } from "react";
import Footer from'./Footer'
import Stack from '@mui/material/Stack';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SearchSerie from "./SearchSerie";
import How from './How';

const Serielist = () => {



     const [Serielist,setSerielist]=useState(

        []
    );

 React.useEffect(() => {
    axios.get('http://localhost:3002/series/serie').then((response) => {
    //   setMovielist(response.data);
      setSerielist(response.data.response)

      localStorage.setItem('SerieList',JSON.stringify(response.data.response))

    });

  }, []);

    return ( 


        <div style={{ backgroundColor:'#182952'}}>
     <br/>
 <ScrollAnimation animateIn='animate__flash'
  initiallyVisible={true}>
 <h1 style={{"font-family": "serif", color:'white'}}> Here you can find a panel of series  </h1>
</ScrollAnimation>
  <br/>
 <br/>
    {/* carousel */}
<Container>
<Carousel>
  <Carousel.Item interval={1000}>
    <img
    style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://static.alphacoders.com/thumbs_categories/29.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
    style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://cdn.amazfeed.com/wp-content/uploads/2021/09/Download-Full-HD-or-4K-Squid-Games-Wallpaper-Poster.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://wallpaperbat.com/img/266147-the-walking-dead-wallpaper-top-free-the-walking-dead.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
<br/>
{/* title*/}
 <ScrollAnimation animateIn='animate__flash'
  initiallyVisible={true}>
 <h1 style={{"font-family": "serif", color:'white'}}> How will we help you find a serie ?   </h1>
</ScrollAnimation>

{/*  */}
  <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white"> 🎬 Have look at our series catalogue</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white">🔍 Seach for your perfect serie fit via ou filter</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white"> ✔️Enter your serie criteria</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent color="white">😁Have good time </TimelineContent>
      </TimelineItem>
    </Timeline>
{/* */}
<br/>
<br/>
<How/>
<br/>

<ScrollAnimation animateIn='animate__flash'
  initiallyVisible={true}>
 <h1 style={{"font-family": "serif", color:'white'}}> Let us find your adequate serie  </h1>
</ScrollAnimation>
<br/>
   <Stack
  direction="row"
  justifyContent="space-around"
  alignItems="flex-start"
  spacing={2}
  ml={20}
  mr={20}
  flexWrap= "wrap"

>
   { Serielist.map(e => 
  
  <ScrollAnimation animateIn='animate__backInLeft'
  initiallyVisible={true}  duration={5}>
      <Link to={`/description/Serie/${e._id}`}>
  <Card sx={{ maxWidth: 200, backgroundColor:"#577BC1", color:"black" ,maxHeight: 350 , fontSize: 10, flex: "diplay", alignContent: "space-between"  }} >
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

<SearchSerie/>

     <Footer/>
        </div>
     );
}
 
export default Serielist;