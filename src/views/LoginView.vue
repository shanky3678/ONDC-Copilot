<template>
    <body class="flex flex-col justify-center items-center h-screen">
       <div v-show="isBusy" class="h-full w-full bg-black opacity-75 absolute z-10 items-center justify-center flex">
            <div role="status">
            <svg aria-hidden="true" class="w-8 h-8 text-gray-600 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
      </div>
    <div class="w-[40%] h-[300px] mx-auto bg-gray-300 border border-[#DFDFDF] shadow-lg rounded shadow-[#DFDFDF] my-[70px] pt-[70px] px-[55px] pb-6">
        <h1 class="font-bold font- text-[29px] leading-[20px] text-gray-600  ">Login with your Google account</h1>
        <!-- <h1 class="mt-3.5 text-[#545454] font-normal text-[14px] leading-[14px] font-IBM">Only one of the option to go</h1> -->
        <!-- <div class="mt-10">
            <div class="w-full">
                <label for=""></label>
                <input type="text" class="w-full text-base font-medium text-[#0C0C0C] border-[#E6E6E6] outline-0 rounded-[5px] focus:border-[#8AC0FF] border py-5 px-[18px] placeholder:text-[#4F4F4F] placeholder:font-normal placeholder:text-base" placeholder="Email">
            </div>
            <div class="mt-5 w-full">
                <label for=""></label>
                <input type="text" class="w-full text-base font-medium text-[#0C0C0C] border-[#E6E6E6] outline-0 rounded-[5px] focus:border-[#8AC0FF] border py-5 px-[18px] placeholder:text-[#4F4F4F] placeholder:font-normal placeholder:text-base" placeholder="Password">
            </div>
        </div>
         <div class="mt-10 flex justify-center w-[60%] mx-auto">
            <button type="button" class="bg-[#5D81F3] rounded px-[65px] py-4"><h1 class="text-white text-base font-normal">Log in</h1></button>
        </div> 
        <p class="mt-8 text-[#4F4F4F] font-medium text-base">Continue with</p> -->
        <div class="mt-[60px] w-full flex items-center">
            <button @click="login()" class="w-full bg-[#F7F7F7] rounded py-3 mr-2.5">
                <img src="@/assets/images/google.svg" alt="google.svg" class="mx-auto w-12 h-12">
            </button>
            <!-- <button class="w-1/3 bg-[#F7F7F7] rounded py-3 mr-2.5">
                <img src="@/assets/images/facebook-meta.svg" alt="google.svg" class="mx-auto w-12 h-12">
            </button>
            <button class="w-1/3 bg-[#F7F7F7] rounded py-3">
                <img src="@/assets/images/apple.svg" alt="google.svg" class="mx-auto w-12 h-12">
            </button> -->
        </div>
       
    </div>
</body>
 

</template>

<style>
@import '@/assets/css/output.css';
</style>

<script setup>
import { onMounted,ref } from 'vue';
import { useRouter } from 'vue-router';

import {useServerStore} from '@/stores/server'

const useServer = useServerStore()
const router = useRouter()
const isBusy = ref(false)

onMounted( async () => {
    let response = await useServer.checkIfAccessTokenIsExistAndValid()
    if(response){
        router.push({ name: 'Home' });
    }
})

async function login(){
    let resposne = await useServer.login()
    window.open(resposne['url'], '_self');
}




</script>