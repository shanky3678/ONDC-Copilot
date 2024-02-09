<template>
    <body class="flex flex-col justify-center items-center h-screen">
    <div class="w-[40%] mx-auto bg-white border border-[#DFDFDF] shadow-lg rounded shadow-[#DFDFDF] my-[70px] pt-[70px] px-[55px] pb-6 justify-center items-center">
        <h1 class="font-bold font- text-[29px] leading-[20px] text-black text-shadow ">Auth Verification</h1><br>
    </div>
</body>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import {useServerStore} from '@/stores/server'

const useServer = useServerStore()
const route = useRoute();
const router = useRouter();

// Access specific query parameters
const token = route.query.token;

onMounted( async () => {
    let response = await useServer.verifyAndStoreAccessToken(token)
    if(response){
        router.push({ name: 'Home' });
    }else{
        router.push({ name: 'Login' });
    }
})


</script>