var routes = {};

routes['postroute'] = function(req,res){
	res.status(200).json({
		success: true,
	});
};

module.exports = routes;
