import { useState, useEffect } from "react";
import {getPlayerRecentMatch} from "../services/api"

function RecentMatch(id){
const [matches,setMatches] = useState()

useEffect(() => {
    const fetchData = async () => {
         
            // Define your API requests
            const apiCallOne = getPlayerRecentMatch(id.id);
    
            // Process the data once all calls are complete
            setMatches(apiCallOne)
         
            
            
       
        };
        
        console.log(id.id)
    
        fetchData();

      }, [id]); 

return(
    <div>Hello</div>
)

}

export default RecentMatch