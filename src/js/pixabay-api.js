import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54246906-f81d1c2d6c5eb45f9ea82e11c';

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
