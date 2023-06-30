import axios from "axios";

const baseURL = "https://www.balldontlie.io/api/v1";
const baseESPN = "http://site.api.espn.com/apis/site/v2/sports/basketball/nba"

export const fetchPlayers = async () => {
    const { data } = await axios.get(`${baseURL}/players`)
    return data
}

export const fetchGames = async () => {
    const { data } = await axios.get(`${baseURL}/games`);
    return data
}

export const fetchTeams = async () => {
    const { data } = await axios.get(`${baseESPN}/teams`);
    return data
}


