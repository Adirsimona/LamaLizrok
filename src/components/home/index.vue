<template>
    <div class="home">
        <filter-header></filter-header>
        <item-list-map v-show="isMapMode" :items="filterItems" :location="location"></item-list-map>
        <item-list v-show="!isMapMode" :items="filterItems"></item-list>
    </div>
</template>

<script> 
import filterHeader from '../filter-header';
import itemListMap from '../item-list-map';
import itemList from '../item-list';
    export default {
        name : 'home' , 
        data() { 
            return {
                location : {
                    lat : 0 , 
                    lng : 0               
                 }
            }
        } ,
        components: {
            filterHeader ,itemListMap , itemList
        } ,
        computed: {
            filterItems() {
                return this.$store.getters.filterItems;
            } ,
            isMapMode() {
                return this.$store.state.isMapMode;
            }
        } ,
        created () {
                navigator.geolocation.getCurrentPosition(pos => {
                    this.location.lat =pos.coords.latitude;
                    this.location.lng =pos.coords.longitude;
            })
        }  
    }
</script>

<style scoped lang='scss'>

</style>