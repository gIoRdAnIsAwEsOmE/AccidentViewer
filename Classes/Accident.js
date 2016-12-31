class Accident {
	constructor(date, borough, geoloc, victims, streetintersection){
		if(geoloc.lat == null && geoloc.lng == null){
			console.log("Invalid Location");
		} else {
		this._date = date;
		this._borough = borough;
		this._lat = geoloc.lat;
		this._lng = geoloc.lng;
		this._victims = victims;
		this._streets = streetintersection;
		//this._vehicles = vehiclesinvolved;
		}
	}
	get location() {
		const location = [this._lat, this._lng];
		return location;
	}
	static get data(){
		let d = "ERROR DATA CANNOT BE FOUND";
		$.ajax({
			url: 'https://data.cityofnewyork.us/resource/qiz3-axqb.json',
			data: {
				//"$limit" : 100,
				"$$app_token" : "1xtHEeIwbd4SwSfyS6gan9Lpv",
			},
			method: 'GET',
			async: false,
			success : (data) => {
				console.log(".........");
				d = data;
				console.log(d);
				console.log(".........");
			}
		});
		return d;
	}
}