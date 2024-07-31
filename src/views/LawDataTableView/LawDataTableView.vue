<template>
  <body>
    <div>
      <Navbar class="z-[99]" hide-me="" />
    </div>

    <section
      v-if="!isEmptyOrNull(documentDetails)"
      class="flex flex-col md:flex-row h-screen items-center"
    >
      <div
        class="lg:block w-full md:w-1/2 xl:w-3/5 container mx-auto my-12 mt-[200px] ml-10 p-4 bg-gray-100 border rounded"
      >
        <!-- <div class="border border-gray-200 w-ful m-5 p-5">
                    <h1 class="mb-3 text-2xl font-bold text-[#787878]">Act
                        Details</h1>

                    <h1 class=" text-xl font-bold text-[#343434]">Enactment
                        Date
                        :
                        <span class="text-sm text-[#343434]"> "2020-09-20"
                        </span> </h1>
                </div> -->
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
          >
            <table class="min-w-full leading-normal">
              <tbody>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <!-- <div
                                            class="flex-shrink-0 w-10 h-10">
                                            <img
                                                class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt />
                                        </div> -->
                      <div class="ml-3">
                        <p class="text-[#094B72] font-bold">Enactment Date:</p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ documentDetails.enactment_date }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <!-- <div
                                            class="flex-shrink-0 w-10 h-10">
                                            <img
                                                class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt />
                                        </div> -->
                      <div class="ml-3">
                        <p class="text-[#094B72] whitespace-no-wrap font-bold">
                          Act Number:
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ documentDetails.act_number }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <!-- <div
                                            class="flex-shrink-0 w-10 h-10">
                                            <img
                                                class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt />
                                        </div> -->
                      <div class="ml-3">
                        <p class="text-[#094B72] whitespace-no-wrap font-bold">
                          Short Title:
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      The {{ documentDetails.short_title }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <!-- <div
                                            class="flex-shrink-0 w-10 h-10">
                                            <img
                                                class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt />
                                        </div> -->
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap font-bold">
                          State:
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ getStateName(documentDetails.state_code) }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <!-- <div
                                            class="flex-shrink-0 w-10 h-10">
                                            <img
                                                class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt />
                                        </div> -->
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap font-bold">
                          Act Department:
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ documentDetails.act_department }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <!-- <div
                                            class="flex-shrink-0 w-10 h-10">
                                            <img
                                                class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt />
                                        </div> -->
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap font-bold">
                          Act ID:
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ documentDetails.act_details["Act ID:"] }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <!-- <div
                                            class="flex-shrink-0 w-10 h-10">
                                            <img
                                                class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt />
                                        </div> -->
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap font-bold">
                          Act Year:
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ documentDetails.act_details["Act Year:"] }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <!-- <div
                                            class="flex-shrink-0 w-10 h-10">
                                            <img
                                                class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt />
                                        </div> -->
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap font-bold">
                          Long Title:
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ documentDetails.act_details["Long Title:"] }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <!-- <div
                                            class="flex-shrink-0 w-10 h-10">
                                            <img
                                                class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt />
                                        </div> -->
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap font-bold">
                          Ministry :
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ documentDetails.act_details["Ministry:"] }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <!-- <div
                                            class="flex-shrink-0 w-10 h-10">
                                            <img
                                                class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt />
                                        </div> -->
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap font-bold">
                          Enforcement Date :
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      7th {{ documentDetails.act_details["Enforcement Date:"] }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button>
          <a
            class="px-4 py-2 mr-1 mb-1 bg-[#084acf] outline-none rounded shadow text-white text-xs font-bold uppercase focus:outline-none hover:shadow-md active:bg-gray-600"
            :href="documentDetails.pdf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View PDF</a
          >
        </button>
      </div>
    </section>
    <section
      v-if="!isEmptyOrNull(documentDetails)"
      class="mt-[200px] container mx-auto my-12 p-4 bg-gray-100 border rounded"
    >
      <div itemscope itemtype="https://schema.org/FAQPage">
        <div class="py-10 px-4 container mx-auto">
          <h1 class="font-bold text-center text-xl mb-4">
            Extracted document sections
          </h1>
          <ul class="grid gap-6" data-list="faq">
            <li
              v-for="(value, key) in documentDetails.sections"
              :key="key"
              class="group"
              itemscope
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <input
                class="peer/option-1 hidden"
                type="radio"
                :id="key"
                name="options"
              />
              <label
                class="peer-checked/option-1:bg-[#094B72] peer-checked/option-1:text-white peer-checked/option-1:[&>svg]:rotate-45 block cursor-pointer p-4 pr-12 font-bold border border-slate-900 rounded transition-all duration-150 ease-in-out relative"
                :for="key"
                itemprop="name"
              >
                {{ key }}
                <svg
                  class="block absolute top-1/2 right-4 -mt-[11.5px] transition-all duration-150 ease-in-out"
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11.5L21 11.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 1.5L11 21.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </label>
              <div
                class="grid grid-rows-[0fr] transition-all duration-150 ease-in-out peer-checked/option-1:grid-rows-[1fr]"
                itemscope
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                <div class="min-h-[0px] overflow-hidden">
                  <div
                    class="mt-2 p-4 border border-[#094B72] rounded"
                    itemprop="text"
                  >
                    {{ value }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section v-if="!isEmptyOrNull(documentDetails)" class="mt-20">
      <div
        class="container mx-auto my-12 p-4 bg-gray-100 flex flex-col items-center justify-center border rounded"
      >
        <h1 class="font-bold text-center text-xl mb-4">PDF Tags</h1>
        <p class="mb-3 text-[#94979b]">
          These tags are mentioned in the PDF and have been extracted from it.
        </p>
        <!--label round full-->

        <!--button with label-->

        <div class="p-20 bg-blue-200 text-blue-800 grid grid-cols-3 gap-2">
          <div
            v-for="value of documentDetails.tags"
            :key="value"
            class="bg-blue-100 rounded p-5"
          >
            {{ value }}
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script setup>
import "@/views/LawDataTableView/script.js";
import "https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js";
import { useServerStore } from "@/stores/server";
import Navbar from "@/components/Navbar.vue";

import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { isEmptyOrNull } from "@/shared/utils";
import defaultImage from "@/assets/images/userPro.png";

const route = useRoute();
const documentDetails = ref(null);
const server = useServerStore();
const stateMapping = ref({});
const ranking = ref({});

onMounted(async () => {
  const documentId = route.query.id;
  ranking.value = await server.fetchRanking();

  if (documentId) {
    try {
      stateMapping.value = await server.getStateMapping();
      documentDetails.value = await server.getPageDocumentsDetails(documentId);
    } catch (error) {
      console.error("Failed to fetch document details:", error);
    }
  }
  const faqs = document.querySelectorAll('[data-list="faq"]');
  // console.log(faqs.length);

  if (faqs.length != 0) {
    faqs.forEach(function (faq, index) {
      const items = faq.querySelectorAll(":scope > li");
      // console.log(items.length);
      const faqIndex = index;

      // Get all items
      items.forEach(function (item, index) {
        // Set all variables
        const itemIndex = index;
        const input = item.querySelector(":scope > input");
        const type = input.getAttribute("type");
        const label = item.querySelector(":scope > label");
        const answer = item.querySelector(":scope > label + div");

        // Set aria control field
        label.setAttribute(
          "aria-controls",
          "faq-item-" + faqIndex + "-" + itemIndex
        );
        // Set answer ID
        answer.setAttribute("id", "faq-item-" + faqIndex + "-" + itemIndex);
        // Set label as active tabindex
        // label.setAttribute('tabindex','0');

        // Set aria expanded depending on live
        if (input.checked) {
          // console.log('checked');
          label.setAttribute("aria-expanded", "true");
        } else {
          // console.log('not checked');
        }
      });

      // Check if a FAQ is changed
      faq.addEventListener("change", function (e) {
        const input = e.target;
        const item = e.target.parentNode;
        const label = e.target.nextElementSibling;
        const type = e.target.getAttribute("type");

        // Check if type is checkbox
        if (type == "checkbox") {
          // console.log(label);
          if (input.checked) {
            // console.log('checked');
            label.setAttribute("aria-expanded", "true");
          } else {
            // console.log('not checked');
            label.setAttribute("aria-expanded", "false");
          }
        }

        if (type == "radio") {
          console.log(type);
        }
      });
    });
  }
});

const getStateName = (value) => {
  if (stateMapping.value.length === 0) {
    return "Unknown State";
  }
  const state = stateMapping.value.filter(
    (state) => state.state_code === value
  );

  return state ? state[0].state_name : "Unknown State";
};
</script>
