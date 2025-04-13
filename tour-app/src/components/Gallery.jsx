/*function Gallery(){
    return (<div>
        <h2>Hello from the Gallery Component!</h2>
        
      </div>)
    
    
    
    }
    export default Gallery

    */


import { useEffect } from 'react'; 

import TourCard from './TourCard'; 

 

const API_URL = 'https://www.course-api.com/react-tours-project'; 

 

export default function Gallery({ tours, setTours, onRemoveTour }) { 

  useEffect(() => { 

    const fetchTours = async () => { 

      const response = await fetch(API_URL); 

      const data = await response.json(); 

      setTours(data); 

    }; 

    fetchTours(); 

  }, [setTours]); 

 

  return ( 

    <div className="gallery"> 

      {tours.map(tour => ( 

        <TourCard  

          key={tour.id}  

          {...tour}  

          onRemove={() => onRemoveTour(tour.id)}  

        /> 

      ))} 

    </div> 

  ); 

} 

