<template>
    <div>
        <div v-if="item" class="card"> 
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
                    <a @click="goBack" class="button is-dark">
                        <span class="icon is-small">
                        <i class="fa fa-arrow-left"></i>
                        </span>
                    </a>
                    <p class="title is-4">{{item.name}}</p>
                    <a @click="goToWaze(item.cor.lat , item.cor.lng)"><img class="waze" src="./waze-icon.png" alt="waze"></a>
                </div>

                <!-- description -->
            <div class="content">
                <p>{{item.desc}}</p> 
                <br>
                    <div class="flex">
                        <small>{{time}}</small>
                        <small>{{item.nameLoc}}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// waze://?ll=37.331689,-122.030731&navigate=yes
    export default {
        name : 'item-details' , 
        data() { 
            return {
             item : null ,
             time : null
            }
        } ,
        methods: {
            goBack() {
                this.$router.go(-1);
            } ,
            goToWaze(lat , lng) {
                window.location.assign(`waze://?ll=${lat},${lng}&navigate=yes`);
            }
        } ,
 
        created() {
            let itemId = this.$route.params.itemId;
            this.$store.dispatch('getItemById' , itemId ).then(item => {
                this.item = item;          
                let d =  Date(this.item.createAt).toString();
                this.time = d.slice(0, 15); 
            });
            


        }
    }
</script>

<style scoped lang='scss'>
.content p {
    margin : 0;
}
.waze {
    position: relative;
    width: 40px;
    height: 40px;
}

.media-content {
    display : flex;
    justify-content: space-between;
}
 .card {
    height: 100vh;
 }
 .title {
         text-align: center;
 }
 .content {
    color: #4a4a4a;
    text-align: right;
    margin-top: 39px;
}
.flex {
    display: flex;
    justify-content: space-between;
}
.image {
    display: block;
    position: relative;
        height: 100%;
}
.image.is-4by3 {
padding-top: 0;
}
.card-image {
    display: block;
    position: relative;
    height: 60%;
}
</style>