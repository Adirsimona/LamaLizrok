<template>
    <div id="item-list">
        <item-prev v-for="item in items" :item="item"></item-prev>
    </div>
</template>

<script>
import itemPrev from '../item-prev';
    export default {
        name : 'item-list' , 
        data() { 
            return {
             
            }
        } ,
        components : {
            itemPrev
        } ,
        computed: {
            items() {
                return this.$store.state.items;
            }
        } ,
        created () {
            this.$store.dispatch('getItems');
        }
    }
</script>

<style scoped lang='scss'>
    #item-list {
        padding-top: 80px;
        padding-bottom: 80px;
    }   
</style>