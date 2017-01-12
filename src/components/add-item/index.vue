<template>
    <div id="add-item">
        <div class="container">

            <div ref="imgContainer" class="camera-container">
          <!--  <canvas ref="canvas" width="200" height="100" style="border:1px solid #000000;"></canvas> -->
                <input ref="inputImg" style="display:none" id="fileUpload" type="file" accept="image/*" capture />
                <a @click="chooseFiles()" class="button is-large"> 
                    <i class="fa fa-camera-retro fa-5x"></i>
                </a> 
            </div>

            <div class="input-container">
                 <label >במה מדובר?</label>
                    <p class="control">
                    <input v-model="item.name_hebrow" class="input" type="text" placeholder="מוצר...">
                    </p>
                 <label >איפה?</label>
                    <p class="control">
                    <input v-model="item.location.name_loc" class="input" type="text" placeholder="מיקום...">
                    </p>
                <label for="">מצב המוצר?</label>
                    <p class="control">
                        <span class="select">
                            <select v-model="item.quality">
                            <option>נראה מעולה</option>
                            <option>סבבה סה"כ</option>
                            <option>דרוש תיקון</option>
                            <option >חבל לזרוק לא?</option>
                            </select>
                        </span>
                    </p>

                <label >משהו נוסף?</label>
                <p class="control">
                <input v-model="item.desc" class="input" type="text" placeholder="ספר לנו עוד קצת...">
                </p> 
                 <div class="btns">
                    <a @click="sendItem" class="button is-success">סע!</a>
                    <a  class="button is-danger">בעצם לא</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'add-item' , 
        data() { 
            return {
            item :  {
                    name : "",
                    name_hebrow : "",
                    img_url : "",
                    quality : "",
                    location : {
                        name_loc : "",
                        lat : "",
                        lon : ""
                    },
                    category : [],
                    date : "",
                    desc : ""
                }
            } 
        } ,
        methods: {
            chooseFiles: function() {
                document.getElementById("fileUpload").click();
            } ,
            sendItem() {
                this.$store.dispatch('sendItem' , this.item);
            }
         }
        } 
</script>

<style scoped lang='scss'>
    .camera-container {
        position: relative;
        height: 195px; 
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid;
        border-radius: 5px;

        .is-large {
            border-radius: 50%;
        }
    } 
    .input-container{
        direction: rtl;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 100px;
    
    .btns {
            margin-top: 15px;
    }
    }
</style>