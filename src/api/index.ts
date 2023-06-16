import axios from "axios";

const baseURL = "https://www.balldontlie.io/api/v1/players";

    
export const fetchPLayers = async () => {
    const {data} = await axios.get(baseURL)

    return data
}
    