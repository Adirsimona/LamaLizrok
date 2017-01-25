<template>
    <div>
        <div class="card">
            <!-- Img Item -->
            <div class="card-image">
                <figure class="image is-4by3">
                <img :src="item.imgUrl" alt="Image">
                </figure> 
            </div>
            <!-- Content -->
            <div class="card-content">
                <!-- details -->
                <div class="media-content">
                    <p class="title is-4">{{item.name}}</p>
                    <p class="subtitle is-6"></p>
                </div>

                <!-- description -->
            <div class="content">
                <p>{{item.desc}}</p> 
                <br>
                    <div class="flex">
                        <small>{{item.nameLoc}}</small>
                          <a @click="showItem" class="button is-info">פרטים</a>
                        <small>{{time}}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'item-preview' , 
        props : {
            item : Object 
        } ,
        data() { 
            return {
             time : ''
            }
        } ,
        mounted () {
            let d =  Date(this.item.createAt).toString();
            this.time = d.slice(0, 15);  

        } ,
        methods: {
            showItem() {
                window.eventBus.$emit('nav', this.item._id);
            }
        }
    }
</script>

<style scoped lang='scss'>
    .card {
        background-color: #e7d3d3;
        color: #665656;
        max-width: 75%;
        position: relative;
        margin: 20px auto 20px auto;
        border-radius: 10px;
        direction: rtl;
        box-shadow: 1px -1px 10px 1px;
    }
    .media-content {
      text-align: center;
    }
    .flex {
        display : flex;
        justify-content: space-between;
    }
    .title is-4{
        font-size: 1.7rem;
        font-weight: 500;
    }
    .card-content {
    padding: 1rem;
    font-family: 'Secular One', sans-serif;
}
</style>