module.exports = function (req, res, next) {
	var d = new Date();
	var n = d.getDay();
	var userName = req.body.user_name;
	var requestText = req.body.text;
	


function slackbot(day, text){

  var n = day,
      requestText = text.toLowerCase(),
      responseText;

  if (requestText === "er fössari" || requestText === "er fössari?") {
    responseText = "ÞAÐ ER ALLTAF FÖSSARI!!!!!! https://www.youtube.com/watch?v=bsrc3vCL13E"
  } else if (requestText === "hvaða dagur er í dag?" || requestText === "hvaða dagur er í dag") {
    if (n === 5) {
      responseText = "Það. Er. FÖSSARIi! https://www.youtube.com/watch?v=bsrc3vCL13E";
    } else if (n === 6) {
      responseText = "Löllari";
    } else if (n === 0) {
      responseText = "Sunnari";
    } else if (n === 1) {
      responseText = "Mannari! https://www.youtube.com/watch?v=aF4CWCXirZ8";
    } else if (n === 2) {
      responseText = "Þrillari! https://www.youtube.com/watch?v=avFq9errZCk";
    } else if (n === 3) {
      responseText = "Millari! https://www.youtube.com/watch?v=8h3aql-SpyM";
    } else if (n === 4) {
      responseText = "Fimmari! https://www.youtube.com/watch?v=RubBzkZzpUA";
    } else {
      responseText = "Leiðinlegur dagur í dag";
    };
  };

  return {"text": responseText};
}

	var botPayload = slackbot(n, requestText);

	// avoid infinite loop
	if (userName !== 'slackbot') {
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
}

/*




	if requestText.lower() == 'er fössari' {
		var botPayload = {"text": "Já, það er fössari"};
	} else



	if requestText.lower() == 'er fössari' {
		var botPayload = {"text": "Já, það er fössari"};
	} else if (n === 5) {
		var botPayload = { "text": "FÖSSARI! https://www.youtube.com/watch?v=bsrc3vCL13E" };
	} else if (n === 6) {
		var botPayload = { "text": "LÖLLARI! https://www.youtube.com/watch?v=mp-IZEFqrG0" };
	} else {
		var botPayload = { "text": "Bara leiðinlegur dagur í dag :-(" };
	}
	}

	
	if (n === 5) {
		var botPayload = { "text": "FÖSSARI! https://www.youtube.com/watch?v=bsrc3vCL13E" };
	} else if (n === 6) {
		var botPayload = { "text": "LÖLLARI! https://www.youtube.com/watch?v=mp-IZEFqrG0" };
	} else {
		var botPayload = { "text": "Bara leiðinlegur dagur í dag :-(" };
	}

	//var botPayload = (n === 6) ?
	//'FÖSSARI! https://www.youtube.com/watch?v=bsrc3vCL13E' : 'Enginn fössari :-('

*/ 