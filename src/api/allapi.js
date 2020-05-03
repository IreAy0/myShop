import axios from 'axios';

export default {
  getData: (path) => axios({
    method: 'GET',
    url: `https://asos2.p.rapidapi.com/${path}`,
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'asos2.p.rapidapi.com',
      'x-rapidapi-key': 'cf945338a8msh91d42d394e7cd47p1b16fajsn8bb335bc956d',
    },
  }),
};
