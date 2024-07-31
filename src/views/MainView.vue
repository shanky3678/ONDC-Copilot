<template>
  <div>
    <Navbar :hide-me="false" />
    <div class="flex w-full pt-10 pl-20 overflow-y-hidden h-[calc(100vh-84px)]">
      <div class="w-[50%]">
        <div class="flex flex-col justify-between h-full">
          <div>
            <div
              class="w-fit bg-[#E7F6FF] rounded-[26px] py-[10px] px-4 flex items-center"
              style="font-weight: 400; font-size: 14px; color: #193e6c"
            >
              Upload/Verify Laws and Policies to the database
              <p
                @click="navTo('Defender')"
                class="w-[86px] py-[6px] rounded-[26px] bg-[#094B72] ml-2 text-center cursor-pointer"
                style="font-weight: 400; font-size: 12px; color: white"
              >
                Click Here
              </p>
            </div>
            <h2
              class="mt-[40px] font-bold text-[#094B72] md:text-[75px] xl:leading-[80px] text-[43px] leading-[70px] heading font-playfair"
            >
              Hello I am your compliance assistant
            </h2>
            <div class="flex items-center mt-10 w-full">
              <RouterLink to="/home?type=laws">
                <button
                  class="justify-center flex border border-[#094B72] mr-[15px] bg-[#E7F6FF] py-7 px-2 rounded-lg w-[330px] text-[18px] font-extrabold text-[#094B72]"
                >
                  <img
                    src="@/assets/images/codicon_law.png"
                    class="mr-2"
                    alt=""
                  />
                  Check laws for my product
                </button>
              </RouterLink>
              <RouterLink to="/home?showSideBar=false">
                <button
                  class="border flex justify-center border-[#094B72] mr-[15px] bg-[#E7F6FF] py-7 px-4 rounded-lg w-[330px] text-[18px] font-extrabold text-[#094B72]"
                >
                  <img src="@/assets/images/Vector.png" class="mr-2" alt="" />
                  Ask legal compliance doubts
                </button>
              </RouterLink>
            </div>
            <div class="flex items-center mt-5 w-full">
              <RouterLink
                to="/home?showSideBar=false&showUploadFile=true&type=product"
              >
                <button
                  class="flex border justify-center items-center border-[#094B72] mr-[15px] text-[#FFFFFF] py-7 px-2 rounded-lg h-[83px] w-[330px] text-[18px] font-extrabold bg-[#094B72]"
                >
                  <img src="@/assets/images/eye.png" class="size-10" alt="" />
                  Legal Eye
                </button>
              </RouterLink>
              <RouterLink
                to="/home?showSideBar=false&showUploadFile=true&type=label"
              >
                <button
                  class="border justify-center flex border-[#094B72] mr-[15px] text-[#FFFFFF] py-7 px-5 rounded-lg w-[330px] text-[18px] font-extrabold bg-[#094B72]"
                >
                  <img src="@/assets/images/Vector-2.png" class="mr-2" alt="" />
                  Check product label
                </button>
              </RouterLink>
            </div>
          </div>
          <div class="my-10">
            <p class="font-normal text-sm text-[#8B8C8C]">Developed By</p>
            <img src="@/assets/images/cydra.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="w-[50%] ml-[77px] flex">
        <img src="@/assets/images/ONDC-Main.png" alt="ONDC" class="self-end" />
      </div>
    </div>
  </div>
  <div
    data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="rankingpop"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-modal="true"
    role="dialog"
  >
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-[580px] translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[600px]"
    >
      <!--Modal body-->
      <div class="relative w-full">
        <!-- //ranking code -->
        <section>
          <div class="w-[420px] bg-white p-8 rounded-2xl flex flex-col gap-5">
            <button
              data-te-modal-dismiss
              aria-label="Close"
              type="button"
              class="ms-auto bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
            <h1 class="text-xl text-gray-500">Leader Board Ranking</h1>
            <div class="relative overflow-x-auto">
              <table
                class="w-full text-sm text-left rtl:text-right text-gray-500"
              >
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" class="px-2 py-3">Postions</th>
                    <th scope="col" class="px-6 py-3">Name</th>
                    <th scope="col" class="px-6 py-3">Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(data, index) of ranking"
                    :key="index"
                    class="bg-white border-b"
                  >
                    <th
                      scope="row"
                      class="py-4 font-medium text-gray-900 text-center"
                    >
                      {{ index + 1 }}
                    </th>
                    <td class="px-6 py-4 flex items-center space-x-2">
                      <div class="flex items-center">
                        <img
                          :src="
                            data.user_image != null
                              ? data.user_image
                              : defaultImage
                          "
                          alt="User Avatar"
                          class="w-8 h-8 rounded-full mr-4 object-cover"
                        />
                        <span class="text-gray-800 font-semibold">
                          {{ data.user_name }}</span
                        >
                      </div>
                    </td>
                    <td class="px-6 py-4">{{ data.user_points }} pt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useServerStore } from "@/stores/server";
import { isEmptyOrNull } from "@/shared/utils";
import Navbar from "@/components/Navbar.vue";
import { Modal, Popconfirm, initTE } from "tw-elements";
import defaultImage from "@/assets/images/userPro.png";

import { onMounted, ref } from "vue";
const router = useRouter();

const ranking = ref({});
const server = useServerStore();

const navTo = (value) => {
  if (value == "ChatDoubt") {
    router.push({
      name: "Home",
      params: {
        showSideBar: false,
      },
    });
  } else {
    router.push({
      name: value,
    });
  }
};

onMounted(async () => {
  initTE({ Modal, Popconfirm });
  ranking.value = await server.fetchRanking();
});
</script>
