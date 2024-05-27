<template>
    <div>
        <div class="pl-8 pr-[60px] py-2 flex justify-between items-center shadow-lg sticky">
            <div class="flex items-center">
                <img class="h-[50px] w-[50px]" src="@/assets/images/bot.png" alt="logo">
                <p class="ml-3 font-normal text-[#1F263E] text-[19px]">ONDC <br> DASHBOARD </p>
            </div>
            <div class="flex items-center">
                
            </div>
        </div>
        <div class="flex w-full pt-10 pl-20 overflow-y-hidden h-[calc(100vh-84px)]">
            <div class="w-[50%]">
                <div class="flex flex-col justify-between h-full">
                    <div>
                        <div
                                class="w-fit bg-[#E7F6FF] rounded-[26px] py-[10px] px-4 flex items-center "
                                style="font-weight: 400; font-size: 14px; color: #193E6C; ">

                                Upload or Verify Laws to our database<p @click="navTo('Defender')"
                                    class="w-[86px] py-[6px] rounded-[26px] bg-[#094B72] ml-2 text-center"
                                    style="font-weight: 400; font-size: 12px; color: white;">Click
                                    Here</p>
                            </div>
                        <h2
                            class="mt-[40px] font-bold text-[#094B72]  md:text-[75px] xl:leading-[80px] text-[43px] leading-[70px] heading font-playfair ">
                            Hello I am your compliance assistant
                        </h2>
                        <div class="flex items-center mt-10 w-full">
                            <RouterLink to="/home">
                            <button
                            @click="navTo('Home')"
                                class="border border-[#094B72] mr-[15px] bg-[#E7F6FF] py-7 px-5 rounded-lg w-[300px] text-[18px] font-extrabold text-[#094B72]">Check
                                laws for my product</button>
                            </RouterLink>
                            <router-link to="/home?showSlideBar=false" >

                                <button 
                                class="border border-[#094B72] mr-[15px] bg-[#E7F6FF] py-7 px-5 rounded-lg w-[300px] text-[18px] font-extrabold text-[#094B72]">Ask
                                legal doubts</button>
                            </router-link>
                        </div>
                        <div class="flex items-center mt-5 w-full">
                            <button @click="navTo('Home')"
                                class="border border-[#094B72] mr-[15px] text-[#FFFFFF] py-7 px-5 rounded-lg w-[300px] text-[18px] font-extrabold bg-[#094B72]">Ask
                                with product image</button>
                            <button @click="navTo('Defender')"
                                class="border border-[#094B72] mr-[15px] text-[#FFFFFF] py-7 px-5 rounded-lg w-[300px] text-[18px] font-extrabold bg-[#094B72]">Upload/Verify
                                laws</button>
                        </div>
                    </div>
                    <div class="my-10">
                        <p class="font-normal text-sm text-[#8B8C8C]">Developed By </p>
                        <img src="@/assets/images/cydra.svg" alt="">
                    </div>
                </div>

            </div>
            <div class="w-[50%] ml-[77px] flex">
                <img src="@/assets/images/ONDC-Main.png" alt="ONDC" class="self-end">
            </div>
        </div>
    </div>
</template>
<script setup>

import { useRouter } from 'vue-router';
import { useServerStore } from '@/stores/server';
import { isEmptyOrNull } from '@/shared/utils';
const router = useRouter()
const server = useServerStore()

const navTo = (value) => {
        if(value == "ChatDoubt"){
            router.push({
                name: 'Home',
                params: {
                showSideBar: false
                }
            })
        }else {
             router.push({
                name: value
            })
        }
}

</script>