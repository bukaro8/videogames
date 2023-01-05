import axios from 'axios';
const back = axios.create({
	baseURL: 'https://videogames-production-5367.up.railway.app',
});
export default back;
