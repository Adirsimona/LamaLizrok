<template>
    <div class="home">
        <filter-header></filter-header>
            <router-view></router-view>
    </div>
</template>

<script> 

        // <item-list-map v-show="isMapMode" :items="filterItems" :location="location"></item-list-map>
        // <item-list v-show="!isMapMode" :items="filterItems"></item-list>
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
            this.$store.dispatch('getItems');
        }  
    }
</script>

<style scoped lang='scss'>

</style>