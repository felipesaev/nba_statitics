


import axios from "axios";

const baseURL = "https://www.balldontlie.io/api/v1/players";

    
async function fetchPLayers() {
    const { data } = await axios.get(baseURL)
    return data.data
}
    
export default fetchPLayers;