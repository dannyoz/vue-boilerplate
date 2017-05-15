import HTTP from 'superagent';

class ApiService {

	request(url){
		return HTTP.get(url)
	}

	post(url,data){
		return HTTP.post(url).send(data)	
	}
}

export default ApiService;
