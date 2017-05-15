var Twitter = require('twitter');
var routes = {};

routes['/gettweets'] = function(req, res){

	var client = new Twitter({
		consumer_key: '',
		consumer_secret: '',
		access_token_key: '',
  		access_token_secret: ''
	});
	 
	var params = {screen_name: 'JimmySynthetic'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  	if (!error) {
	    	res.status(200).send(tweets);
	  	} else {
	  		res.status(500).send(error);
	  	};
	});
};

module.exports = routes;
