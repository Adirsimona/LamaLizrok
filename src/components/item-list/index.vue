<template>
    <div class="item-list">
        <filter-header></filter-header>
        <transition-group name="flip-list">
            <item-preview v-for="item in filterItems" :item="item" :key="item.name"></item-preview>
        </transition-group>

    </div>
</template>

<script>
import itemPreview from '../item-preview';
import filterHeader from '../filter-header';
    export default {
        name : 'item-list' , 
        data() { 
            return {
             
            }
        } ,
        components : {
            itemPreview , filterHeader
        } ,
        computed: {
            filterItems() {
                return this.$store.getters.filterItems;
            } 
        } ,
        created () {
            this.$store.dispatch('getItems');
        }
    }
</script>




<style scoped lang='scss'>
    .item-list {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .flip-list-move  {
        transition: transform 1s;
    }
</style>