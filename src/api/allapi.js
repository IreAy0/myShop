import axios from 'axios';

export default {
  getData: () => axios({
    method: 'GET',
    url: 'https://asos2.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'asos2.p.rapidapi.com',
      'x-rapidapi-key': '0b0b7606c2msh729870549ad9c76p13ff36jsn0fdf1ce9e504',
    },
  }),
};
