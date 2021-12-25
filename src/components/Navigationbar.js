import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';
const Navigationbar = () => {
    return ( 
        
<Navbar  variant="light" sticky="top" bg="dark" >
    <Container>
    <Navbar.Brand href="#home">  < Link to="/home" className="link">  😜Tfarchika jaw  </Link> </Navbar.Brand>
    <Nav className="me-auto">
     <Nav.Link > < Link to="/movies" className="link">Movies </Link></Nav.Link>
      <Nav.Link>< Link to="/series" className="link">Series </Link></Nav.Link>
      <Nav.Link>< Link to="/outdoors" className="link">Outdoor Activity </Link></Nav.Link>


   
    </Nav>
    </Container>
  </Navbar>
 
    
     );
}
 
export default Navigationbar;