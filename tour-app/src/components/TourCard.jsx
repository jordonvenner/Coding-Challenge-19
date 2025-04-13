/*function TourCard(){
    return (<div>
        <h2>Hello from the TourCard Component!</h2>
        
      </div>)
    
    
    
    }
    export default TourCard
*/
    
import { useState } from 'react'; 

 

export default function TourCard({ 

  id, 

  image, 

  name, 

  price, 

  info, 

  onRemove 

}) { 

  const [readMore, setReadMore] = useState(false); 

 

  return ( 

    <article className="tour-card"> 

      <img src={image} alt={name} /> 

      <div className="tour-info"> 

        <div className="tour-header"> 

          <h3>{name}</h3> 

          <span className="price">${price}</span> 

        </div> 

        <p> 
        {/* Displays the first 150 characters followed by ... when 'Read More' is displayed on the button */}
        {readMore ? info : (info ? `${info.substring(0, 150)}...` : 'No Tour information available')} 


          <button  

            className="read-more"  

            onClick={() => setReadMore(!readMore)} > 

            {readMore ? 'Show Less' : 'Read More'} 

          </button> 

        </p> 

        <button  

          className="remove-btn"  

          onClick={() => onRemove(id)} > 

          Not Interested 

        </button> 

      </div> 

    </article> 

  ); 

} 