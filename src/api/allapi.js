import axios from 'axios';

export default {
  getData: (path) => axios({
    method: 'GET',
    url: `https://asos2.p.rapidapi.com/${path}`,
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'asos2.p.rapidapi.com',
      'x-rapidapi-key': '6595d61f38msh5cd7dcb21851847p131acajsnebf857459ca5',
    },
  }),
};
