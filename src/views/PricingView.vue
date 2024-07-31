<template>
  <section>
    <Navbar class="z-[99]" :hide-me="false" />

    <div class="min-h-screen flex justify-center items-center">
      <div class>
        <div class="text-center font-semibold">
          <h1 class="text-5xl">
            <span class="text-blue-700 tracking-wide"
              >Are you E-commerce enterprice <br />
            </span>
            <span> or Compliance firm ?</span>
          </h1>
          <p
            class="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full"
          >
            Choose a which API service works best for your.
          </p>
        </div>
        <div class="pt-24 flex flex-row">
          <!-- Basic Card -->
          <div
            class="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl"
          >
            <h1 class="text-black font-semibold text-2xl">Data API</h1>
            <p class="pt-2 tracking-wide">
              <span class="text-gray-400 align-top">₹ </span>
              <span class="text-3xl font-semibold">10</span>
              <span class="text-gray-400 font-medium">/ 100 requests</span>
            </p>
            <hr class="mt-4 border-1" />
            <div class="pt-8">
              <p class="font-semibold text-gray-400 text-left">
                <span class="material-icons align-middle"> done </span>
                <span class="pl-2"
                  >API accese to our
                  <span class="text-black">law database</span>
                </span>
              </p>
              <p class="font-semibold text-gray-400 text-left pt-5">
                <span class="material-icons align-middle"> done </span>
                <span class="pl-2">
                  Containe all
                  <span class="text-black"> laws in vector database</span>
                </span>
              </p>
              <p class="font-semibold text-gray-400 text-left pt-5">
                <span class="material-icons align-middle"> done </span>
                <span class="pl-2">
                  <span class="text-gray-400">This database is </span>
                  <span class="text-black"> updated daily</span>
                </span>
              </p>

              <a href="#" class>
                <p class="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                  <span class="font-medium"> Comming Soon </span>
                </p>
              </a>
            </div>
          </div>
          <!-- StartUp Card -->
          <div
            class="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125"
          >
            <h1 class="text-white font-semibold text-2xl">Compliance API</h1>
            <p class="pt-2 tracking-wide">
              <span class="text-gray-400 align-top">₹ </span>
              <span class="text-3xl font-semibold">80</span>
              <span class="text-gray-400 font-medium">/ 100 requests</span>
            </p>
            <hr class="mt-4 border-1 border-gray-600" />
            <div class="pt-8">
              <p class="font-semibold text-gray-400 text-left">
                <span class="material-icons align-middle"> done </span>
                <span class="pl-2">
                  Provies compliance as <span class="text-white">service</span>
                </span>
              </p>
              <p class="font-semibold text-gray-400 text-left pt-5">
                <span class="material-icons align-middle"> done </span>
                <span class="pl-2">
                  All Indian <span class="text-white">product & services</span>
                </span>
              </p>
              <p class="font-semibold text-gray-400 text-left pt-5">
                <span class="material-icons align-middle"> done </span>
                <span class="pl-2">
                  limit <span class="text-white">100 requests / second </span>
                </span>
              </p>

              <a href="#" class>
                <p class="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                  <span class="font-medium"> Comming Soon </span>
                </p>
              </a>
            </div>
          </div>
          <!-- Enterprise Card -->
          <div
            class="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl"
          >
            <h1 class="text-black font-semibold text-2xl">
              Custom Compliance API
            </h1>
            <p class="pt-2 tracking-wide">
              <span class="text-gray-400 align-top">₹ </span>
              <span class="text-3xl font-semibold">150</span>
              <span class="text-gray-400 font-medium">/ 100 request</span>
            </p>
            <hr class="mt-4 border-1" />
            <div class="pt-8">
              <p class="font-semibold text-gray-400 text-left">
                <span class="material-icons align-middle"> done </span>
                <span class="pl-2">
                  Custom due diligence <span class="text-black"> API</span>
                </span>
              </p>
              <p class="font-semibold text-gray-400 text-left pt-5">
                <span class="material-icons align-middle"> done </span>
                <span class="pl-2">
                  Upload <span class="text-black">custom regulations</span>
                </span>
              </p>
              <p class="font-semibold text-left pt-5">
                <span class="material-icons align-middle"> done </span>
                <span class="pl-2">
                  <span class="text-gray-400">Compliance checked </span>
                  <span class="text-black"> on documents</span>
                </span>
              </p>

              <a href="#" class>
                <p class="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                  <span class="font-medium"> Comming Soon </span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>
