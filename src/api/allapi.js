import axios from 'axios';

export default {
  getData: () => axios({
    method: 'GET',
    url: 'https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'asos2.p.rapidapi.com',
      'x-rapidapi-key': '6595d61f38msh5cd7dcb21851847p131acajsnebf857459ca5',
    },
  }),
};
