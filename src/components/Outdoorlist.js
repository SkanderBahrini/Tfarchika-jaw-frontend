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
import SearchAcitivity from "./SearchAcitivity";
import How from './How';



const Outdoor = () => {

    
     const [Outdoorlist,setOutdoorlist]=useState(

        []
    );

 React.useEffect(() => {
    axios.get('http://localhost:3002/outdoors/outdoor').then((response) => {
    //   setMovielist(response.data);
      setOutdoorlist(response.data.response)

      localStorage.setItem('Activitylist', JSON.stringify(response.data.response))

    });

  }, []);
    return ( 

        
   <div style={{ backgroundColor:'#182952'}}>
     <br/>
 <ScrollAnimation animateIn='animate__flash'
  initiallyVisible={true}>
 <h1 style={{"font-family": "serif", color:'white'}}> Here you can find a panel of outdoor activities </h1>
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
      src="https://i0.wp.com/www.sportalsub.net/en/wp-content/uploads/2020/07/top5outdoor.jpg?resize=860%2C573&ssl=1"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
    style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://www.cumulusoutdoors.com/wp-content/uploads/2019/09/KMC-kayaking-790x520.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://i.guim.co.uk/img/media/ae10ea3e9f6864b4db34d9767aaa8bf81098b637/29_583_6434_3860/master/6434.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=eb6b335122ce133d5a754df8a8806397"
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
        <TimelineContent color="white"> 🏇 🏌️‍♀️ 🏊 Have look at our activities catalogue</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white"> 🔍Seach for your perfect activity fit via ou filter</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white"> ✔️ Enter your activity criteria</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent color="white">😁Have good time </TimelineContent>
      </TimelineItem>
    </Timeline>

    <br/>
    <How/>

    <br/>
    
<ScrollAnimation animateIn='animate__flash'
  initiallyVisible={true}>
 <h1 style={{"font-family": "serif", color:'white'}}> Let us find your adequate activity  </h1>
</ScrollAnimation>
  <Stack
  direction="row"
  justifyContent="space-around"
  alignItems="flex-start"
  spacing={2}
  ml={20}
  mr={20}
  flexWrap= "wrap"
    
>
 
   { Outdoorlist.map(e => 


    <ScrollAnimation animateIn='animate__backInLeft'
  initiallyVisible={true}  duration={5}>

      <Link to={`/description/Activity/${e._id}`}>
  <Card sx={{ maxWidth: 200, backgroundColor:"#577BC1", color:"black" ,maxHeight: 350 , fontSize: 10, flex: "diplay", alignContent: "space-between"  }} >
      <CardActionArea>
        <CardMedia style={{ height:"200px", width:"200px"}}
          component="img"
          height="140"
          image={e.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"sx ={{fontSize: 16 }}>
           {e.name}
          </Typography>

                 <Typography variant="overline" display="block" gutterBottom sx ={{fontSize: 12}}>
        {e.place}
      </Typography>
          <Typography variant="body2" color="text.secondary" sx ={{fontSize: 12 }}>
           {e.occasion} 
          </Typography>
         

             <Typography variant="caption" display="block" gutterBottom>
       {e.price}
      </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>

    </ScrollAnimation>
 
  
   )}
</Stack>

<br/>

<SearchAcitivity/>

<br/>
     <Footer/>

        </div>
     );
}
 
export default Outdoor;