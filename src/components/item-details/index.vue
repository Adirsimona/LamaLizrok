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
                        <small>{{time}}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'item-details' , 
        data() { 
            return {
             
            }
        }
    }
</script>

<style scoped lang='scss'>

</style>