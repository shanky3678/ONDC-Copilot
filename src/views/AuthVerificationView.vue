<template>
    <body class="flex flex-col justify-center items-center h-screen relative">
        <div
      v-show="true"
      class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    >
      <div
        class="relative flex min-h-[calc(100%-1rem)] w-[580px] translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[600px]"
      >
        <div
          class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 px-16 py-[60px]"
        >
          
    <Vue3Lottie :animationData="AstronautJSON" :height="200" :width="200" />
          
          <!--Modal body-->
          <div class="relative p-4">
            <p class="font-semibold text-[29px] text-center">Verifying the users</p>
            <p class="font-semibold text-[29px] text-center">Please wait until the verification is completed </p>
          </div>
        </div>
      </div>
    </div>
</body>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted,ref } from 'vue';
import {useServerStore} from '@/stores/server'

import {Vue3Lottie} from 'vue3-lottie'
import AstronautJSON from '@/assets/animations/weighing-ani.json';

const useServer = useServerStore()
const route = useRoute();
const router = useRouter();
const isBusy = ref(false)


// Access specific query parameters
const token = route.query.token;

onMounted( async () => {
    let response = await useServer.verifyAndStoreAccessToken(token)
    if(response){
        router.push({ name: 'Main' });
    }else{
        router.push({ name: 'Login' });
    }
})


</script>