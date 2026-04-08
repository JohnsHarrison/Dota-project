import axios from "axios";


export async function getMatch(id){
const response = await axios.get(`https://api.opendota.com/api/matches/${id}`)
console.log(response.data)
return response.data
}

export async function getPlayer(id){
const response = await axios.get(`https://api.opendota.com/api/players/${id}`)
console.log(response.data)
return response.data
}

export async function getPlayerTotals(id){
const response = await axios.get(`https://api.opendota.com/api/players/${id}/totals`)
console.log(response.data)
return response.data
}

export async function getPlayerWinLoss(id){
const response = await axios.get(`https://api.opendota.com/api/players/${id}/wl`)
console.log(response.data)
return response.data
}

export async function getPlayerRecentMatch(id,count){
const response = await axios.get(`https://api.opendota.com/api/players/${id}/Matches?limit=${count}`)
console.log(response.data)
return response.data
}

export async function getPlayerHeroes(id,count){
const response = await axios.get(`https://api.opendota.com/api/players/${id}/heroes`)
console.log(response.data)
return response.data
}