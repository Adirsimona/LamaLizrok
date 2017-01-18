<template>
    <div class="filter-header">
        <p class="control">
            <span class="select">
                <select :value="currFilter" v-on:change="updateFilter($event.target.value)" >
                    <option value="all">בחר קטגוריה</option>
                    <option v-for="ctg in ctgs" :value="ctg">{{ctg}}</option>
                </select>
            </span>
        </p>
    </div>
</template>

<script>
    export default {
        name : 'filter-header' , 
        data() { 
            return {

            }
        } ,
        methods: {
            updateFilter(filterCtg) {
                this.$store.commit('updateFilter' , filterCtg);
            }
        } ,
        computed : {
            ctgs() {
                return this.$store.state.ctgs;
            } ,
            currFilter() {
                return this.$store.state.currFilter;
            }
        },
        created () {
            this.updateFilter(this.currFilter);
        } 
    }
</script>

<style scoped lang='scss'>
    .filter-header {
        position: fixed;
        width: 100%;
        background: #3A3636;
        height: 11%;
        top: 0;
        opacity: 0.87;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    select {
        width: 44vh;
        background-color: #bfb7b7;
        direction: rtl;
        color: white;
        font-weight: 600;
        font-size: 1.1em;
    }
</style>