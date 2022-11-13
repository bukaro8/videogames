import axios from 'axios';
const back = axios.create({
  baseURL: 'localhost:3001',
});
export default back;
