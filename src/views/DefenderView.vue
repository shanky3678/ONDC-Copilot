<template>
    <body>
    <div>
        <div class="pl-8 pr-[60px] py-2 flex justify-between items-center">
            <div class="flex items-center">
                <img src="@/assets/images/government-of-india.svg" alt="logo">
                <p class="ml-3 font-normal text-[#1F263E] text-[19px]">ONDC <br> DASHBAORD</p>
            </div>
            <div class="flex items-center">
                <button type="button" class="relative">
                    <img src="@/assets/images/Shape.svg" alt="bell-icon">
                    <p class="bg-[#F56C89] px-2 py-1 rounded-[50%] absolute -top-4 -right-3 text-sm text-white">1</p>
                </button>
                <img src="@/assets/images/Setting.svg" alt="chat" class="ml-7">
                <img src="@/assets/images/INDIA.svg" alt="chat" class="ml-7">
                <button @click="onPressProfileBtn()" type="button" class="ml-7">
                            <img src="@/assets/images/Profile.svg" alt="bell-icon">
                        </button>
                        <ul v-show="showProfileMenu"
                            class="list w-[400px] h-[300px] absolute top-[60px] right-12 rounded-[18px] shadow-xl border border-[#BABABA] p-12 bg-white z-[99]">
                            <RouterLink to="/home">
                                <li class="font-bold text-lg text-[#979797] ">Home</li>
                            </RouterLink>
                            <RouterLink to="/defender">
                                <li class="mt-9 font-bold text-lg  text-[#5D81F3]">Defender</li>
                            </RouterLink>
                            <button type="button" data-te-toggle="modal" data-te-target="#rankingpop"
                            data-te-ripple-init data-te-ripple-color="light" >
                    <li class="mt-9 font-bold text-lg text-[#979797]">Ranking</li>
                    </button>
                            
                            <!-- <li class="mt-9 font-bold text-lg text-[#979797]">Logout</li> -->
                        </ul>
            </div>
        </div>
        <div class="w-full bg-[#d1cccc2e] h-customh2 relative">
            <div class="w-[60%] mx-auto pt-[7%]">
                <h1 class="font-bold text-[103px] leading-[115px] text-[1F263E] text-center">Become  <span class="login-condition-text">ONDC</span><br>Defender </h1>
                <p class="mt-4 font-medium text-[22px] leading-[26px] text-[#979797] text-center">Earn ondc points and climb the ranks</p>
                <div class="mt-[63px] w-full flex items-center">
                    <button @click="navToDatabase()" type="button" class=" py-[26px] w-1/2 text-white mr-8 bg-[#079ADC] rounded-[11px]">
                        <h1 class="font-medium text-xl">Upload the law / Update (+10 pts )</h1>
                    </button>
                    <button @click="navToVerification()" class="py-[26px] w-1/2 text-white bg-[#5D81F3] rounded-[11px]">
                        <h1 class="font-medium text-xl">Verify the submitted Laws ( +1 pt )</h1>
                    </button>
                </div>
                <div class="mt-[63px]">
                    <p class="font-medium text-[22px] text-[#979797] text-center">If any issue faced, please contact </p>
                    <p class="font-medium text-[22px] text-[#979797] text-center">contact@cydratech.com</p>
                </div>
            </div>
            <div class="w-full absolute bottom-10">
                <div class="flex flex-col mx-auto items-center justify-center">
                    <p class="font-extrabold text-xl text-[#9A9B9F] text-center"><u>Check Ranking</u></p>
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


const router = useRouter();
const showProfileMenu = ref(false)


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

function navToVerification(){
    router.push({name: 'Verification'})
}

</script>