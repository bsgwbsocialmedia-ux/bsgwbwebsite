import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

API.interceptors.request.use((req) => {

  const token = localStorage.getItem('token');

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// =============================
// URLs
// =============================

export const BANNERS_URL = '/banners';
export const CHIEF_SCOUT_URL = '/chief-scout';

export const CIRCULARS_URL = '/circulars';
export const VIDEOS_URL = '/videos';
export const GALLERY_URL = '/gallery';
export const NEWS_URL = '/news';

// =============================
// Common Fetch
// =============================

export const apiFetch = async (url) => {

  try {

    const res = await API.get(url);

    return res.data;

  } catch (error) {

    console.log(error);

    return null;

  }

};

export default API;