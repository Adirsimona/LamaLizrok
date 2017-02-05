<template>
    <div class="item-list-map">
        <div id="map"></div>
    </div>
</template>

<script>
    export default {
        name: 'item-list-map',
        data() {
            return {
                map: null,
                markers: []
            }
        },
        computed: {
            items() {
                return this.$store.getters.filterItems;
            }
        },
        methods: {
            renderItemsOnMap(items) {
                if (!items || !this.map) return;
                if (this.markers.length) {
                    this.markers.forEach(marker => this.map.removeLayer(marker));
                }

                let myIcon = L.mapbox.marker.icon({
                    'marker-size': 'medium',
                    'marker-symbol': 'shop',
                    'marker-color': '#f23'
                });
                items.forEach(item => {
                    if ((item.cor.lat || item.cor.lng) === undefined) return;
                    var m = L.marker([item.cor.lat, item.cor.lng], {
                        icon: myIcon,
                        draggable: false
                    }).bindPopup(`
                            <img src="${item.imgUrl}"/>
                            <div class="pop">
                                <h1>${item.name}</h1>
                                <h2>${item.quality}</h2>
                                <h2>${item.desc}</h2>     
                                <a onclick="window.eventBus.$emit('nav', '${item._id}' )" class="button is-info">פרטים</a>
                            </div> `, {
                        minWidth: 120
                    }).addTo(this.map);
                    this.markers.push(m);
                })
            }
        },
        mounted() {

            L.mapbox.accessToken = 'pk.eyJ1IjoiYWRpcnNpbW9uYSIsImEiOiJjaXNieDd5bjUwMDB6MnRxZmYwYmp0ZXlkIn0.EVRohsa3TB2JcabmAQPZ9A';

            // create map
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    this.map = L.mapbox.map('map', 'mapbox.streets', {
                        center: [pos.coords.latitude, pos.coords.longitude],
                        zoom: 14,
                        zoomControl: false,
                        attributionControl: false
                    });
                    L.marker([pos.coords.latitude, pos.coords.longitude], {
                        icon: L.mapbox.marker.icon({
                            'marker-size': 'large',
                            'marker-symbol': 'police',
                            'marker-color': '#1a1eed'
                        })
                    }).addTo(this.map);
                    var styleLayer = L.mapbox.styleLayer('mapbox://styles/adirsimona/cisce3vxz00242xpewuqf5jz9').addTo(this.map);
                    this.renderItemsOnMap(this.items);
                });
            } else {
                this.map = L.mapbox.map('map', 'mapbox.streets', {
                    center: [0, 0],
                    zoom: 14,
                    zoomControl: false,
                    attributionControl: false
                });
                var styleLayer = L.mapbox.styleLayer('mapbox://styles/adirsimona/cisce3vxz00242xpewuqf5jz9').addTo(this.map);
                this.renderItemsOnMap(this.items);
            }
        },
        watch: {
            items() {
                if (this.map) {
                    this.renderItemsOnMap(this.items);
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
    #map {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }
    
    .item-list-map {
        background: #F0E5E5;
    }
</style>