<template>
    <div id="home">
        <filter-header></filter-header>
        <component :is="currComp"></component>
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

            }
        } ,
        components: {
            filterHeader ,itemListMap ,itemList
        } ,
        computed : {
            currComp() {
               return this.$store.state.mapOrList;
            }
        }

    }
</script>

<style scoped lang='scss'>

</style>