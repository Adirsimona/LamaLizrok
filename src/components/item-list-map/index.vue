<template>
    <div id="item-list-map">
        <div id="map">
        </div>
    </div>
</template>

<script>

    // require('mapbox.js');


    export default {
        name : 'item-list-map' , 
        data() { 
            return {
             
            }
        } ,
        mounted () {
        L.mapbox.accessToken = 'pk.eyJ1IjoiYWRpcnNpbW9uYSIsImEiOiJjaXNieDd5bjUwMDB6MnRxZmYwYmp0ZXlkIn0.EVRohsa3TB2JcabmAQPZ9A';
          var map = L.mapbox.map('map','mapbox.street', {
              	center: [32.505, 35.09],
	            zoom: 10 ,
                zoomControl : false ,
                attributionControl : false
          });
          var styleLayer = L.mapbox.styleLayer('mapbox://styles/adirsimona/cisce3vxz00242xpewuqf5jz9').addTo(map);
                L.marker([32.505, 35.09], {
                 icon: L.mapbox.marker.icon({
                'marker-size': 'large',
                'marker-symbol': 'bus',
                'marker-color': '#fa0'
            })
        }).addTo(map);
          
        }
    }
</script>

<style scoped lang='scss'>
     #map { position:absolute; top:0; bottom:0; width:100%; }
    //  #F0E5E5
    .item-list-map {
        background : #F0E5E5;
    }
</style>