 import {Carousel, Card, Container} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Footer from './Footer';
const Home = () => {
    return ( 
    
     <div style={{ backgroundColor:"#182952"}}>


  
<br/>
<br/>
 <ScrollAnimation animateIn='animate__backInUp'
  initiallyVisible={true}>
 <h1 style={{"font-family": "serif", color:'white'}}> Welcome to Tfrachika jaw  </h1>
</ScrollAnimation>



 <br/>
 <br/>

    {/* Carousel */}

    <Container>
     <Carousel fade>
  <Carousel.Item>
    <img style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://cdn.technadu.com/wp-content/uploads/2020/04/Netflix-Amazon-Prime-Hulu-Disney-Plus-Logos.png"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://drdianebarton.com/images/Spring_Active.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{ width:'500px', height:'500px' }}
      className="d-block w-100"
      src="https://wallpaper.dog/large/20493501.jpg"
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>
</Container>
<br/>
{/* */}
 <ScrollAnimation 
  animateIn='animate__backInLeft'
  >

<h1 style={{"font-family": "serif", color:'white'}}> Why do you need us ? </h1>
</ScrollAnimation>
  
 {/* card1  */}
 <ScrollAnimation duration={5}
  animateIn='animate__backInLeft'
>

    <Card  style={{ width:'500px', height:'400px', left:'300px'}}>
    <Card.Img variant="top"  src="https://blog.jeremyjoron.com/fichiers/upload/images/grand/hesitation-client-1405667150.jpg" />
    <Card.Body>
      <Card.Text>
        We help you to find a program when you have hesitation and do not know
        what to do 
      </Card.Text>
    </Card.Body>
  </Card>
  
</ScrollAnimation>

{/* card2 */}

<ScrollAnimation duration={5}
  animateIn='animate__backInRight'
>

    <Card  style={{ width:'500px', height:'400px', left:'800px'}}>
    <Card.Img variant="top"  src="https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/tar16278770872780.jpg" />
    <Card.Body>
      <Card.Text>
       We target the program that fits your needs and make sure to meet 
       your expecations 
      </Card.Text>
    </Card.Body>
  </Card>
  
</ScrollAnimation>

{/* Card3 */}  
<ScrollAnimation duration={5}
  animateIn='animate__backInLeft'
>

    <Card  style={{ width:'500px', height:'400px', left:'300px'}}>
    <Card.Img variant="top"  src="https://positivechoices.org.au/pic/zkRNTQtX1t/4/parties" />
    <Card.Body>
      <Card.Text>
       Our goal is to assure that you have fun and 
       use your free time wisely 
      </Card.Text>
    </Card.Body>
  </Card>
  
</ScrollAnimation>

{/* */}

<br/>
<iframe src="https://giphy.com/embed/GWNBoSxSpt7Ik" width="480" height="274" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
 
 <br/>
<h4 style={{"font-family": "serif", color:'white'}} > You after using Tfarchika jaw   </h4>
<br/>

<Footer/>
 
 
        </div>
     );
}
 
export default Home;