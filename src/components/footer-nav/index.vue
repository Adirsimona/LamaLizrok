<template>
    <div class="footer-nav">
       <!-- chat -->
        <div class="footer-cell" @click="isMapMode = false">
           <router-link to="/chat"><a class="button is-dark"><i class="fa fa-comments-o" aria-hidden="true"></i></a></router-link>
        </div>
         <!-- add section -->
        <div class="footer-cell" @click="isMapMode = false">
           <router-link to="/edititem"><a class="button is-dark"><i class="fa fa-plus" aria-hidden="true"></i></a></router-link>
        </div>
         <!-- map / list -->
        <div class="footer-cell" @click="isMapMode = !isMapMode">
                <router-link v-if="isMapMode" to="/item-list"><a class="button is-dark"><i class="fa fa-list" aria-hidden="true"></i></a></router-link>
                <router-link v-else to="/list-map"><a class="button is-dark"><i class="fa fa-map" aria-hidden="true"></i></a></router-link>
        </div>
    </div>
</template>

<script>
        //    <a v-if="isMapMode" class="button is-dark"><i class="fa fa-list" aria-hidden="true"></i></a>
        //     <a v-else  class="button is-dark"><i class="fa fa-map" aria-hidden="true"></i></a>
            // <a v-if="isMapMode" @click="switchDisplay('item-list-map')" class="button is-dark"><i class="fa fa-list" aria-hidden="true"></i></a>
            // <a v-else @click="switchDisplay('item-list')" class="button is-dark"><i class="fa fa-map" aria-hidden="true"></i></a>
        //     <router-link v-if="isMapMode" to="/list"><a class="button is-dark"><i class="fa fa-list" aria-hidden="true"></i></a></router-link>
        //    <router-link v-else to="/home"><a class="button is-dark"><i class="fa fa-map" aria-hidden="true"></i></a></router-link>
    export default {
        name : 'footer-nav' ,
        data() { 
            return {
            isMapMode : true ,
            }
        } ,
        methods : {
            switchDisplay () {
                this.$store.commit('switchDisplay');
            } 
        } ,
        computed: {
            // isMapMode() {
            //     return this.$store.state.isMapMode;
            // }
        }
    }
</script>

<style scoped lang='scss'>
    .footer-nav {
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
        background-color: whitesmoke;
    }
     .fa:hover, .fa:focus {
        color : #292929;
    }
    .button.is-dark:hover {
        background-color: whitesmoke;
    }
</style>