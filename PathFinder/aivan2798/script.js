    var map;

    var user_markers = [];
    var active_lat = 0;
    var active_lon = 0;

    var pick_up_lat = 0;
    var pick_up_lon = 0;

    var marker_color = "red";

    var dest_lat = 0;
    var dest_lon = 0;


    var loco_steps = 0;

    
    function initMap() 
    {
    // Initialize Leaflet map
    map = L.map('map').setView([0.3222496209212994, 32.56208181381226], 20);

    // Add OpenStreetMap tiles to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add a click event listener to the map
    map.on('click', function(event) {
      // Get latitude and longitude from the clicked point
      var latitude = event.latlng.lat;
      var longitude = event.latlng.lng;

      active_lat = latitude;
      active_lon = longitude;

      var customIcon = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-'+marker_color+'.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
        });

        var user_marker = user_markers[loco_steps];
        if (user_marker)
      {
        map.removeLayer(user_marker);
      }
      //alert("locol step: "+loco_steps);
      user_markers[loco_steps] = L.marker([latitude, longitude],{ icon: customIcon });
      if(loco_steps==1)
      {
        
      }
      if(loco_steps==2)
      {
        
        var xcustomIcon = L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
      });
      user_markers[loco_steps] = L.marker([latitude, longitude],{ icon: xcustomIcon });
      }
      
      user_marker = user_markers[loco_steps];
      user_marker.addTo(map)
            .bindPopup('Your Coordinates<br>Latitude: ' + latitude + '<br>Longitude: ' + longitude)
            .openPopup();
      
      // Automatically fill the div_fx fields with the coordinates
     // document.getElementById('latitude').value = latitude;
      //document.getElementById('longitude').value = longitude;
    });

    // Add search box control to the map
    var searchControl = L.Control.geocoder({
      defaultMarkGeocode: false,
      placeholder: 'Search location...',
    }).on('markgeocode', function(event) {
      // Get the selected location from the search result
      var latitude = event.geocode.center.lat;
      var longitude = event.geocode.center.lng;

      // Center the map on the selected location
      map.setView([latitude, longitude], 20);
      
      var customIcon = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
        });

      if (user_marker)
      {
        map.removeLayer(user_marker);
      }

      user_marker = L.marker([latitude, longitude],{ icon: customIcon });
      
      
      user_marker.addTo(map)
            .bindPopup('Your Coordinates<br>Latitude: ' + latitude + '<br>Longitude: ' + longitude)
            .openPopup();
      document.getElementById('latitude').value = latitude;
      document.getElementById('longitude').value = longitude;
    
    }).addTo(map);


  }

 
  
  $(document).ready(function()
  {
    $("#loading").hide();
      $("#continue_point").click(
        function(){
          pick_up_lat = active_lat;
          pick_up_lon = active_lon;
          $(this).parent().hide();
          $("#dest_box").css("display","inline-block");
          loco_steps = 2;
        }
      );

      $("#find_route").click(
        
        function(){

         dest_lat = active_lat;
         dest_lon = active_lon;
         //alert("finding route from: "+pick_up_lat+" to: "+dest_lat);
         $("#loading").show();
         findWay([pick_up_lon,pick_up_lat],[dest_lon,dest_lat]);
        }
      );
      initMap();
    });

    function showLines(geom_str)
    {
      const points = decodePolyline(geom_str,false);
      console.log(points);
      var polyline = L.polyline(points, { color: 'red' }).addTo(map);
      map.fitBounds(polyline.getBounds());
      $("#loading").hide();
    }