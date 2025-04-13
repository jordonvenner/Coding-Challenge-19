import { useState } from 'react'; 

import Gallery from './components/Gallery'; 

import './styles/styles.css'; 
import TourCard from './components/TourCard';

 

function App() { 

  const [tours, setTours] = useState([]); 

 

  const handleRemoveTour = (id) => { 

    setTours(tours.filter(tour => tour.id !== id)); 

  }; 

 

  return ( 

    <div className="app"> 

      <h1>Our Tours</h1> 

      <Gallery tours={tours} setTours={setTours} onRemoveTour={handleRemoveTour} /> 
      
    </div> 

  ); 

} 

 

export default App; 