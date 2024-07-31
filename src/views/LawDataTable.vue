<template>
  <div>
    <Navbar class="z-[99]" :hide-me="false" />

    <!-- component -->
    <body class="antialiased font-sans bg-gray-200">
      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">Database</h2>
          </div>
          <div class="my-2 flex sm:flex-row flex-col">
            <div class="flex flex-row mb-1 sm:mb-0">
              <div class="relative">
                <select
                  aria-placeholder="State"
                  v-model="search_state"
                  class="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="">State</option>
                  <option
                    v-for="(state, index) of stateMapping"
                    :value="state.state_code"
                    :key="index"
                  >
                    {{ state.state_name }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class=" ">
              <input
                v-model="search_dept"
                placeholder="Department"
                class="h-full border border-gray-400 border-b block pl-2 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
            <div class="">
              <input
                type="number"
                v-model="search_act_number"
                placeholder="ACT Number"
                class="h-full rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-2 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
            <div class="relative">
              <button
                @click="search"
                class="px-4 py-2 mr-1 mb-1 bg-[#084acf] outline-none rounded shadow text-white text-xs font-bold uppercase focus:outline-none hover:shadow-md active:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </div>

          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
              class="inline-block min-w-full shadow rounded-lg overflow-hidden"
            >
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Enactment Date
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Act Number
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Short Title
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      State
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      ACT Dept
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      View PDF
                    </th>
                  </tr>
                </thead>
                <tbody v-for="(doc, index) in documents">
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
                          <p class="text-gray-900 whitespace-no-wrap">
                            {{ doc.enactment_date }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ doc.act_number }}
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ doc.short_title }}
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ getStateName(doc.state_code) }}
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ doc.act_department }}
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      <span
                        @click="showDetails(doc.id)"
                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                      >
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">View</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
              >
                <span class="text-xs xs:text-sm text-gray-900">
                  Showing {{ page_count }} of
                  {{ total_page_count["total_pages"] }} Entries
                </span>
                <div class="inline-flex mt-2 xs:mt-0">
                  <button
                    @click="prevPage"
                    class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                  >
                    Prev
                  </button>
                  <button
                    @click="nextPage"
                    class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
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
import Navbar from "@/components/Navbar.vue";
import { Modal, Popconfirm, initTE } from "tw-elements";

import { onMounted } from "vue";
import { useServerStore } from "@/stores/server";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { isEmptyOrNull } from "@/shared/utils";
import defaultImage from "@/assets/images/userPro.png";

const page_count = ref(1);
const router = useRouter();
const total_page_count = ref(0);
const server = useServerStore();
const stateMapping = ref({});
const documents = ref([]);
const search_act_number = ref("");
const search_dept = ref("");
const search_state = ref("");
const ranking = ref({});

onMounted(async () => {
  initTE({ Modal, Popconfirm });
  initialRun();
  ranking.value = await server.fetchRanking();
});

watch(search_state, (value) => {
  console.log(value);
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

const search = async () => {
  if (
    !isEmptyOrNull(search_act_number.value) ||
    !isEmptyOrNull(search_dept.value) ||
    !isEmptyOrNull(search_state.value)
  ) {
    console.log(search_state.value, search_act_number.value, search_dept.value);
    documents.value = [];

    documents.value = await server.getPageDocuments(
      page_count.value,
      10,
      !isEmptyOrNull(search_state.value) ? [search_state.value.toString()] : [],
      !isEmptyOrNull(search_act_number.value)
        ? [search_act_number.value.toString()]
        : [],
      "",
      search_dept.value
    );
    total_page_count.value = await server.getPageCount(
      10,
      !isEmptyOrNull(search_state.value) ? [search_state.value.toString()] : [],
      !isEmptyOrNull(search_act_number.value)
        ? [search_act_number.value.toString()]
        : [],
      "",
      search_dept.value
    );
  }
};

const initialRun = async () => {
  total_page_count.value = await server.getPageCount(10);

  documents.value = await server.getPageDocuments(page_count.value, 10);
  stateMapping.value = await server.getStateMapping();
};

const showDetails = (id) => {
  router.push({ name: "LawDataTableView", query: { id: id } });
};

const nextPage = async () => {
  documents.value = [];

  page_count.value = page_count.value + 1;
  if (page_count.value > total_page_count.value["total_pages"]) {
    page_count.value = total_page_count.value["total_pages"];
    documents.value = await server.getPageDocuments(page_count.value, 10);

    return;
  }
  documents.value = await server.getPageDocuments(page_count.value, 10);
};
const prevPage = async () => {
  documents.value = [];
  page_count.value = page_count.value - 1;
  if (page_count.value < 1) {
    page_count.value = 1;
    documents.value = await server.getPageDocuments(page_count.value, 10);
    return;
  }
  documents.value = await server.getPageDocuments(page_count.value, 10);
};
</script>
