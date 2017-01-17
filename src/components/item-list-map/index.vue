<template>
    <div class="item-list-map">
        <div id="map"></div>
    </div>
</template>

<script>

    export default {
        name : 'item-list-map' , 
        props : {
            items : {
                type: Array
            }
        } ,
        data() { 
            return {
                map: null,
                markers : []
            }
        } ,

        methods: {
            renderItemsOnMap(items) {
                if(this.markers.length){
                    this.markers.forEach( marker => this.map.removeLayer(marker));
                }
                    for(let i = 0 ; i < items.length; i++) {
                        let lat = items[i].cor.lat;
                        let lng = items[i].cor.lng;
                        // var myIcon = L.icon({
                        //     iconUrl: 'bus',
                        //     iconRetinaUrl: '',
                        //     iconSize: [50, 80],
                        //     iconAnchor: [22, 94],
                        //     popupAnchor: [-3, -76],
                        //     shadowUrl: '',
                        //     shadowRetinaUrl: '',
                        //     shadowSize: [68, 95],
                        //     shadowAnchor: [22, 94]
                        // });                    L.marker([ pos.coords.latitude , pos.coords.longitude ], {
                        let myIcon =  L.mapbox.marker.icon({
                        'marker-size': 'medium',
                        'marker-symbol': 'marker',
                        'marker-color': '#f23'
                        });
    
                            var m = L.marker([ lat , lng ], {
                                icon: myIcon ,
                                draggable : true 
                            }).bindPopup(`
                            <img src="${items[i].imgUrl}" />
                            <h1>${items[i].name}</h1>
                            <h2>${items[i].quality}</h2>
                            <h2>${items[i].desc}</h2>
                            <button onclick="sayHey">details</button>
                            ` , {
                                    minWidth: 120
                            }).addTo(this.map);
                            this.markers.push(m);
                        }
            }
        } ,
        mounted () {
                L.mapbox.accessToken = 'pk.eyJ1IjoiYWRpcnNpbW9uYSIsImEiOiJjaXNieDd5bjUwMDB6MnRxZmYwYmp0ZXlkIn0.EVRohsa3TB2JcabmAQPZ9A';
                // create map
                this.map = L.mapbox.map('map','mapbox.street', {
                        center: [32.505, 35.09],
                        zoom: 7 ,
                        zoomControl : false ,
                        attributionControl : false
                });
                var styleLayer = L.mapbox.styleLayer('mapbox://styles/adirsimona/cisce3vxz00242xpewuqf5jz9').addTo(this.map);

                    // get user position and add marker to map
                navigator.geolocation.getCurrentPosition(pos => {
                    L.marker([ pos.coords.latitude , pos.coords.longitude ], {
                        icon: L.mapbox.marker.icon({
                        'marker-size': 'large',
                        'marker-symbol': 'bus',
                        'marker-color': '#fa0'
                        })
                    }).addTo(this.map);   
                });
            } ,
            watch: {
               items() {
                   this.renderItemsOnMap(this.items);
               } 
            }
         } 
        
</script>



<style scoped lang='scss'>
     #map { position:absolute; top:0; bottom:0; width:100%; }

    .item-list-map {
        background : #F0E5E5;
    }
</style>