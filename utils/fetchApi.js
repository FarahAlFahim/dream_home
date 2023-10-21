import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'c5758e2dd0msh780e835b41d12eep1973a3jsn3d180d6f17d1',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        },
    });

    return data;
}











