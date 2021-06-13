const axios = require('axios');
const url = 'http://universities.hipolabs.com/search?country=india';

/*
** Function to get university list from api
*/
export const getUniversityList = async () => {
    try {
        const response = await axios.get(url);
        return response;
    } 
    catch (error) {
        console.error(error);
    }
}

