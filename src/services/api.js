import axios from "axios";


export async function getMatch(id){
const response = await axios.get(`https://api.opendota.com/api/matches/${id}`)
console.log(response.data)
return response.data
}
