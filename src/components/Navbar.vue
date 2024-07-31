<template>
  <div
    class="pl-8 pr-[60px] py-2 flex justify-between items-center shadow-lg sticky"
  >
    <div class="flex space-x-5 items-center w-full">
      <div v-if="hideMe">
        <RouterLink to="/main">
          <div class="flex items-center">
            <img
              class="h-[50px] w-[50px]"
              src="@/assets/images/bot.png"
              alt="logo"
            />
            <p class="ml-3 font-bold text-[#1F263E] text-[26px]">
              AI Compliance
            </p>
          </div>
        </RouterLink>
      </div>
      <div v-if="showAllLaws">
        <div>
          <RouterLink to="/law-data">
            <button
              class="px-4 py-2 mr-1 mb-1 bg-[#084acf] outline-none rounded shadow text-white text-xs font-bold uppercase focus:outline-none hover:shadow-md active:bg-gray-600"
            >
              All Laws
            </button>
          </RouterLink>
        </div>
      </div>
    </div>

    <div
      class="h-[70px] w-full bg-white flex justify-between items-center pl-[30px] py-3 pr-[20px]"
    >
      <div></div>
      <div class="flex items-center">
        <!-- <button type="button" class="relative mt-[10px]">
          <img src="@/assets/images/Shape.svg" />
          <p
            class="bg-[#F56C89] px-2 py-1 rounded-[50%] absolute -top-4 -right-3 text-sm text-white"
          >
            1
          </p>
        </button> -->

        <!-- <div class="ml-7 error">
                        <img class="h-[50px] w-[50px]" src="@/assets/images/INDIA.svg" alt="bell-icon">
                    </div> -->
        <div @mouseenter="onPressProfileBtn()" class="ml-7 mt-[5px] profile">
          <button type="button">
            <img class="h-[50px] w-[50px] rounded-full" :src="profile" alt="" />
          </button>
          <ul
            v-show="showProfileMenu"
            class="list w-[400px] h-[360px] absolute top-[60px] right-12 rounded-[18px] shadow-xl border border-[#BABABA] p-12 bg-white z-[99]"
          >
            <RouterLink to="/home">
              <li class="font-bold text-lg text-[#5D81F3]">Home</li>
            </RouterLink>
            <RouterLink to="/defender">
              <li class="mt-9 font-bold text-lg text-[#979797]">
                Laws and Policies
              </li>
            </RouterLink>
            <!-- <button
              type="button"
              data-te-toggle="modal"
              data-te-target="#rankingpop"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <li class="mt-9 font-bold text-lg text-[#979797]">Ranking</li>
            </button> -->
            <!-- <br /> -->
            <RouterLink to="/pricing">
              <li class="mt-9 font-bold text-lg text-[#979797]">API Pricing</li>
            </RouterLink>
            <button @click="logoutFun()">
              <li class="mt-9 font-bold text-lg text-[#979797]">Logout</li>
            </button>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useServerStore } from "@/stores/server";
import router from "@/router";
import { ref, computed } from "vue";
import { isEmptyOrNull } from "@/shared/utils";
import defaultImage from "@/assets/images/userPro.png";

const server = useServerStore();
const showProfileMenu = ref(false);
const props = defineProps({
  hideMe: {
    type: Boolean,
    default: false,
  },
  showAllLaws: {
    type: Boolean,
    default: false,
  },
});

const profile = computed(() => {
  if (!isEmptyOrNull(server.userDetails["user_image"])) {
    return server.userDetails["user_image"];
  } else {
    return defaultImage;
  }
});

function onPressProfileBtn() {
  showProfileMenu.value = !showProfileMenu.value;
}

function logoutFun() {
  let response = server.logout();
  if (response)
    router.push({
      name: "Login",
    });
}
</script>
