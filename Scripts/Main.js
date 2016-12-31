let themap = new Map();
function findAccidents(){
	let data = Accident.data;
	console.log(data);
	let markers = L.featureGroup();
	for(let d of data){
		const newAccident = new Accident(d.date, d.borough, {lat : d.latitude, lng: d.longitude}, 0, [d.off_street_name,d.on_street_name]);
		const location = newAccident.location;
		if(location[0] != null){
			const icon = themap.makeIcon("caraccident");
			themap.setMarker(location, {
				icon: icon,
				riseOnHover: true,
				riseOffSet: 100,	
			});
		}
	}
}
function setUpCurrentLocation() {
	navigator.geolocation.getCurrentPosition(
		(data) => {
			let pos = [data.coords.latitude, data.coords.longitude];
			themap.setLocation(pos, 16);
			let icon = themap.makeIcon("currentlocation");
			themap.setMarker(pos, {
				icon: icon,
				riseOnHover: true,
				riseOffSet: 100,
			});
		},
		(err) => {
			console.log(err);
			console.log("failure");
		}
	);
}
function main(){
	setUpCurrentLocation();
	findAccidents();	
}
main();
