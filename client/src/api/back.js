import axios from 'axios';
const back = axios.create({
	baseURL: 'videogames-production-5367.up.railway.app/',
});
export default back;
