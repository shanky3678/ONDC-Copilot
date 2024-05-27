<template>
    <div class="h-[70px] w-full bg-white flex justify-between items-center pl-[30px] py-3 pr-[20px] ">
                <div >
                    </div>
                <div class="flex items-center">
                    <button type="button" class="relative mt-[10px]">
                        <img src="@/assets/images/Shape.svg" >
                        <p class="bg-[#F56C89] px-2 py-1 rounded-[50%] absolute -top-4 -right-3 text-sm text-white">1</p>
                    </button>
                
                    <!-- <div class="ml-7 error">
                        <img class="h-[50px] w-[50px]" src="@/assets/images/INDIA.svg" alt="bell-icon">
                    </div> -->
                    <div @mouseenter="onPressProfileBtn()" class="ml-7 mt-[5px] profile ">
                        <button  type="button">
                            <img class="h-[50px] w-[50px] rounded-full" :src="profile" alt="">
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
</template>

<script setup>
import {useServerStore} from '@/stores/server'
import router from '@/router';
import { ref , computed} from 'vue';
import {isEmptyOrNull} from '@/shared/utils';
import defaultImage from '@/assets/images/userPro.png'

const server = useServerStore();
const showProfileMenu = ref(false)



const profile = computed(() => {
    if (!isEmptyOrNull(server.userDetails['user_image'])) {
        return server.userDetails['user_image']
    } else {
        return defaultImage
    }
})

function onPressProfileBtn() {
    showProfileMenu.value = !showProfileMenu.value
}

function logoutFun() {
    let response = server.logout();
    if (response)
        router.push({
            name: 'Login'
        })
}
</script>