import axios from "axios";


export async function getMatch(id){
const response = await axios.get(`https://api.opendota.com/api/matches/${id}`)
// console.log(response.data)
return response.data
}

export async function getPlayer(id){
const response = await axios.get(`https://api.opendota.com/api/players/${id}`)
// console.log(response.data)
return response.data
}

export async function getPlayerTotals(id){
const response = await axios.get(`https://api.opendota.com/api/players/${id}/totals`)
// console.log(response.data)
return response.data
}

export async function getPlayerWinLoss(id){
const response = await axios.get(`https://api.opendota.com/api/players/${id}/wl`)
// console.log(response.data)
return response.data
}

export async function getPlayerRecentMatch(id,count){
const response = await axios.get(`https://api.opendota.com/api/players/${id}/Matches?limit=${count}`)
// console.log(response.data)
return response.data
}

export async function getPlayerHeroes(id){
const response = await axios.get(`https://api.opendota.com/api/players/${id}/heroes`)
// console.log(response.data)
return response.data
}

export async function getHeroesItems(id){
const response = await axios.get(`https://api.opendota.com/api/heroes/${id}/itemPopularity`)
// console.log(response.data)
return response.data
}

export async function getHeroesMatches(id){
const response = await axios.get(`https://api.opendota.com/api/heroes/${id}/matches`)
// console.log(response.data)
return response.data
}

export async function getHeroesMatchups(id){
const response = await axios.get(`https://api.opendota.com/api/heroes/${id}/matchups`)
// console.log(response.data)
return response.data
}

export async function getVideogames() {
    const response = await axios.get('https://api.pandascore.co/dota2/teams?filter[location]=US&page=5&per_page=100', {
        headers: {
            accept: 'application/json',
            authorization: `Bearer ${process.env.REACT_APP_PANDASCORE_KEY}`
        }
    })
    // console.log(response.data)
    return response.data
}

export async function getGosuGamerNews(game) {
    const rssUrl = `https://www.gosugamers.net/${game}/articles/rss`
    const response = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`)
    if (response.data.status !== 'ok') throw new Error('RSS feed error')
    return response.data.items
}