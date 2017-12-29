/*
 * 1. Go to edit your Steam Community profile.
 * 2. Execute this script in the console.
 * 3. Ignore the errors spamming at the start.
 * 4. Wait for the request count to reach 0.
 * 5. Pray to God not a single request gets 503 Service Unavailable.
 * 6. Copy the logged JavaScript object from the console.
 */

var baseEditUrl = 'http://steamcommunity.com/actions/EditProcess?sId=' + g_steamID;
var requestCount = 0;

function postLocation(postData, callback) {
	requestCount++;

	postData.json = 1;
	postData.type = 'locationUpdate';
	
	createQuery2(baseEditUrl, function () {
		if (request.readyState === 4) {
			if (request.status === 200) {
				callback(JSON.parse(request.responseText));
			}
			requestCount--;
		}
	}, postData);

	var request = req;
	updateInProgress = false;
}

var locations = { countries: [] };
var countrySelect = document.getElementById('country');

for (var i = 1; i < countrySelect.options.length; i++) (function (i) {
	var country = countrySelect.options[i];
	country = { code: country.value, name: country.text };
	locations.countries.push(country);

	postLocation({ country: country.code }, function (response) {
		if (response.state.length === 1) return;
		country.states = [];
		
		for (var i = 1; i < response.state.length; i++) (function (i) {
			var state = response.state[i];
			state = { code: state.attribs.key, name: state.val };
			country.states.push(state);

			postLocation({ country: country.code, state: state.code }, function (response) {
				if (response.city.length === 1) return;
				state.cities = [];

				for (var i = 1; i < response.city.length; i++) (function (i) {
					var city = response.city[i];
					city = { id: parseInt(city.attribs.key, 10), name: city.val };
					state.cities.push(city);
				})(i);
			});
		})(i);
	});
})(i);

var intervalID = setInterval(function () {
	console.log(requestCount);
	if (requestCount === 0) {
		clearInterval(intervalID);
		console.log(locations);
	}
}, 1000);
