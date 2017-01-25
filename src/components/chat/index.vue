<template>
  <div class="chat">
    
        <ul ref="mainCon" class="messages">
            <li class="other" v-for="chatMsg in chatMsgs">
                <div class="msg">
                    <div class="user">{{chatMsg.nickName}}:</div>
                    <p>{{chatMsg.msg}}</p>
                    <time>{{chatMsg.time}}</time>
                </div>
            </li>
        </ul>
 
    <form>
      <input v-model="chatMsg.msg" />
      <button v-show="chatMsg.msg.length !== 0" @click.prevent="sendMsg" class="send"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
      <button v-show="chatMsg.msg.length === 0" 
                    @click.prevent @touchstart="captStart" 
                    @touchend="captStop" @mousedown="captStart"
                    @mouseup.prevent="captStop"
                    class="send">
                    <i class="fa fa-microphone pulse infinite"    :class="{ animated : isRec }" aria-hidden="true"></i>
    </button>
    </form>
  </div>
</template>
<script>
    import io from 'socket.io-client';
    export default {
        name: 'chat',
        data() {
            return {
                socket: null,
                chatMsgs: [],
                chatMsg: {
                    nickName: 'Guest',
                    msg: '',
                    time: ''
                },
                recognition: null,
                isRec: false,
                txt2speech: ''
            }
        },
        methods: {
            sendMsg() {
                // Captures an empty string and denies it.
                if (this.chatMsg.msg === '') return;
                let date = new Date();
                this.chatMsg.time = date.toUTCString();
                console.log('Sending: ', this.chatMsg);
                this.socket.emit('chat newMessage', this.chatMsg);
                this.chatMsg.msg = '';
            },
            captStart() {
                if (!this.isRec) {
                    this.recognition.start();
                    console.log('Starting voice capture service.');
                }
               
            },
            captStop() {
                this.isRec = false;
                this.recognition.stop();
                console.log('Stopping voice capture service.');
            }
        },
        mounted() {
            if (!('webkitSpeechRecognition' in window)) {
                console.log('This browser doesn\'t support the Speech Recognition webkit.');
            } else {
                this.recognition = new webkitSpeechRecognition();
                // this.recognition.continuous = true;
                this.recognition.lang = 'en-US';
                this.recognition.interimResults = true;
                this.recognition.onstart = () => {
                    this.isRec = true;
                }
                this.recognition.onresult = (event) => {
                    let allText = '';
                    console.log(event.results);
                    for (let currRes in event.results) {
                        const res = event.results[currRes][0];
                        if (res) {
                            allText += ' ' + res.transcript;
                        }
                    }
                    this.txt2speech = allText;
                    //now you can show the results
                }
                this.recognition.onerror = (event) => {
                    this.isRec = false;
                }
                this.recognition.onend = () => {
                    this.chatMsg.msg += this.txt2speech;
                    if (this.isRec) this.recognition.start();
                }
            }
        },
        created() { 
            this.socket = io.connect('https://lamalizrok.herokuapp.com/')
            this.socket.on('chat message', chatMsg => {
                this.chatMsgs.push(chatMsg);
                setTimeout(() => {
                    this.$refs.mainCon.scrollTop = this.$refs.mainCon.scrollHeight;
                }, 0);
            })
            const nickName = prompt('What nickname would you like to use?');
            // const nickName = 'Puki Ben Moshe';
            this.chatMsg.nickName = nickName || this.chatMsg.nickName
        }
    }
</script>
<style scoped>
    form {
        background: #f0e5e5;
        padding: 3px;
        position: fixed;
        bottom: 67px;
        width: 100%;
        display: flex;
            box-shadow: 1px -1px 8px 1px;
    }
    
    form input {
        border: 0;
        border-radius: 8px;
        padding: 10px;
        width: 80%;
        margin-right: 2.5%;
        margin-left: 1%;
        background-color: white;
            box-shadow: inset 0px 0px 5px 3px;
    }
    
    form button {
        width: 7%;
        position: relative;
        background: #41b883;
        border: none;
        padding: 4px;
        font-size: 1.8em
    }
    
    .messages {
        list-style-type: none;
        max-height: 100%;
        overflow-y: scroll;
        margin: 0;
        padding: 0;
        text-align: start;
    }
    /*.messages li {
        padding: 5px 10px;
    }*/
    /*.messages li:nth-child(odd) {
        background: seagreen;
    }
    
    .messages li:nth-child(even) {
        background: #41b883;
    }*/
    
    .send {
        background: #008a7c;
        border-radius: 50%;
        color: #fff;
        position: relative;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .animated {
        animation-duration: 1s;
        animation-fill-mode: both;
        }

        .animated.infinite {
           animation-iteration-count: infinite;
        }
    @keyframes pulse {
        from {
            transform: scale3d(1, 1, 1);
        }

        50% {
            transform: scale3d(1.30, 1.30, 1.30);
        }

        to {
            transform: scale3d(1, 1, 1);
        }
        }

        .pulse {
        animation-name: pulse;
        }
</style>