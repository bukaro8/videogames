import axios from 'axios';
const back = axios.create({
  baseURL: 'http://localhost:3001',
});
export default back;
