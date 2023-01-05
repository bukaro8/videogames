import axios from 'axios';
const back = axios.create({
	baseURL: 'http://videogames-production-.up.railway.app',
});
export default back;
