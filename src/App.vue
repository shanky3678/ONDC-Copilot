<script setup>
import { RouterView } from "vue-router";
import { useServerStore } from "@/stores/server";
import { computed } from "vue";
import {Vue3Lottie} from 'vue3-lottie'
import AstronautJSON from '@/assets/animations/weighing-ani.json';
import ToastMessage from "./components/ToastMessage.vue";

const useServer = useServerStore();
const is_loading = computed(() => useServer.universal_loading);
const point_plus_ten = computed(() => useServer.point_plus_ten);
const point_plus_one = computed(() => useServer.point_plus_one);

</script>

<template>
  <div class="relative">
    <ToastMessage class="fixed z-50 bottom-3 right-3" v-show="point_plus_one" message="Added +1 to your points" />
    <ToastMessage v-show="point_plus_ten" message="Added +10 to your points" />

    <div
      v-show="is_loading"
      class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none "
    >
      <div
        class="relative flex min-h-[calc(100%-1rem)] w-[580px] translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[600px]"
      >
        <div
          class="pointer-events-auto relative flex w-full flex-col rounded-xl border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 px-16 py-[60px]"
        >
          
            <Vue3Lottie :animationData="AstronautJSON" :height="100" :width="100" />
          
          <!--Modal body-->
          <div class="relative p-4">
            <p class="font-semibold text-[29px] text-center">Loading...</p>
          </div>
         
        </div>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
