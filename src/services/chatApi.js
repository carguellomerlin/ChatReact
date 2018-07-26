import axios from 'axios'

class chatApi {
	constructor(){
		this.axios = axios.create({
			baseURL: 'http://10.20.33.95:8080/api',
			params: {
				apikey: '',
			}
		})
	}
	getUsers = (page=0) => (
		this.axios.get('public/users',
		{
			params:
			{
				offset:10,
			}
		}).then( response => response.data)
		);
	getMessages = ( page = 0 ) => (
		this.axios.get('mensajes',{
			params: {
				offset: 10,
			}
		}).then(response => response.data)
		);
}
export default chatApi;