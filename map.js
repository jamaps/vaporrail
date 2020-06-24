var places = [
  ["Dresden",13.73911,51.05175, 9],
  ["Toronto",-79.379, 43.648, 163],
  ["Warsaw",21.0038,52.2306, 162],
  ["Miami",-80.191,25.775,45],
  ["Kolkata",88.368,22.570,10],
  ["Helsinki", 24.937, 60.169, 120],
  ["Rome",12.524,41.894,180],
  ["Marseille",5.378,43.301,-99],
  ["Newcastle",-1.615,54.971,8],
  ["Melbourne",144.962,-37.815,45],
  ["San Francisco",-122.445,37.722,-45],
  ["Portland",-122.672,45.531,-45],
  ["Zagreb",15.9830,45.8106,-10],
  ["Ottawa",-75.649,45.416,-45],
  ["Cincinatti",-84.5145,39.109,-101.5],
  ["Madrid",-3.689,40.409,-1],
  ["Fort Worth",-97.04, 32.897, 90],
  ["Zurich",8.5464, 47.3746, 90],
  ["Istanbul",28.9554, 41.0072, 180],
  ["Brooklyn",-73.931,40.750, 90],
  ["Porto",-8.6106,41.1445, 189],
  ["Pittsburgh",-80,40.43, -90],
  ["Guangzhou",113.299,23.1365, 0]
]

var randomnumber = Math.floor(Math.random() * (places.length));

var start_place = places[randomnumber]




// places.length;

// setting up the map :)
mapboxgl.accessToken = 'pk.eyJ1IjoiamVmZmFsbGVuIiwiYSI6ImNrYm85NTgwbTE2dGgydm82MGc1em05Z3cifQ.ZP_1cyT19FjMP2KzPZpo6g';
var map = new mapboxgl.Map({
    container: 'map', // div id
    style: 'mapbox://styles/jeffallen/ckbo0t10x1pj61iqsiedcoug1',
    center: [start_place[1],start_place[2]], // starting location
    zoom: 15.01, // starting zoom
    maxZoom: 17, // max zoom
    minZoom: 15, // max zoom
    maxPitch: 0,
    minPitch: 0,
    bearing: start_place[3],
    // attributionControl: false,
});

var x = 1;
function ShowDiv() {
    if (x == 0) {
      document.getElementById("show_info").style.display = "";
      document.getElementById("info").innerHTML = "<p><b>x</b></p>";
      x = 1;
    } else {
      document.getElementById("show_info").style.display = "none";
      document.getElementById("info").innerHTML = "<p><b>?</b></p>";
      x = 0;
    }
}

var y = 1;
function ShowDivFly1() {
    if (y == 0) {
      document.getElementById("show_fly1").style.display = "";
      document.getElementById("fly1").innerHTML = "<p><b>x</b></p>";
      y = 1;
    } else {
      document.getElementById("show_fly1").style.display = "none";
      document.getElementById("fly1").innerHTML = "<p><b>s</b></p>";
      y = 0;
    }
}




var z = 1;
function Fly2() {
  var newrandomnumber = Math.floor(Math.random() * (places.length));
  var new_place = places[newrandomnumber]
  map.setCenter([new_place[1],new_place[2]])
  map.setBearing(new_place[3])
}


function Trip() {
  console.log("meow")
  x = document.getElementById("lng").value;
  y = document.getElementById("lat").value;
  console.log(x,y)
  map.setCenter([x,y])
}


// map.on('mousemove', function(e) {
//   document.getElementById('coords').innerHTML =
//   // e.point is the x, y coordinates of the mousemove event relative
//   // to the top-left corner of the map
//
//   // e.lngLat is the longitude, latitude geographical position of the event
//   JSON.stringify(e.lngLat.wrap());
// });
