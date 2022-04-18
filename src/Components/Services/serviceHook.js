import React from 'react'
import Services from './Services';

function serviceHook() {
    const [service, setService] = useState([]);
  useEffect(() => {
    // https://restcountries.com/v3.1/all
    // services.json
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setService(data))
      
  }, []);
  
  
  return (
    <div>
        console.log{service}
        {
            service.map(service => <Services service = {service}></Services>) 
        }
        
   </div>
  )
}

export default serviceHook