const defoptions = {
	riseOnHover: true,
	riseOffSet: 100
};
class Map {
	constructor(){
		this.token = 'pk.eyJ1IjoibmFkcmlvMSIsImEiOiJjaXYzOGV0bzcwMHFtMzBubW9pMDVncDZsIn0.hNxCtgzqUNmyEytbE90H-w';
		L.mapbox.accessToken = this._token;
		this._map = L.map('map', {
			center: [51.505, -0.09],
			zoom: 13
		});
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			subdomains: ['a','b','c','d'],
			id: 'nadrio1.21fic9cl',
			token: 'pk.eyJ1IjoibmFkcmlvMSIsImEiOiJjaXYzOGV0bzcwMHFtMzBubW9pMDVncDZsIn0.hNxCtgzqUNmyEytbE90H-w'
		}).addTo(this._map);
	}
	setLocation(latlng, zoom) {
		this._map.setView(latlng, zoom);	
	} 
	setMarker(latlng, options = defoptions) {
		let newmarker = L.marker(latlng, options);
		newmarker.addTo(this._map);
		newmarker.bindPopup("Current Location").openPopup();
		return newmarker;
	}
	makeIcon(img) {
		let newicon = L.icon({
			iconUrl: `icons/${img}.png`,
			iconSize: [29, 29],
		});
		return newicon;
	}
}