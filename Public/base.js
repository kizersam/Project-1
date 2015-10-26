console.log("Sanity Check: JS is working!");
var map;
$(document).ready(function(){


function initMap(){
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.775061, lng: -122.424167},
    zoom: 14
  }); 	
 }	
// new google.maps.Marker({
//         			position: new google.maps.LatLng(lat,lng),
//         			map: map,
//         			title: title,
// 					});
initMap();	
});

