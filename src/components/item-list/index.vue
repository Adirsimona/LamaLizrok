<template>
    <div class="item-list">
        <transition-group name="flip-list">
            <item-preview v-for="item in items" :item="item" :key="item.name"></item-preview>
        </transition-group>
    </div>
</template>

<script>
    import itemPreview from '../item-preview';
    export default {
        name : 'item-list' , 
        data() { 
            return {
             
            }
        } ,
        components : {
            itemPreview
        } ,
        computed: {
            items() {
                return this.$store.getters.filterItems;
            }
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