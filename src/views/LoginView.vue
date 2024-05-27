<template>
    <!-- <body class="flex flex-col justify-center items-center h-screen"> -->
       <!-- <div v-show="isBusy" class="h-full w-full bg-black opacity-75 absolute z-10 items-center justify-center flex">
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
        
        <div class="mt-[60px] w-full flex items-center">
            <button @click="login()" class="w-full bg-[#F7F7F7] rounded py-3 mr-2.5">
                <img src="@/assets/images/google.svg" alt="google.svg" class="mx-auto w-12 h-12">
            </button>
            
        </div> 
       
    </div>-->

    <section class="bg-gray-50 dark:bg-gray-900">
            <div
                class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <img  src="@/assets/images/bot.png" alt="logo" class="h-[50px] w-[50px] mb-5 mx-auto border-b border-[#D8D8D8]">
                
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-600 md:text-2xl dark:text-white text-center">
                            Login/Sign Up <br>with your Google account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <button @click="login()"
                                class="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                                in with Google</button>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required>
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label 
                                            class="text-gray-500 dark:text-gray-300">Remember
                                            me</label>
                                    </div>
                                </div>
                                <a href="#"
                                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                                    password?</a>
                            </div>
                            <!-- <p
                                class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="#"
                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                                    up</a>
                            </p> -->
                        </form>
                    </div>
                </div>
            </div>
        </section>


<!-- </body> -->
 

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
const props = defineProps({
    navTo: {
        type: String,
        default: ''
    }
}
)

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