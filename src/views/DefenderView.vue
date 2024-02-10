<template>
    <body class="relative">
        <div v-show="isBusy" class="h-full w-full bg-black opacity-75 absolute z-10 items-center justify-center flex">
            <div role="status">
            <svg aria-hidden="true" class="w-8 h-8 text-gray-600 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
        </div>
    <div>
        <div class="pl-8 pr-[60px] py-2 flex justify-between items-center">
            <div class="flex items-center">
                <img class="h-[50px] w-[50px]" src="@/assets/images/bot.png" alt="logo">
                <p class="ml-3 font-normal text-[#1F263E] text-[19px]">ONDC <br> DASHBAORD</p>
            </div>
            <div class="flex items-center">
                <button type="button" class="relative">
                    <img src="@/assets/images/Shape.svg" alt="bell-icon">
                    <p class="bg-[#F56C89] px-2 py-1 rounded-[50%] absolute -top-4 -right-3 text-sm text-white">1</p>
                </button>
                <img src="@/assets/images/Setting.svg" alt="chat" class="ml-7">
                <img class="ml-7" src="@/assets/images/INDIA.svg" alt="logo">
                <button @click="onPressProfileBtn()" type="button" class="ml-7">
                            <img src="@/assets/images/Profile.svg" alt="bell-icon">
                        </button>
                        <ul v-show="showProfileMenu"
                            class="list w-[400px] h-[300px] absolute top-[60px] right-12 rounded-[18px] shadow-xl border border-[#BABABA] p-12 bg-white z-[99]">
                            <RouterLink to="/home">
                                <li class="font-bold text-lg text-[#979797] ">Home</li>
                            </RouterLink>

                            <RouterLink to="/defender">
                                <li class="mt-9 font-bold text-lg  text-[#5D81F3]">ONDC Law Defender</li>
                            </RouterLink>

                            <button type="button" data-te-toggle="modal" data-te-target="#rankingpop"
                            data-te-ripple-init data-te-ripple-color="light" >
                            <li class="mt-9 font-bold text-lg text-[#979797]">Ranking</li>
                            </button><br>

                            <button @click="logoutFun()" >
                            <li class="mt-9 font-bold text-lg text-[#979797]">Logout</li>
                            </button>
                            
                        </ul>
            </div>
        </div>
        <div class="w-full bg-[#d1cccc2e] h-customh2 relative">
            <div class="w-full flex justify-end pr-10">
                <RouterLink to="/home"><h1  class=" underline text-2xl text-gray-600">Back</h1></RouterLink>
            </div>
            <div class="w-[60%] mx-auto pt-[7%]">
                
                <h1 class="font-bold text-[103px] leading-[115px] text-[1F263E] text-center">Become  <span class="login-condition-text">ONDC</span><br>Defender </h1>
                <p class="mt-4 font-medium text-[22px] leading-[26px] text-[#979797] text-center">Earn ONDC points and climb the ranks to become our legal partner</p>
                <div class="mt-[63px] w-full flex items-center">
                    <button @click="navToDatabase()" type="button" class=" py-[26px] w-1/2 text-white mr-8 bg-[#079ADC] rounded-[11px]">
                        <h1 class="font-medium text-xl">Upload the law / Update (+10 pts )</h1>
                    </button>
                    <button @click="navToVerification()" class="py-[26px] w-1/2 text-white bg-[#5D81F3] rounded-[11px]">
                        <h1 class="font-medium text-xl">Verify the submitted Laws ( +1 pt )</h1>
                    </button>
                </div>
                <!-- <div class="mt-[63px]">
                    <p class="font-medium text-[22px] text-[#979797] text-center">If any issue faced, please contact </p>
                    <p class="font-medium text-[22px] text-[#979797] text-center">contact@cydratech.com</p>
                </div> -->
            </div>
            <div class="w-full absolute bottom-10">
                <div class="flex flex-col mx-auto items-center justify-center">
                    <button type="button" data-te-toggle="modal" data-te-target="#rankingpop"
                            data-te-ripple-init data-te-ripple-color="light" >
                            <p  class="font-extrabold text-xl text-[#9A9B9F] text-center"><u>Check Ranking</u></p>
                            </button>
                    
                    <p class="mt-1 font-normal text-xs text-[#9A9B9F] text-center">© Copyright 2024 CYDRA TECH x MASTERGEAR All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div>
</body>
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
             <p class="font-semibold text-[29px] text-center">Ranking will appear once enough users upload Laws/Regulation</p>
             <button type="button" data-te-modal-dismiss aria-label="Close" class="w-[182px] h-[64px] font-semibold text-[29px] leading-[35px] text-white rounded mt-12 mx-auto bg-[#5D81F3] flex justify-center items-center">
                Okay
             </button>
         </div>
         </div>
     </div>
 </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { Modal,Popconfirm,initTE} from "tw-elements";
import {useServerStore} from '@/stores/server';

const server = useServerStore();
const router = useRouter();
const showProfileMenu = ref(false)
const isBusy = ref(false)


onMounted( () => {
    initTE({ Modal,Popconfirm });
})

function onPressProfileBtn() {
    showProfileMenu.value = !showProfileMenu.value
    console.log(showProfileMenu.value)
}
 
function navToDatabase(){
    router.push({name: 'Database'})

}

function logoutFun(){
    server.logout()
    router.push({name: 'Login'})
}

function navToVerification(){
    router.push({name: 'Verification'})
}

</script>