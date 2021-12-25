import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import './App.css';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import Navigationbar from './components/Navigationbar';
import Movielist from './components/Movielist';
import Moviedes from './components/Moviedes';
import Serielist from './components/Serielist';
import Outdoorlist from './components/Outdoorlist';
import Activitydes from './components/Acitivitydes';
import Seriedes from './components/Seriedes';
import { useRef, useState} from "react";
import axios from 'axios';



function App() {

const [movies,setmovies]=useState('')

//  axios.get('http://localhost:3002/movies/movie').then((response) => {
//       setmovies(response.data)
    
//       console.log(movies)
//     })
 



  return (
    <Router>
    <div className="App">
     <Navigationbar/>
    
  

     <div>
     
     <Routes>
      
   <Route exact path="/movies" element={<Movielist/>}/>
    

       <Route exact path="/home" element={<Home/>}/>
      
     <Route  path='/description/:id' element={<Moviedes arr={movies}/>  }/>

       <Route  path='/description/Activity/:id' element={<Activitydes arr={movies}/>  }/>

        <Route  path='/description/Serie/:id' element={<Seriedes/>  }/>
     <Route  path='/series' element={<Serielist/>}/>

     <Route  path='/outdoors' element={<Outdoorlist/>}/>
      
 
    </Routes>

      
   
  

 </div>
       
        </div>

        </Router>
  );
}

export default App;
