<template>
  <div>
    <Navbar class="z-[99]" :hide-me="false" />

    <div
      class="w-full bg-[#d1cccc2e] relative pt-[64px] pl-10 pr-[62px] pb-11 flex h-custom h2 overflow-auto sidebar"
    >
      <!-- <div class="w-[20%] mt-4">
        <h1 class="font-bold text-[#079ADC] text-[90px]">Hello</h1>
        <p class="font-medium text-sm text-[#979797] mt-1">
          Welcome to AI compliance uploader
        </p>
        <p class="mt-10 font-normal text-base text-[#979797]">
          Verify Laws, regulations, un-updated amendments, court orders and
          ministry guidelines which <bold>do not</bold> exist in our database
        </p>
        <p class="mt-5 font-normal text-base text-[#979797]">
          You will receive <bold>1pt</bold> and might increase your ranking
          after verification of the content of the left sided file compared to
          our database(right side section).
        </p>
        <p class="mt-5 font-normal text-base text-[#979797]">
          You will receive <bold>no points</bold>, if you verify incorrectly.
        </p>
        <p class="mt-5 font-normal text-base text-[#979797]">
          If you get high enough ranking for certain time period, you wil be
          given the title of “Official ONDC law partner”.
        </p>
      </div> -->
      <div class="w-[100%] ml-6">
        <div
          class="w-full border border-[#DFDFDF] pt-[17px] px-[55px] pb-8 rounded-lg"
        >
          <p class="font-semibold text-[26px] text-[#1F263E] text-center">
            <u>Verifying the law </u>
          </p>
          <div class="flex items-center justify-end mt-6">
            <div class="relative">
              <input
                type="text"
                v-model="searchText"
                class="w-[552px] py-4 pr-4 pl-12 rounded-lg border border-[#B7B7B7] outline-0"
              />
              <img
                src="@/assets/images/mingcute_search-fill.svg"
                alt="chat"
                class="ml-7 absolute left-[-10px] top-4"
              />
            </div>
          </div>
          <div class="mt-6 w-full flex">
            <div class="w-1/2 pr-[100px] border-r border-[#D9D9D9]">
              <p class="font-semibold text-[26px] text-[#1F263E]">
                <u>Law/Regulation to verify</u>
              </p>
              <div class="w-full">
                <table class="mt-16 shadow-lg rounded-bl-lg rounded-br-lg">
                  <thead
                    class="bg-[#F5F5F5] border-b border-[#E1CFFF] sticky top-0"
                  >
                    <th
                      class="min-w-[150px] rounded-tl-lg rounded-bl-lg px-5 py-[13px] flex bg-[#F5F5F5]"
                    >
                      <p class="ml-5 font-medium text-sm justify-start flex">
                        Name
                      </p>
                    </th>
                    <th
                      class="min-w-[150px] px-5 py-[13px] text-start rounded-tr-lg rounded-bt-lg bg-[#F5F5F5]"
                    >
                      PDF View
                    </th>
                  </thead>
                  <tbody style="overflow-y: auto">
                    <tr
                      v-if="unverifiedDocuments.length > 0"
                      class="w-full border-b border-[#E1CFFF]"
                    >
                      <td class="min-w-[150px] p-6 flex items-center">
                        <p class="ml-5 font-medium text-sm justify-start flex">
                          {{ unverifiedDocuments[0]["document_name"] }}
                        </p>
                      </td>
                      <td class="min-w-[150px] p-6">
                        <a
                          target="_blank"
                          :href="`${constant.endpoint}/pdf?filepath=${unverifiedDocuments[0]['document_url']}`"
                          ><u>View the PDF</u></a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="w-1/2 px-10 pb-1">
              <p class="font-semibold text-[26px] text-[#1F263E]">
                <u>Our Data base</u>
              </p>
              <div
                class="h-[500px] shadow-lg overflow-auto overflow-x-hidden sidebar mt-8 pr-3 w-full"
              >
                <table
                  class="table-auto shadow-lg rounded-bl-lg rounded-br-lg w-full pr-2"
                >
                  <thead
                    class="bg-[#F5F5F5] border-b border-[#E1CFFF] sticky top-[-0.5] pr-2"
                  >
                    <th
                      class="min-w-[250px] rounded-tl-lg rounded-bl-lg px-5 py-[13px] flex bg-[#F5F5F5]"
                    >
                      <p class="ml-5 font-medium text-sm justify-start flex">
                        Name
                      </p>
                    </th>
                    <th
                      class="min-w-[250px] px-5 py-[13px] text-start rounded-tr-lg rounded-bt-lg bg-[#F5F5F5]"
                    >
                      PDF View
                    </th>
                  </thead>
                  <tbody
                    v-if="searchResult.length > 0"
                    style="overflow-y: auto"
                    v-for="document of searchResult"
                  >
                    <tr class="w-full border-b border-[#E1CFFF]">
                      <td class="min-w-[250px] p-6 flex items-center">
                        <p class="ml-5 font-medium text-sm justify-start flex">
                          {{ document["document_name"] }}
                        </p>
                      </td>
                      <td class="min-w-[250px] p-6">
                        <a
                          target="_blank"
                          :href="`${constant.endpoint}/pdf?filepath=${document['document_url']}`"
                          ><u>View the PDF</u></a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div v-show="showSubmitBtn">
            <div class="flex items-center">
              <input
                ref="bd1"
                v-model="selectedOption1"
                @click="select1"
                :value="constant.verifyOption1"
                class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-7 w-7 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#C8C8C8] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[7px] checked:after:block checked:after:h-[19px] checked:after:w-[9px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)]"
                type="checkbox"
                id="bd1"
              />
              <label for="bd1" class="ml-4 cursor-pointer"
                >{{ constant.verifyOption1 }}
              </label>
            </div>
            <div
              class="flex items-center mt-6"
              data-te-toggle="modal"
              @click="select2"
              data-te-target="#exampleModalCenter2"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <input
                ref="bd2"
                v-model="selectedOption2"
                :value="constant.verifyOption2"
                class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-7 w-7 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#C8C8C8] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[7px] checked:after:block checked:after:h-[19px] checked:after:w-[9px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)]"
                type="checkbox"
                id="bd2"
              />
              <label for="bd2" class="ml-4 cursor-pointer"
                >{{ constant.verifyOption2 }}
              </label>
            </div>
            <div
              class="flex items-center mt-6"
              data-te-toggle="modal"
              @click="select3"
              data-te-target="#exampleModalCenter3"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <input
                ref="bd3"
                v-model="selectedOption3"
                :value="constant.verifyOption3"
                class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-7 w-7 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#C8C8C8] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[7px] checked:after:block checked:after:h-[19px] checked:after:w-[9px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)]"
                type="checkbox"
                id="bd3"
              />
              <label for="bd3" class="ml-4 cursor-pointer"
                >{{ constant.verifyOption3 }}
              </label>
            </div>
            <div
              class="flex items-center mt-6"
              data-te-toggle="modal"
              @click="select4"
              data-te-target="#exampleModalCenter3"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <input
                ref="bd4"
                v-model="selectedOption4"
                :value="constant.verifyOption3"
                class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-7 w-7 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#C8C8C8] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[7px] checked:after:block checked:after:h-[19px] checked:after:w-[9px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)]"
                type="checkbox"
                id="bd4"
              />
              <label for="bd4" class="ml-4 cursor-pointer"
                >{{ constant.verifyOption4 }}
              </label>
            </div>
            <button
              @click="verifyDocumentDoc()"
              type="button"
              data-te-toggle="modal"
              data-te-ripple-init
              data-te-ripple-color="light"
              class="mt-[51px] bg-[#5D81F3] w-[220px] py-4 outline-0 rounded-lg"
            >
              <h1 class="font-medium text-xl text-white">Submit</h1>
            </button>
          </div>
        </div>
        <p class="font-normal text-xs text-[#9A9B9F] text-center mt-5">
          © Copyright 2024 CYDRA TECH x MASTERGEAR All Rights Reserved
        </p>
      </div>
    </div>
    <!-- modal success messsage -->
    <div
      data-te-modal-init
      class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      id="exampleModalCenter1"
      tabindex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div
        data-te-modal-dialog-ref
        class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-[580px] translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[600px]"
      >
        <div
          class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 px-16 py-[60px]"
        >
          <button
            type="button"
            class="absolute top-4 right-5 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!--Modal body-->
          <div class="relative w-full">
            <p class="font-semibold text-[29px] text-center">
              Thank you for verification + 1pt for verifying
            </p>
            <p class="font-semibold text-[29px] text-center">Redirecting..</p>
            <button
              @click="navToDefender()"
              type="button"
              data-te-modal-dismiss
              aria-label="Close"
              class="w-[182px] h-[64px] font-semibold text-[29px] leading-[35px] text-white rounded mt-12 mx-auto bg-[#5D81F3] flex justify-center items-center"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal for verifying the ink -->
    <div
      data-te-modal-init
      class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      id="exampleModalCenter2"
      tabindex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div
        data-te-modal-dialog-ref
        class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-[580px] translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[458px]"
      >
        <div
          class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 p-11"
        >
          <button
            type="button"
            class="absolute top-4 right-5 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!--Modal body-->
          <div class="relative w-full">
            <p class="font-semibold text-[29px] leading-[35px] text-[#1F263E]">
              Verify the link
            </p>
            <p
              class="font-medium mt-6 text-lg text-start text-[#text-[#1F263E]"
            >
              Verify the link given to check of this belong to govt website
            </p>
            <a
              href="#"
              class="text-[#079ADC] font-medium mt-6 text-lg text-start"
              >Link : https://www.google.gov</a
            >
            <div class="flex items-center mt-6">
              <input type="checkbox" name="" id="bd1" class="cursor-pointer" />
              <label for="bd1" class="ml-5 cursor-pointer"
                >Yes, its a Govt website</label
              >
            </div>
            <div class="flex items-center mt-4">
              <input type="checkbox" name="" id="bd1" class="cursor-pointer" />
              <label for="bd1" class="ml-5 cursor-pointer"
                >No, its a Govt website
              </label>
            </div>
            <button
              type="button"
              data-te-modal-dismiss
              aria-label="Close"
              class="w-[182px] h-[54px] font-medium text-xl text-white rounded mt-7 mx-auto bg-[#5D81F3] flex justify-center items-center"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Check if the repealed (expired)   -->
    <div
      data-te-modal-init
      class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      id="exampleModalCenter3"
      tabindex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div
        data-te-modal-dialog-ref
        class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-[580px] translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[486px]"
      >
        <div
          class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 p-11"
        >
          <button
            type="button"
            class="absolute top-4 right-5 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!--Modal body-->
          <div class="relative w-full">
            <p class="font-semibold text-[29px] leading-[35px] text-[#1F263E]">
              Check if the repealed (expired)
            </p>
            <p
              class="font-medium mt-6 text-lg text-start text-[#text-[#1F263E]"
            >
              Check online if the law is replealed
            </p>
            <a
              v-if="unverifiedDocuments.length > 0"
              target="_blank"
              :href="`${constant.endpoint}/pdf?filepath=${unverifiedDocuments[0]['document_url']}`"
              class="text-[#079ADC] font-medium mt-6 text-lg text-start"
              >Link :
              {{
                `${constant.endpoint}/pdf?filepath=${unverifiedDocuments[0]["document_url"]}`
              }}</a
            >
            <div class="flex items-center mt-6">
              <input type="checkbox" name="" id="bd1" class="cursor-pointer" />
              <label for="bd1" class="ml-5 cursor-pointer"
                >The Law/Regulation is repealed
              </label>
            </div>
            <div class="flex items-center mt-4">
              <input type="checkbox" name="" id="bd1" class="cursor-pointer" />
              <label for="bd1" class="ml-5 cursor-pointer"
                >The Law/Regulation is currently legal
              </label>
            </div>
            <button
              type="button"
              data-te-modal-dismiss
              aria-label="Close"
              class="w-[182px] h-[54px] font-medium text-xl text-white rounded mt-7 mx-auto bg-[#5D81F3] flex justify-center items-center"
            >
              Submit
            </button>
          </div>
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
  </div>
</template>

<style>
@import "@/assets/css/output.css";
</style>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Modal, Popconfirm, initTE } from "tw-elements";

import { useServerStore } from "@/stores/server";
import * as constant from "@/shared/constant";
import { isEmptyOrNull } from "@/shared/utils";
import Navbar from "@/components/Navbar.vue";
import defaultImage from "@/assets/images/userPro.png";

const router = useRouter();
const server = useServerStore();
const unverifiedDocuments = ref([]);
const verifiedDocuments = ref([]);
const selectedOption1 = ref(null);
const selectedOption2 = ref(null);
const selectedOption3 = ref(null);
const selectedOption4 = ref(null);
const showProfileMenu = ref(false);
const verify_remark = ref(null);
const is_legit = ref(null);
const showSubmitBtn = ref(false);
const searchText = ref("");
const ranking = ref({});

onMounted(async () => {
  initTE({ Popconfirm, Modal });
  await fetchData();
  ranking.value = await server.fetchRanking();
});

const searchResult = computed(() => {
  return verifiedDocuments.value.filter((document) =>
    document.document_name
      .toLowerCase()
      .includes(searchText.value.toLowerCase())
  );
});

async function fetchData() {
  unverifiedDocuments.value = await server.getUnverifiedDocument();
  verifiedDocuments.value = await server.getVerifiedDocument();

  if (unverifiedDocuments.value.length <= 0) {
    showSubmitBtn.value = false;
  } else {
    searchText.value = unverifiedDocuments.value[0]["document_name"];
    setTimeout(() => {
      showSubmitBtn.value = true;
    }, 10000);
  }
}

//temperary
const select1 = () => {
  selectedOption2.value = false;
  selectedOption3.value = false;
  selectedOption4.value = false;
  verify_remark.value = constant.verifyOption1;
  is_legit.value = false;
};

const select2 = () => {
  selectedOption1.value = false;
  selectedOption3.value = false;
  selectedOption4.value = false;
  verify_remark.value = constant.verifyOption2;
  is_legit.value = true;
};
const select3 = () => {
  selectedOption1.value = false;
  selectedOption2.value = false;
  selectedOption4.value = false;
  verify_remark.value = constant.verifyOption3;
  is_legit.value = true;
};

const select4 = () => {
  selectedOption1.value = false;
  selectedOption2.value = false;
  selectedOption3.value = false;
  verify_remark.value = constant.verifyOption4;
  is_legit.value = false;
};

function navToDefender() {
  router.push({
    name: "Defender",
  });
}

async function verifyDocumentDoc() {
  if (unverifiedDocuments.value.length > 0) {
    let response = await server.verifyDocument(
      server.userDetails.user_id,
      unverifiedDocuments.value[0]["document_id"],
      verify_remark.value,
      is_legit.value
    );
    if (!isEmptyOrNull(response.message)) {
      server.point_plus_one = true;
      setTimeout(() => {
        server.point_plus_one = false;
      }, 3000);
    } else {
      alert("Something went wrong. Refresh and try again." + response);
    }
  }
}
</script>
