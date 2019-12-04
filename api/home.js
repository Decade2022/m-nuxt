import axios from 'axios';

export function banner (position_key) {
  return axios.get(`https://test-api.rongcat.com/banner?position_key=${position_key}`)
}