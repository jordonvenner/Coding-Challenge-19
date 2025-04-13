/*function Gallery(){
    return (<div>
        <h2>Hello from the Gallery Component!</h2>
        
      </div>)
    
    
    
    }
    export default Gallery

*/




/*    
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

*/



import { useEffect, useState } from 'react';
import TourCard from './TourCard';

const API_URL = 'https://www.course-api.com/react-tours-project';

export default function Gallery({ tours, setTours, onRemoveTour }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTours();
  }, [setTours]);

  //Display loading spinner/message before data is loaded.

  if (isLoading) return <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Loading tours...</p>
  
  </div>;
  //Display an error message if fetch fails.
  if (error) return <div className="error">Error: {error}</div>;
  if (tours.length === 0) return <div className="empty">No tours left!</div>;

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
