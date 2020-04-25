import axios from 'axios';

export default axios.create({

  baseUrl: 'https://asos2.p.rapidapi.com',
  headers: {
   
    'x-rapidapi-key': '6595d61f38msh5cd7dcb21851847p131acajsnebf857459ca5',
  },
  params: {
    limit: 15,
    categoryId: 4209,
    offset: 0,
    store: 'US',
  },

});
