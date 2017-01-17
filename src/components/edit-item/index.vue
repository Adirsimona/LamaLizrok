<template>
    <div>
        <div class="container">
        <div ref="imgContainer" class="camera-container">
            <canvas class="canvas"  height="195"></canvas>
                <a @click="chooseFiles()" class="button is-large"> 
                    <i class="fa fa-camera-retro fa-5x"></i>
                </a>  
            </div>

            <div class="input-container">

                <form ref="editItemForm" action="">
                     <input v-on:change="drawCanvas" ref="inputFile" style="display:none" id="fileUpload" type="file" accept="image/*" capture />
 
                    <v-text-input 
                        name="name" 
                        label="במה מדובר?"
                    ></v-text-input>
                    <label for="">מצב המוצר?</label>
                        <p class="control">
                            <span class="select">
                                <select name="quality">
                                <option>נראה מעולה</option>
                                <option>סבבה סה"כ</option>
                                <option>דרוש תיקון</option>
                                <option >חבל לזרוק לא?</option>
                                </select>
                            </span>
                        </p>
                    <label for=""> קטגוריה?</label>
                        <p class="control">
                            <span class="select">
                                <select name="ctg">
                                    <option v-for="ctg in ctgs" :value="ctg">{{ctg}}</option>
                                </select>
                            </span>
                        </p>
                        <v-text-input 
                            name="desc" 
                            label="משהו נוסף?"
                        ></v-text-input>

                        <div class="map-con">
                            <div id="map"></div>
                        </div>
                        <v-text-input
                            name="nameLoc" 
                            label="איפה?"
                        ></v-text-input>
                    <div class="btns">
                        <a @click="sendItem" class="button is-success">סע!</a>
                        <router-link to="/home"><a  class="button is-danger">בעצם לא</a></router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
//   <label >איפה?</label>
                        // <p class="control">
                        // <input name="nameLoc" class="input" type="text" placeholder="עיר...">
                        // </p>

    export default {
        name : 'edit-item' , 
        data() { 
            return {
                map : null,
                cor : {
                    lat : 0 ,
                    lng : 0
                } 
            } 
        } ,
        methods: {
            chooseFiles: function() {
                document.getElementById("fileUpload").click();
            } ,
            drawCanvas() {
                    var canvas = document.querySelector('.canvas');
                    var ctx = canvas.getContext('2d');
                    var img = new Image();
                    var selectedFile = document.getElementById('fileUpload').files[0];
                    img.src =window.URL.createObjectURL(selectedFile);

                    img.onload = function () {
                        ctx.drawImage(img, 0, 0, 300, 200);
                       }
                },

            sendItem () {
                const file = this.$refs.inputFile.files;
                const editItemForm = this.$refs.editItemForm;
                if (file && file.length) {
                    var formData = new FormData(editItemForm);
                    formData.append('file', file[0], file[0].name);
                    
                    formData.append('cor', JSON.stringify(this.cor));
                    formData.append('createAt', Date.now());
                    console.log('formData :'  , formData);
                    this.$http.post('http://localhost:3003/data/item', formData)
                        .then(res => res.json())
                        .then(data => console.log(data))

            } else {
                    console.log("You have not added an image!", "Try again...");
                }
            }
         } ,
         created () {
            navigator.geolocation.getCurrentPosition(pos => {
                    this.cor.lat = pos.coords.latitude;
                    this.cor.lng = pos.coords.longitude;
           });
          } ,
          computed: {
            ctgs() {
                return this.$store.state.ctgs;
            }
          } , 
          mounted () {

            // get user position and add marker to map
            navigator.geolocation.getCurrentPosition(pos => {
                L.mapbox.accessToken = 'pk.eyJ1IjoiYWRpcnNpbW9uYSIsImEiOiJjaXNieDd5bjUwMDB6MnRxZmYwYmp0ZXlkIn0.EVRohsa3TB2JcabmAQPZ9A';
                // create map
                this.map = L.mapbox.map('map','mapbox.street', {
                        center: [pos.coords.latitude, pos.coords.longitude],
                        zoom: 15 ,
                        zoomControl : false ,
                        attributionControl : false
                });
                var styleLayer = L.mapbox.styleLayer('mapbox://styles/adirsimona/cisce3vxz00242xpewuqf5jz9').addTo(this.map);
                    L.marker([ pos.coords.latitude , pos.coords.longitude ], {
                        icon: L.mapbox.marker.icon({
                        'marker-size': 'large',
                        'marker-symbol': 'marker',
                        'marker-color': '#f14'
                        })
                    }).addTo(this.map);   
                });
          }
         }
        

</script>

<style scoped lang='scss'>
    .camera-container {
        position: relative;
        height: 195px; 
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 20px;

        .is-large {
            border-radius: 50%;
            position: absolute;
            opacity: 0.6;
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
    form {
        position: relative;
        width: 100%;
        text-align: center; 
     }
    }
     #map { position:absolute; top:0; bottom:0; width:100%; }
     .map-con {
         position: relative;
         width : 100%;
         height : 200px;
         margin-bottom: 10px;
     }
     .control {
        text-align: center;
     }


</style>
