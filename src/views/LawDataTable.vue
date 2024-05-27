<template>
  <div>
    <div
      class="pl-8 pr-[60px] py-2 flex justify-between items-center shadow-lg sticky"
    >
      <div class="flex items-center">
        <img
          class="h-[50px] w-[50px]"
          src="@/assets/images/bot.png"
          alt="logo"
        />
        <p class="ml-3 font-normal text-[#1F263E] text-[19px]">
          ONDC <br />
          DASHBOARD
        </p>
      </div>
      <div class="flex items-center">
        <!-- <Navbar /> -->
      </div>
    </div>
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
                  class="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option>All State</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Odisa</option>
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

              <div class="relative">
                <select
                  class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                  <option>All</option>
                  <option>Active</option>
                  <option>Inactive</option>
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
            <div class="block relative">
              <input
              v-model="search_dept"
                placeholder="Department"
                class="appearance-none h-full border border-gray-400 border-b block pl-2 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
            <div class="block relative">
              <input
                type="number"
                v-model="search_act_number"
                placeholder="ACT Number"
                class="appearance-none h-full rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-2 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
            <div class="relative">
              <button
                type="button"
                class="ml-3 py-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 text-center me-2 mb-2"
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
                      <span @click="showDetails(doc.id)"
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
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { onMounted } from "vue";
import { useServerStore } from "@/stores/server";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { isEmptyOrNull } from "@/shared/utils";

const page_count = ref(1);
const router = useRouter();
const total_page_count = ref(0);
const server = useServerStore();
const stateMapping = ref({});
const documents = ref([]);
const search_act_number = ref("");
const search_dept = ref("");

onMounted(() => {
  initialRun();
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

const search = () =>{
  if(!isEmptyOrNull(search_act_number.value) || !isEmptyOrNull(search_act_number.value)){
    documents.value = []
    documents.value = server.searchDocuments(search_act_number.value, search_dept.value);
  }
}

const initialRun = async () => {
  console.log("initialRun");
  total_page_count.value = await server.getPageCount(10);

  documents.value = await server.getPageDocuments(page_count.value, 10);
  stateMapping.value = await server.getStateMapping();
  console.log(documents.value);
};

const showDetails = (id) => {
  console.log("showDetails", id);
  router.push({ name: "LawDataTableView", query: { id: id } });
};

const nextPage = async () => {
  console.log("nextPage");
  documents.value = [];

  page_count.value = page_count.value + 1;
  if (page_count.value > total_page_count.value["total_pages"]) {
      page_count.value = total_page_count.value["total_pages"];
      documents.value = await server.getPageDocuments(page_count.value, 10);
   
      return;
    }
    documents.value = await server.getPageDocuments(page_count.value, 10);
  

}
const prevPage = async () => {
  documents.value = [];
  console.log("prevPage");
  page_count.value = page_count.value - 1;
  if (page_count.value < 1) {
    page_count.value = 1;
    documents.value = await server.getPageDocuments(page_count.value, 10);
    return;
  }
  documents.value = await server.getPageDocuments(page_count.value, 10);
};


</script>
