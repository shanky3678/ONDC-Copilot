<template>
  <body class="relative">
    <div
      v-show="isBusy"
      class="h-full w-full bg-black opacity-75 absolute z-10 items-center justify-center flex"
    >
      <div role="status">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-gray-600 animate-spin dark:text-gray-600 fill-white"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div>
      <Navbar class="z-[99]" :hide-me="false" />
      <div class="w-full bg-[#d1cccc2e] h-customh2 relative">
        <div class="w-full flex justify-end pr-10">
          <RouterLink to="/home"
            ><h1 class="underline text-2xl text-gray-600">Back</h1></RouterLink
          >
        </div>
        <div class="w-[60%] mx-auto pt-[7%]">
          <h1
            class="font-bold text-[78px] leading-[115px] text-[1F263E] text-center"
          >
            Upload / Verify<br />
            <span class="login-condition-text text-[103px]"
              >Laws and Policies</span
            >
          </h1>
          <!-- <p
            class="mt-4 font-medium text-[22px] leading-[26px] text-[#979797] text-center"
          >
            Earn ONDC points and climb the ranks to become our legal partner
          </p> -->
          <div class="mt-[63px] w-full flex items-center">
            <button
              @click="navToDatabase()"
              type="button"
              class="py-[26px] w-1/2 text-white mr-8 bg-[#079ADC] rounded-[11px]"
            >
              <!-- <h1 class="font-medium text-xl">
                Upload the law / Update (+10 pts )
              </h1> -->
              <h1 class="font-medium text-xl">Upload the law / Update</h1>
            </button>
            <button
              @click="navToVerification()"
              class="py-[26px] w-1/2 text-white bg-[#5D81F3] rounded-[11px]"
            >
              <!-- <h1 class="font-medium text-xl">
                Verify the submitted Laws ( +1 pt )
              </h1> -->
              <h1 class="font-medium text-xl">Verify the submitted Laws</h1>
            </button>
          </div>
          <!-- <div class="mt-[63px]">
                    <p class="font-medium text-[22px] text-[#979797] text-center">If any issue faced, please contact </p>
                    <p class="font-medium text-[22px] text-[#979797] text-center">contact@cydratech.com</p>
                </div> -->
        </div>
        <!-- <div class="w-full absolute bottom-10">
          <div class="flex flex-col mx-auto items-center justify-center">
            <button
              @click="getRanking"
              type="button"
              data-te-toggle="modal"
              data-te-target="#rankingpop"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <p class="font-extrabold text-xl text-blue-950 text-center">
                <u>Check Ranking</u>
              </p>
            </button>

           
          </div>
        </div> -->
      </div>
    </div>
  </body>
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
import { onMounted, ref } from "vue";
import { Modal, Popconfirm, initTE } from "tw-elements";
import { useServerStore } from "@/stores/server";
import Navbar from "@/components/Navbar.vue";
import defaultImage from "@/assets/images/userPro.png";

const server = useServerStore();
const router = useRouter();
const showProfileMenu = ref(false);
const isBusy = ref(false);
const ranking = ref({});

onMounted(async () => {
  initTE({ Modal, Popconfirm });
  ranking.value = await server.fetchRanking();
  console.log(ranking.value);
});

function navToDatabase() {
  router.push({ name: "Database" });
}

function navToVerification() {
  router.push({ name: "Verification" });
}
</script>
