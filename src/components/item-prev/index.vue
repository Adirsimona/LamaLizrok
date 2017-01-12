<template>
    <div id="item-prev">

            <div class="card">
                <!-- Img Item -->
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image">
                    </figure>
                </div>
                <!-- Content -->
             <div class="card-content">
                    <!-- details -->
                    <div class="media-content">
                        <p class="title is-4">{{item.name_hebrow}}</p>
                        <p class="subtitle is-6"></p>
                    </div>

                    <!-- description -->
                <div class="content">
                    <p>{{item.desc}}</p>
                    <br>
                    <small>11:09 PM - 1 Jan 2016</small>
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
    export default {
        name : 'item-prev' , 
        props : {
            item : Object
        } ,
        data() { 
            return {
             
            }
        }
    }
</script>

<style scoped lang='scss'>
    .card {
        background-color: white;
        box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
        color: #4a4a4a;
        max-width: 75%;
        position: relative;
        margin: 20px auto 20px auto;
        border-radius: 15px;
        direction: rtl;
    }
    .media-content {
      text-align: center;
    }
</style>