<template>
    <div id="footer">
        <div class="footer-cell">
           <router-link to="/home"><a class="button is-dark"><i class="fa fa-comments-o" aria-hidden="true"></i></a></router-link>
        </div>
        <div class="footer-cell" @click="isAddMode = !isAddMode">
           <router-link v-if="!isAddMode" to="/additem"><a class="button is-dark"><i class="fa fa-plus" aria-hidden="true"></i></a></router-link>
           <router-link v-else to="/home"><a class="button is-dark"><i class="fa fa-undo" aria-hidden="true"></i></a></router-link>
        </div>
        <div class="footer-cell" @click="isMapMode = !isMapMode">
            <a v-if="isMapMode" @click="switchDisplay('item-list-map')" class="button is-dark"><i class="fa fa-list" aria-hidden="true"></i></a>
            <a v-else @click="switchDisplay('item-list')" class="button is-dark"><i class="fa fa-map" aria-hidden="true"></i></a>
        </div>
    </div>
</template>

<script>

    export default {
        name : 'footer' ,
        data() { 
            return {
             isAddMode : false ,
             isMapMode : true , 
            }
        } ,
        methods : {
            switchDisplay (str) {
                this.$store.commit('switchDisplay' , str);
            }
        }
    }
</script>

<style scoped lang='scss'>
    #footer {
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #1c1818;
        opacity: 0.87;
        height: 11%;
    }

    .footer-cell {
        position: relative;
        height: 100%;
        width: 33.999999%;
        display: flex;
        justify-content: center;
        align-items: center; 
    }
    a:hover, a:focus {
    text-decoration: none;
    }
</style>