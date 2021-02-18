import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID mF9_l8sqk4yVoNy7VWHUp5_0uYozIyt__llA-QGq4XA'
      }
});