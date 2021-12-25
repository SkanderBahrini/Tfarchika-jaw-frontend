import {Figure} from 'react-bootstrap'

const Footer = () => {
    return ( 

        <div  style={{backgroundColor:"#2B3595"}}>
        <footer>
  
         <p style={{ color:'white'}}>  you can join us on our platforms accounts
       </p>
       <p style={{ color:'white'}}> <img src="/images/instagram.png" alt=""/> Tfarchika jaw</p>

       <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://www.troax.com/sites/default/files/styles/header_image_desktop_/public/2019-08/Contact_header_2880x1000px.jpg?itok=9hgrfHuH"
  />
  <Figure.Caption>
     <p style={{ color:'white'}}> Website designed by Mohamed skander bahrini</p>
  </Figure.Caption>
</Figure>



       
        </footer>
        </div>
     );
}
 
export default Footer;