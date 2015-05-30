module.exports = function (req, res, next) {
	var d = new Date();
	var n = d.getDay();
	var userName = req.body.user_name;
	
	if (n === 5) {
		var botPayload = "text": "FÖSSARI! https://www.youtube.com/watch?v=bsrc3vCL13E";
	} else if (n === 6) {
		var botPayload = "text": "LÖLLARI! https://www.youtube.com/watch?v=mp-IZEFqrG0";
	} else {
		var botPayload = "text": "Bara leiðinlegur dagur í dag :-(";
	}

	//var botPayload = (n === 6) ?
	//'FÖSSARI! https://www.youtube.com/watch?v=bsrc3vCL13E' : 'Enginn fössari :-('



	//var botPayload = {
	//	text : 'FÖSSARI! https://www.youtube.com/watch?v=bsrc3vCL13E'
	//};

	// avoid infinite loop
	if (userName !== 'slackbot') {
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
}