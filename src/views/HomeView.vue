

<template>
   
    <div class="w-full bg-white flex relative">
        <div v-show="isBusy"  class="h-full w-full bg-black opacity-75 absolute z-10 items-center justify-center flex">
            <div role="status">
            <svg aria-hidden="true" class="w-8 h-8 text-gray-600 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
        </div>
        <div class="min-w-[20%] max-w-[20%] w-[20%] h-auto bg-[#0D3357] px-5 pt-10 pb-10">
            <img src="@/assets/images/logo.svg" alt="logo" class="mx-auto border-b border-[#D8D8D8]">
            <h1 class="mt-10 font-normal text-[22px] leading-[25px] text-white">Check the compliance's for your products
            </h1>
            <div class="mt-6">
                <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->

                <!-- <div class="relative mt-10" data-te-dropdown-ref>
                    <button
                        class="flex justify-between items-center py-4 whitespace-nowrap border-2 border-[#38AC0FF] rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                        type="button" id="dropdownMenuButton2" style="width: -webkit-fill-available;"
                        data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init data-te-ripple-color="light">
                        Choose your state
                        <span class="ml-2 w-2">
                            <img src="@/assets/images/down-arrow.svg" alt="">

                        </span>
                    </button>
                    <ul class="absolute z-[1000] h-[200px] overflow-auto sidebar p-3 float-left m-0 hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                        aria-labelledby="dropdownMenuButton2" style="width: -webkit-fill-available;"
                        data-te-dropdown-menu-ref>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#" data-te-dropdown-item-ref>kerala</a>
                        </li>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#" data-te-dropdown-item-ref>Karnataka</a>
                        </li>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#" data-te-dropdown-item-ref>tamilnadu</a>
                        </li>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#" data-te-dropdown-item-ref>kerala</a>
                        </li>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#" data-te-dropdown-item-ref>Karnataka</a>
                        </li>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#" data-te-dropdown-item-ref>tamilnadu</a>
                        </li>
                    </ul>
                </div> -->

                <div class="relative mt-10" data-te-dropdown-ref>
                    <button
                        class="flex justify-between items-center py-4 whitespace-nowrap border-2 border-[#38AC0FF] rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                        type="button" id="dropdownMenuButton3" style="width: -webkit-fill-available;"
                        data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init data-te-ripple-color="light">
                        {{ selectedCategory }}
                        <span class="ml-2 w-2">
                            <img src="@/assets/images/down-arrow.svg" alt="">
                        </span>
                    </button>
                    <ul class="absolute z-[1000] h-[120px] sidebar p-3 float-left m-0 hidden min-w-max list-none overflow-auto rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                        aria-labelledby="dropdownMenuButton3" style="width: -webkit-fill-available;"
                        data-te-dropdown-menu-ref>
                        <li v-for="(category, index) in categories" :key="index">
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#" @click="selectCategory(category)" data-te-dropdown-item-ref>{{ category }}</a>
                        </li>
                    </ul>
                </div>
                <div class="mt-10">
                    <input type="text" id="1" v-model="state"
                        class="h-[51px] p-4 w-full outline-0 rounded-[5px] border-2 border-[#8AC0FF] placeholder:font-medium placeholder:text-sm placeholder:text-[#5d5c5c]"
                        placeholder="Enter the State">
                </div>

                <div class="mt-10">
                    <input type="text" id="2" v-model="productName"
                        class="h-[51px] p-4 w-full outline-0 rounded-[5px] border-2 border-[#8AC0FF] placeholder:font-medium placeholder:text-sm placeholder:text-[#5d5c5c]"
                        placeholder="Enter the Product">
                </div>

                <div class="mt-10 mb-7">
                    <!-- <textarea
                        class="p-4 h-[110px] outline-0 border-2 border-[#8AC0FF] rounded-[5px] w-full placeholder:font-medium placeholder:text-sm placeholder:text-[#979797]"
                        placeholder="Other Specific Details Related to Products "></textarea> -->
                </div>
                <div class="flex justify-center w-full mx-auto">
                    <button type="button" class="bg-[#5D81F3] w-full rounded px-[65px] py-2.5">
                        <h1 class="text-white text-xs font-normal">SUBMIT</h1>
                    </button>
                </div>
                <div class="mt-8">
                    <!-- <div class="flex items-center">
                        <img src="@/assets/images/enlarge.svg" alt="FAQ">
                        <p class="font-medium text-lg text-white pl-[19px]">Updates & FAQ</p>
                    </div> -->
                    <button @click="logoutFun()" >
                    <div  class="mt-8 flex items-center">
                        <img src="@/assets/images/logout.svg" alt="FAQ">
                        <p class="font-medium text-lg text-white pl-[19px]">Log out</p>

                    </div>
                </button>
                </div>
            </div>
        </div>
        <div class="min-w-[80%] w-[80%]">
            <div class="h-[70px] w-full bg-white flex justify-between items-center pl-[30px] py-3 pr-[60px]">
                <button type="button" class="relative">
                    <img src="@/assets/images/Shape.svg" alt="bell-icon">
                    <p class="bg-[#F56C89] px-2 py-1 rounded-[50%] absolute -top-4 -right-3 text-sm text-white">1</p>
                </button>
                <div class="flex items-center">
                    <button>
                        <img src="@/assets/images/Setting.svg" alt="bell-icon">
                    </button>
                    <div class="ml-7 error">
                        <img src="@/assets/images/INDIA.svg" alt="bell-icon">
                    </div>
                    <div class="ml-7 profile">
                        <button @click="onPressProfileBtn()" type="button">
                            <img src="@/assets/images/Profile.svg" alt="bell-icon">
                        </button>
                        <ul v-show="showProfileMenu"
                            class="list w-[400px] h-[300px] absolute top-[60px] right-12 rounded-[18px] shadow-xl border border-[#BABABA] p-12 bg-white z-[99]">
                            <RouterLink to="/home">
                                <li class="font-bold text-lg text-[#5D81F3] ">Home</li>
                            </RouterLink>
                            <RouterLink to="/defender">
                                <li class="mt-9 font-bold text-lg text-[#979797]  ">ONDC Law Defender</li>
                            </RouterLink>
                            <button type="button" data-te-toggle="modal" data-te-target="#rankingpop" data-te-ripple-init
                                data-te-ripple-color="light">
                                <li class="mt-9 font-bold text-lg text-[#979797]">Ranking</li>
                            </button>
                            <br>

                            <button @click="logoutFun()" >
                            <li class="mt-9 font-bold text-lg text-[#979797]">Logout</li>
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bg-[#d1cccc2e] pl-7 pr-[35px] pb-7 pt-[40px]">
                <div ref="chatContainer" class="overflow-auto h-customh1 gray-scroll pt-[42px] pr-[15px]">

                    <RouterLink
                    to="/defender"
                    >
                    <img src="@/assets/images/bannerNew.png" alt="chat-bot" class=""></RouterLink>

                    <div class="mt-[22px] rounded-[5px] bg-white px-[46px] py-10">

                        <div v-for="(message, index) in messages" :key="index">
                            <div  v-if="message.bot" class="flex items-start ">
                                <img class="h-[30px] w-[30px]" src="@/assets/images/bot.png" alt="chat">
                                <div class="flex items-start ml-[14px]">
                                    <p v-html="marked(message.bot)" class="font-medium text-base text-[#1F263E] w-full"></p>
                                    <!-- <div class="flex items-center ml-6">
                                    <img src="@/assets/images/like.svg" alt="like" class="cursor-pointer">
                                    <img src="@/assets/images/dislike.svg" alt="dislike" class="ml-5 cursor-pointer">
                                     </div> -->
                                </div>
                            </div>
                            <div v-else class="flex mt-[30px] mb-5 items-start">
                                <img class="h-[30px] w-[30px]" src="@/assets/images/userPro.png" alt="chat">
                                <div class=" flex items-start ml-[18px]">
                                    <p class="font-medium text-base text-[#002AB1]">{{ message.user }}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div v-show="messageLoading" class="flex items-center ">
                                <img class="h-[30px] w-[30px]" src="@/assets/images/bot.png" alt="chat">
                                <div class="flex items-start ml-[14px]">
                                    <p  class="font-medium text-base text-[#1F263E] w-full">Loading...</p>
                                    
                                </div>
                      </div>

                    </div>
                </div>
                <div class="mt-[18px] relative">
                    <input @keydown.enter="sendMessage()" v-model="textarea" placeholder="What would you like to know?"
                        type="text" class="w-full border border-[#D1CCCC] outline-0 py-5 pl-5 pr-14 rounded-[6px]">
                    <img @click="sendMessage()" src="@/assets/images/send.svg" alt="send"
                        class="absolute right-6 top-[21px] cursor-pointer">
                </div>
                <div class="mt-2">
                    <p class="font-normal text-[#b49898] text-md text-center">Kindly wait a minute for the system to generate a response as this is an MVP</p>
                </div>
            </div>
        </div>
    </div>
    <div data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="rankingpop" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div data-te-modal-dialog-ref
            class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-[580px] translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[600px]">
            <div
                class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 px-16 py-[60px]">
                <button type="button"
                    class=" absolute top-4 right-5 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    data-te-modal-dismiss aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!--Modal body-->
                <div class="relative w-full">
                    <p class="font-semibold text-[29px] text-center">Ranking will appear once enough users upload
                        Laws/Regulation</p>
                    <button type="button" data-te-modal-dismiss aria-label="Close"
                        class="w-[182px] h-[64px] font-semibold text-[29px] leading-[35px] text-white rounded mt-12 mx-auto bg-[#5D81F3] flex justify-center items-center">
                        Okay
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'

import '@/assets/js/lib/jquery-3.2.1.min.js';
import '@/assets/js/lib/tw-elements/dist/js/index.min.js'
import { Tooltip, initTE, Dropdown } from "tw-elements";
import * as constant from '@/shared/constant'
import { useServerStore } from '@/stores/server'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import router from '@/router';


const server = useServerStore()
const showProfileMenu = ref(false)
const state = ref('')
const selectedCategory = ref('Choose Your Category')
const messageLoading = ref(false)
const isBusy = ref(false)
const productName = ref('')

const messages = ref(
    [
        {'bot':'Connecting...'}
    ]
)
const textarea = ref('What are the rules and regulations to sell this online?')

let socket;

onMounted(() => {
    initTE({ Tooltip, Dropdown });
    initialConnection()
    sendMessage()
});

onUnmounted(() => {
    disconnectSocket()
})

let messageListener = (event) => {
    if(messages.value[0].bot.includes('Connecting...')){
        messages.value = []
    }
    messages.value.push({
        'bot': event.data
    });
    messageLoading.value = false
    autoScrollDown()
   
};

let errorListener = (error) => {
    console.error('WebSocket error:', error);
}

function initialConnection() {
    socket = new WebSocket(`${constant.socketEndpoint}/gpt`);

    // Listen for messages from the server
    socket.addEventListener('message', messageListener);

    // Handle socket errors
    socket.addEventListener('error', errorListener);
}

function disconnectSocket() {
    socket.removeEventListener('message', messageListener)
    socket.removeEventListener('error', errorListener)
    socket.close();
}

function onPressProfileBtn() {
    showProfileMenu.value = !showProfileMenu.value

}

const categories = ['None', 'Fashion', 'Food & beverage', 'Electronic', 'Agriculture'];

const selectCategory = (category) => {
    selectedCategory.value = category;
}


const chatContainer = ref(null);

const autoScrollDown = () => {
    if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
};

const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN && textarea.value != '') {
        messageLoading.value = true
        let values = JSON.stringify({
            "question": textarea.value,
            "state": state.value,
            "category": !["Choose Your Category", "None"].includes(selectedCategory.value) ? selectedCategory.value : "",
            "product name": productName.value
        })
        messages.value.push({ 'user': textarea.value })
        socket.send(values);
        textarea.value = ''
        setTimeout(()=>{
            autoScrollDown()
        }, 500)
    }
}

function logoutFun() {
    let response = server.logout();
    if (response)
        router.push({
            name: 'Login'
        })
}

</script>