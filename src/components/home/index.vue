<template>
    <div class="home">
         <filter-header></filter-header>
        <item-list-map></item-list-map>
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
            filterHeader ,itemListMap , itemList
        } 
    }
</script>

<style scoped lang='scss'>

</style>