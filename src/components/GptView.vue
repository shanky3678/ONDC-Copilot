<template>
    <h3 class="text-white text-[30px] font-bold mb-5">Hackathon - Build for Bharat</h3>
    <div ref="chatContainer" class="text-white w-full bg-slate-800 px-5 py-2 h-[70vh] overflow-y-scroll" >
      <div v-for="message of messages">
        <p v-html="marked(message)" style="white-space: pre-line;">
        </p>
    </div>
    </div>
    <div class="items-center justify-center flex">
        <textarea v-model="textarea" claname="" id="" placeholder="What would you like to know?" rows="1" class=" mt-5 p-5 bg-slate-800 text-white  w-[100%]" ></textarea>
        <button class="p-2 rounded-sm ml-2 text-white bg-slate-600" @click="sendMessage()">Send</button>
    </div>
</template>

<style scoped>
body{
    background-color: black;
}
.chat-message {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<script setup>

import { onMounted, ref, watch,computed, onUnmounted } from 'vue'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
// import marked from 'marked'

const dummyText = "Hello"
const typed = ref('')
const messages = ref(['Connecting...'])
const markdown = ref()
const textarea = ref('')

const onchangeContent = (text) => {
    textarea.value = text
}

let socket;

onMounted(()=> {
    initialConnection()
})
onUnmounted(() => {
    disconnectSocket()
})
const chatContainer = ref(null);

const autoScrollDown = () => {
    if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
};

watch(messages, autoScrollDown);

function initialConnection(){
socket = new WebSocket('ws://127.0.0.1:8000/gpt');

// Listen for messages from the server
socket.addEventListener('message', (event) => {
    if(messages.value[0] == 'Connecting...'){
        messages.value = []
    }
    messages.value.push(event.data);
});

// Handle socket errors
socket.addEventListener('error', (error) => {
  console.error('WebSocket error:', error);
});
}

function disconnectSocket(){
    socket.removeEventListener('message')
}

const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN && textarea.value != '') {
        messages.value.push(textarea.value)
        socket.send(textarea.value);
        textarea.value = ''
    }
}
</script>