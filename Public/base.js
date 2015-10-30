console.log("Sanity Check: JS is working!");
var map, heatmap;
// var surveyPoints=[];
$(document).ready(function(){
	function initMap(data){
		console.log("the data in init:",data);
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 37.775061, lng: -122.424167},
			zoom: 10,
		}); 	
		heatmap = new google.maps.visualization.HeatmapLayer({
			data: data,
			map: map
		});
	}	

	function getsurveypoints(param){
		var heatMapData=[];
		$.post("/a",param, function(data){
			console.log("sending request");
			// console.log(data);
			data.forEach(function(survey){
				//$.each(data,function(key,val){
				var lat = survey.LAT;
				//var lat = val.LAT;
				var lon = survey.LONG;
				 //console.log(lat,lon);
				//var lon = val.LONG;
				//console.log(heatMapData[heatMapData.length]);
				// console.log(point);
				heatMapData.push(new google.maps.LatLng(lat, lon));
				//console.log("the heat map", heatMapData);
			});
		var typeCheck = typeof(heatMapData);
		console.log(typeCheck);
		// return heatMapData;	
				initMap(heatMapData);
				changeRadius();
				changeGradient();

		})
		.done(function(data){
				console.log("this is done");

		});
	}
		
	$("#clear").on("click", function(e){
		e.preventDefault();
		$('input:checkbox').removeAttr('checked');
	})

	// function submitdata(){		
		$("form").on("submit", function(e){
			e.preventDefault();

			var newQuery = {};
			var searchLang= $("#lang input:checked").val();
			var searchRace= $("#race input:checked").val();
			var searchArea= $("#area input:checked").val();
			var searchMari= $("#marital input:checked").val();
			var searchChil= $("#child input:checked").val();
			var searchEdu = $("#edu input:checked").val();
			var searchClass = $("#class input:checked").val();
			var searchTrans = $("#transport input:checked").val();
			var searchHHE = $("#hhemploy input:checked").val();
			var searchSame = $("#samesex input:checked").val();
			var searchBirth = $("#birth input:checked").val();
			var searchStamps = $("#stamps input:checked").val();
			var searchCitiz = $("#citiz input:checked").val();
			var searchHealth = $("#health input:checked").val();
			var searchGender = $("#gender input:checked").val();
			var searchEnglish = $("#english input:checked").val();
			var searchHearing = $("#hearing input:checked").val();
			var searchVision = $("#vision input:checked").val();
			var searchPhys = $("#phys input:checked").val();
			var searchLast = $("#last input:checked").val();
			var searchLooking = $("#looking input:checked").val();
			var searchLayoff = $("#layoff input:checked").val();
			var searchMilit = $("#milit input:checked").val();
			var searchTime = $("#time input:checked").val();
			newQuery.LANGUAGE = searchLang;
			newQuery.RACE = searchRace;
			newQuery.BIRTH = searchArea;
			newQuery.MARITAL = searchMari;
			newQuery.CHILDPRES = searchChil;
			newQuery.EDUCATION = searchEdu;
			newQuery.EMPCLASS = searchClass;
			newQuery.TRANSPORT = searchTrans;
			newQuery.HHEMPLOY = searchHHE;
			newQuery.SAMESEX = searchSame;
			newQuery.RECBIRTH = searchBirth;
			newQuery.STAMPS = searchStamps;
			newQuery.CITIZ = searchCitiz;
			newQuery.HEALTH = searchHealth;
			newQuery.SEX = searchGender;
			newQuery.ENGLISH = searchEnglish;
			newQuery.HEDIS = searchHearing;
			newQuery.VISDIS = searchVision;
			newQuery.PHYSDIS = searchPhys;
			newQuery.LASTWORKED = searchLast;
			newQuery.LOOKING = searchLooking;
			newQuery.LAYOFF = searchLayoff;
			newQuery.MILIT = searchMilit;
			newQuery.TIME = searchTime;


			console.log(newQuery);
			getsurveypoints(newQuery);
			// var pts = getsurveypoints(newQuery);
			// console.log("this points:", pts);
			// initMap(pts);
		});
	// }


		// function toggleHeatmap() {
		// 	heatmap.setMap(heatmap.getMap() ? null: map);
		// }
		function changeGradient() {
		  var gradient = [
		    'rgba(100, 255, 255, 0)',
		    'rgba(0, 255, 255, 0)',
		    'rgba(0, 255, 255, 1)',
		    'rgba(0, 127, 255, 1)',
		    'rgba(0, 63, 255, 1)',
		    'rgba(0, 0, 255, 1)',
		    'rgba(0, 0, 223, 1)',
		    'rgba(0, 0, 191, 1)',
		    'rgba(0, 0, 159, 1)',
		    'rgba(0, 0, 127, 1)',
		    'rgba(63, 0, 91, 1)',
		    'rgba(127, 0, 63, 1)',
		    'rgba(191, 0, 31, 1)',
		    'rgba(255, 0, 0, 1)'
		  ];
		  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
		}

		function changeRadius() {
		  heatmap.set('radius', heatmap.get('radius') ? null : 40);
		}

		// function changeOpacity() {
		//   heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
		// }





initMap([]);
});


