import { useState } from 'react'; 

import Gallery from './components/Gallery'; 

//import './styles/styles.css'; 

 

function App() { 

  const [tours, setTours] = useState([]); 

 

  const handleRemoveTour = (id) => { 

    setTours(tours.filter(tour => tour.id !== id)); 

  }; 

 

  return ( 

    <div className="app"> 

      <h1>Our Tours</h1> 

      <Gallery tours={tours} setTours={setTours} /> 

    </div> 

  ); 

} 

 

export default App; 