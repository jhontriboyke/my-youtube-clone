import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: {
        regionCode: 'ID',
    },
    headers: {
        'X-RapidAPI-Key': '40b282c62bmsheade770ab8e30b1p1b5fc1jsnc76913e8fcdd',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchData = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options)
        return data
    } catch (error) {
        return error
    }
}
