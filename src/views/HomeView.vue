<template class="overflow-hidden">
  <!-- For Document Upload -->
  <div
    v-if="showUploadFile"
    class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  >
    <div
      class="relative overflow-hidden flex min-h-[calc(100%-1rem)] w-[580px] translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[600px]"
    >
      <div
        class="relative overflow-hidden pointer-events-auto flex w-full flex-col rounded-xl border-none bg-transparent bg-clip-padding text-current outline-none dark:bg-neutral-600 px-16 py-[60px]"
      >
        <div
          class="w-[420px] bg-white p-8 rounded-2xl flex flex-col gap-12 border"
        >
          <button
            @click="closeFileUpload"
            type="button"
            class="bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
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
          <div class="text-center">
            <h1 class="text-2xl font-medium">Upload Your Product Document</h1>
            <p class="text-gray-400">Files Should be less than 5 MB</p>
          </div>

          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <div class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="Document"
                    width="50"
                    height="50"
                  >
                    <path
                      d="M19,2H7C5.9,2,5,2.9,5,4v16c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V6L19,2z M17,18H7v-2h10V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z M16,4.5V8H13V4.5H16z"
                      fill="#7c7c7c"
                      class="color000000 svgShape w-10 h-10 mb-4"
                    />
                  </svg>
                </div>

                <p class="mb-2 text-sm text-gray-500">
                  <span class="font-semibold underline text-blue-500"
                    >Click to upload</span
                  >
                  or drag and drop
                </p>
                <p class="text-xs text-gray-500">PDF</p>
              </div>
              <input
                ref="fileDocmentInput"
                type="file"
                accept=".pdf"
                class="hidden"
                @change="handleDocumentUpload"
                id="dropzone-file"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- For Image Upload -->
  <div
    v-if="showImageUploadFile"
    class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  >
    <div
      class="relative overflow-hidden flex min-h-[calc(100%-1rem)] w-[580px] translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[600px]"
    >
      <div
        class="relative overflow-hidden pointer-events-auto flex w-full flex-col rounded-xl border-none bg-transparent bg-clip-padding text-current outline-none dark:bg-neutral-600 px-16 py-[60px]"
      >
        <div
          class="w-[420px] bg-white p-8 rounded-2xl flex flex-col gap-12 border"
        >
          <button
            @click="closeImageFileUpload"
            type="button"
            class="bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
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
          <div class="text-center">
            <h1 class="text-2xl font-medium">
              Upload Your Photos of the Product or the label
            </h1>
            <p class="text-gray-400">Files Should be less than 5 MB</p>
          </div>

          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <div class="w-[50px] h-[50px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="Camera"
                  >
                    <path
                      d="M10 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8-3h-2.4a.888.888 0 0 1-.789-.57l-.621-1.861A.89.89 0 0 0 13.4 2H6.6c-.33 0-.686.256-.789.568L5.189 4.43A.889.889 0 0 1 4.4 5H2C.9 5 0 5.9 0 7v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 11a5 5 0 0 1-5-5 5 5 0 1 1 10 0 5 5 0 0 1-5 5zm7.5-7.8a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z"
                      fill="#7c7c7c"
                      class="color000000 svgShape w-2 h-2 mb-4"
                    ></path>
                  </svg>
                </div>

                <p class="mb-2 text-sm text-gray-500">
                  <span class="font-semibold underline text-blue-500"
                    >Click to upload</span
                  >
                  or drag and drop
                </p>
                <p class="text-xs text-gray-500">JPG or JPeG</p>
              </div>
              <input
                ref="inputFile"
                type="file"
                accept=".jpg, .jpeg"
                class="hidden"
                multiple
                @change="handleFileUpload"
                id="dropzone-file"
              />
            </label>
          </div>

          <section class="bg-white">
            <div class=" ">
              <div v-if="imageUrls.length > 0" class="flex">
                <div
                  v-for="(image, index) in imageUrls"
                  class="mb-4 h-[50px] w-[50px] flex"
                >
                  <div class="ml-1 flex w-[50px]">
                    <img
                      :src="image"
                      alt="Uploaded Image"
                      class="max-w-full h-auto border rounded"
                    />
                    <button
                      @click="removeImage(index)"
                      type="button"
                      class="ms-auto mr-2 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
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
                  </div>
                </div>
              </div>
              <div class="mx-auto max-w-screen-md sm:text-center">
                <form action="#">
                  <div
                    class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0"
                  >
                    <div class="relative w-full">
                      <input
                        class="block p-3 w-full text-sm text-gray-900 rounded-lg border sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter image details here"
                        type="text"
                        v-model="textarea"
                        @keydown.enter="sendMessage"
                        id="text"
                      />
                    </div>
                    <div>
                      <button
                        @click="sendMessage"
                        type="button"
                        class="py-3 px-5 w-full text-sm font-medium text-center even:rounded-lg border cursor-pointer bg-primary-700 sm:rounded-none sm:rounded-r-lg ring-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full bg-white flex relative">
    <ToastMessage
      v-if="imageLimitCrossed"
      @click="
        () => {
          imageLimitCrossed = false;
        }
      "
      message="Max 3 Images to upload"
      class="bg-red-500"
    />
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
    <div
      v-if="showSideBar"
      class="min-w-[20%] max-w-[20%] w-[20%] h-auto bg-[#0D3357] px-5 pt-10 pb-10"
    >
      <RouterLink to="/main">
        <img
          src="@/assets/images/bot.png"
          alt="logo"
          class="h-[50px] w-[50px] mx-auto border-b border-[#D8D8D8]"
        />
      </RouterLink>
      <h1 class="mt-10 font-normal text-[22px] leading-[25px] text-white">
        Check the compliance's for your products
      </h1>
      <div class="mt-6">
        <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->

        <!-- <div class="relative mt-10" data-te-dropdown-ref>
                    <button
                        class="flex justify-between items-center py-4 whitespace-nowrap border-2 border-[#38AC0FF] rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                        type="button" id="dropdownMenuButton2" style="width: -webkit-fill-available;"
                        data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init data-te-ripple-color="light">
                        Choose your state
                        <span class="ml-2 w-2">
                            <img src="@/assets/images/down-arrow.svg" alt="">

                        </span>
                    </button>
                    <ul class="absolute z-[1000] h-[200px] overflow-auto sidebar p-3 float-left m-0 hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                        aria-labelledby="dropdownMenuButton2" style="width: -webkit-fill-available;"
                        data-te-dropdown-menu-ref>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#" data-te-dropdown-item-ref>kerala</a>
                        </li>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#" data-te-dropdown-item-ref>Karnataka</a>
                        </li>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#" data-te-dropdown-item-ref>tamilnadu</a>
                        </li>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#" data-te-dropdown-item-ref>kerala</a>
                        </li>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#" data-te-dropdown-item-ref>Karnataka</a>
                        </li>
                        <li>
                            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                href="#" data-te-dropdown-item-ref>tamilnadu</a>
                        </li>
                    </ul>
                </div> -->

        <div class="relative mt-10" data-te-dropdown-ref>
          <button
            class="flex justify-between items-center py-4 whitespace-nowrap border-2 border-[#38AC0FF] rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
            type="button"
            id="dropdownMenuButton3"
            style="width: -webkit-fill-available"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {{ selectedCategory }}
            <span class="ml-2 w-2">
              <img src="@/assets/images/down-arrow.svg" alt="" />
            </span>
          </button>
          <ul
            class="absolute z-[1000] h-[120px] sidebar p-3 float-left m-0 hidden min-w-max list-none overflow-auto rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton3"
            style="width: -webkit-fill-available"
            data-te-dropdown-menu-ref
          >
            <li v-for="(category, index) in categories" :key="index">
              <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                @click="selectCategory(category)"
                data-te-dropdown-item-ref
                >{{ category }}</a
              >
            </li>
          </ul>
        </div>
        <div class="mt-10">
          <input
            type="text"
            id="1"
            v-model="state"
            class="h-[51px] p-4 w-full outline-0 rounded-[5px] border-2 border-[#8AC0FF] placeholder:font-medium placeholder:text-sm placeholder:text-[#5d5c5c]"
            placeholder="Enter the State"
          />
        </div>

        <div class="mt-10">
          <input
            type="text"
            id="2"
            v-model="productName"
            class="h-[51px] p-4 w-full outline-0 rounded-[5px] border-2 border-[#8AC0FF] placeholder:font-medium placeholder:text-sm placeholder:text-[#5d5c5c]"
            placeholder="Enter the Product"
          />
        </div>

        <div class="mt-10 mb-7">
          <!-- <textarea
                        class="p-4 h-[110px] outline-0 border-2 border-[#8AC0FF] rounded-[5px] w-full placeholder:font-medium placeholder:text-sm placeholder:text-[#979797]"
                        placeholder="Other Specific Details Related to Products "></textarea> -->
        </div>
        <div class="flex justify-center w-full mx-auto">
          <button
            @click="sendMessage()"
            type="button"
            class="bg-[#5D81F3] w-full rounded px-[65px] py-2.5"
          >
            <h1 class="text-white text-xs font-normal">SUBMIT</h1>
          </button>
        </div>
        <div class="mt-8">
          <!-- <div class="flex items-center">
                        <img src="@/assets/images/enlarge.svg" alt="FAQ">
                        <p class="font-medium text-lg text-white pl-[19px]">Updates & FAQ</p>
                    </div> -->
        </div>
      </div>
    </div>

    <div class="min-w-[80%] w-[80%]" :class="showSideBarClass">
      <Navbar :hide-me="!showSideBar" :show-all-laws="true" />
      <div class="bg-[#d1cccc2e] pl-7 pr-[35px] pb-7 pt-[40px]">
        <div
          ref="chatContainer"
          class="overflow-auto h-customh1 gray-scroll pt-[30px] pr-[15px]"
        >
          <!-- <RouterLink
                    to="/defender"
                    >
                    <img src="@/assets/images/bannerNew.png" alt="chat-bot" class=""></RouterLink> -->
          <div class="h-full bg-white">
            <div class="rounded-[5px] flex-grow bg-white px-[46px] py-7">
              <div v-for="(message, index) in messages" :key="index">
                <div v-if="message.bot" class="flex items-start">
                  <img
                    class="h-[45px] w-[45px] rounded"
                    src="@/assets/images/profile_bot.png"
                    alt="chat"
                  />
                  <div class="flex items-start ml-[14px]">
                    <p
                      v-html="marked(message.bot)"
                      class="font-medium text-[20px] text-[#1F263E] w-full"
                    ></p>
                  </div>
                </div>
                <div v-else class="flex mt-[20px] mb-[20px] items-start">
                  <img class="h-[45px] w-[45px] rounded-full" :src="profile" />
                  <div class="items-start mt-[15px] ml-[18px]">
                    <div class="flex">
                      <div v-if="imageUrls" class="flex">
                        <div
                          v-for="(image, index) in message.user.images"
                          class="mt-4 h-[50px] w-[50px] flex"
                        >
                          <div class="ml-1 flex w-[50px]">
                            <img
                              :src="image"
                              alt="Uploaded Image"
                              class="max-w-full h-auto border rounded"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="message.user.pdf">
                      <p>
                        File Name: <span>{{ message.user.pdf }}</span>
                      </p>
                    </div>

                    <p class="font-medium text-[20px] text-[#002AB1]">
                      {{ message.user.message }}
                    </p>
                  </div>
                </div>
              </div>

              <div v-show="messageLoading" class="flex items-center">
                <img
                  class="h-[45px] w-[45px]"
                  src="@/assets/images/bot.png"
                  alt="chat"
                />
                <div class="flex items-start ml-[14px]">
                  <p class="font-medium text-[20px] text-[#1F263E] w-full">
                    Loading...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <button
              v-if="fileName"
              @click="removeDocument"
              type="button"
              class="bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
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
            <p v-if="fileName">Selected file: {{ fileName }}</p>
          </div>
        </div>
        <div class="mt-[18px] relative justify-center">
          <input
            @keydown.enter="sendMessage"
            v-model="textarea"
            placeholder="What would you like to know?"
            type="text"
            class="w-full border border-[#D1CCCC] text-[20px] outline-0 py-5 pl-5 pr-14 rounded-[6px]"
          />
          <label
            @click="openUploadFile"
            class="flex items-center absolute right-[92px] top-[21px] cursor-pointer"
          >
            <div class="w-[20px] h-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="Document"
                width="20"
                height="20"
              >
                <path
                  d="M19,2H7C5.9,2,5,2.9,5,4v16c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V6L19,2z M17,18H7v-2h10V18z M17,14H7v-2h10V14z M17,10H7V8h10V10z M16,4.5V8H13V4.5H16z"
                  fill="#7c7c7c"
                  class="color000000 svgShape w-2 h-2 mb-4"
                />
              </svg>
            </div>
          </label>

          <label
            @click="openImageUploadFile"
            class="flex items-center absolute right-16 top-[21px] cursor-pointer"
          >
            <div class="w-[20px] h-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                id="Camera"
              >
                <path
                  d="M10 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8-3h-2.4a.888.888 0 0 1-.789-.57l-.621-1.861A.89.89 0 0 0 13.4 2H6.6c-.33 0-.686.256-.789.568L5.189 4.43A.889.889 0 0 1 4.4 5H2C.9 5 0 5.9 0 7v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 11a5 5 0 0 1-5-5 5 5 0 1 1 10 0 5 5 0 0 1-5 5zm7.5-7.8a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z"
                  fill="#7c7c7c"
                  class="color000000 svgShape w-2 h-2 mb-4"
                ></path>
              </svg>
            </div>
          </label>

          <img
            @click="sendMessage"
            src="@/assets/images/send.svg"
            alt="send"
            class="absolute right-6 top-[21px] cursor-pointer"
          />
        </div>
        <div class="mt-2">
          <p class="font-normal text-[#b49898] text-md text-center">
            Kindly wait a minute for the system to generate a response as this
            is an MVP
          </p>
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
                      {{ index }}
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
import { onMounted, ref, onUnmounted, computed } from "vue";

import Navbar from "@/components/Navbar.vue";
import "@/assets/js/lib/jquery-3.2.1.min.js";
// import "@/assets/js/lib/tw-elements/dist/js/index.min.js";
import { Tooltip, initTE, Dropdown, Modal } from "tw-elements";
import * as constant from "@/shared/constant";
import defaultImage from "@/assets/images/userPro.png";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { useServerStore } from "@/stores/server";
import { isEmptyOrNull } from "@/shared/utils";
import { useRoute } from "vue-router";

import ToastMessage from "@/components/ToastMessage.vue";

const state = ref("");

const inputFile = ref(null);
const fileDocmentInput = ref(null);
const fileName = ref(null);
const selectedCategory = ref("Choose Your Category");
const messageLoading = ref(false);
const isBusy = ref(false);
const productName = ref("");
const imageUrls = ref([]);
const imageLimitCrossed = ref(false);
const showUploadFile = ref(false);
const showImageUploadFile = ref(false);

const showSideBar = ref(true);
const server = useServerStore();
const router = useRoute();
const ranking = ref({});
let listBase64 = [];
let listDocBase64 = [];
const messages = ref([
  {
    bot: "Connecting...",
  },
]);
const textarea = ref("What are the rules and regulations to sell this online?");
let socket;
const showSideBarClass = computed(() => {
  return showSideBar.value ? "w-[80%]" : "w-full";
});

onMounted(async () => {
  initTE({ Tooltip, Dropdown, Modal });

  if (router.query.showUploadFile) {
    showUploadFile.value = router.query.showUploadFile;
  }

  if (router.query.type) {
    if (router.query.type == "label") {
      textarea.value = "Is this product package label legally compliant?";
    } else if (router.query.type == "product") {
      textarea.value = "What legal compliances apply to this product?";
    } else if (router.query.type == "laws") {
      textarea.value =
        "What are all the rules and regulations I need to follow to be completely compliant while selling online?";
    }
  } else {
    textarea.value = "";
  }

  if (router.query.showSideBar) {
    showSideBar.value = router.query.showSideBar == "false" ? false : true;
  }
  ranking.value = await server.fetchRanking();
  initialConnection();
});

onUnmounted(() => {
  disconnectSocket();
});

const openUploadFile = () => {
  showUploadFile.value = !showUploadFile.value;
};

//new
const closeFileUpload = () => {
  showUploadFile.value = false;
  removeDocument();
};

const openImageUploadFile = () => {
  showImageUploadFile.value = !showImageUploadFile.value;
};

const closeImageFileUpload = () => {
  showImageUploadFile.value = false;
  imageUrls.value = [];
  listBase64 = [];
};

const handleDocumentUpload = () => {
  const file = fileDocmentInput.value.files[0];
  if (file) {
    showUploadFile.value = false;
    fileName.value = file.name;
    try {
      const reader = new FileReader();
      let base64String = "";

      reader.onloadend = (e) => {
        base64String = e.target.result.split(",")[1];
        listDocBase64.push(base64String);
      };

      reader.readAsDataURL(file);
    } catch (e) {
      console.log("Error base64: ", e);
    }
  }
};

const handleFileUpload = () => {
  if (
    inputFile.value.files &&
    inputFile.value.files.length > 0 &&
    inputFile.value.files.length <= 5 &&
    imageUrls.value.length <= 5
  ) {
    for (let i = 0; i < inputFile.value.files.length; i++) {
      try {
        imageUrls.value.push(URL.createObjectURL(inputFile.value.files[i]));
        const file = inputFile.value.files[i];
        const reader = new FileReader();
        let base64String = "";

        reader.onloadend = (e) => {
          base64String = e.target.result.split(",")[1];
          listBase64.push(base64String);
        };

        reader.readAsDataURL(file);
      } catch (e) {
        console.log("Error base64: ", e);
      }
    }
  } else if (inputFile.value.files.length > 7 && imageUrls.value.length > 7) {
    inputFile.value.files[5] = null;
    imageLimitCrossed.value = true;
    setTimeout(() => {
      imageLimitCrossed.value = false;
    }, 3000);
  }
};

const removeImage = (index) => {
  if (imageUrls.value.length === 1) {
    imageUrls.value = [];
    listBase64.value = [];
    return;
  } else if (index.length > 1) {
    imageUrls.value.splice(index, 1);
    listBase64.value.splice(index, 1);
  }
};

const removeDocument = () => {
  fileDocmentInput.value = "";
  fileName.value = "";
  listDocBase64.value = [];
};

let messageListener = (event) => {
  if (messages.value[0].bot.includes("Connecting...")) {
    messages.value = [];
  }
  messages.value.push({
    bot: event.data,
  });
  messageLoading.value = false;
  autoScrollDown();
};

let errorListener = (error) => {
  console.error("WebSocket error:", error);
};

function initialConnection() {
  socket = new WebSocket(`${constant.socketEndpoint}/gpt`);

  // Listen for messages from the server
  socket.addEventListener("message", messageListener);

  // Handle socket errors
  socket.addEventListener("error", errorListener);
}

function disconnectSocket() {
  socket.removeEventListener("message", messageListener);
  socket.removeEventListener("error", errorListener);
  socket.close();
}

const profile = computed(() => {
  if (
    !isEmptyOrNull(server.userDetails) &&
    !isEmptyOrNull(server.userDetails["user_image"])
  ) {
    return server.userDetails["user_image"];
  } else {
    return defaultImage;
  }
});

const categories = [
  "None",
  "Fashion",
  "Food & beverage",
  "Electronic",
  "Agriculture",
];

const selectCategory = (category) => {
  selectedCategory.value = category;
};

const chatContainer = ref(null);

const autoScrollDown = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
};

const sendMessage = () => {
  if (socket && socket.readyState === WebSocket.OPEN && textarea.value != "") {
    messageLoading.value = true;
    let values = JSON.stringify({
      question: textarea.value,
      state: state.value,
      category: !["Choose Your Category", "None"].includes(
        selectedCategory.value
      )
        ? selectedCategory.value
        : "",
      "product name": productName.value,
      images: listBase64 || [],
      pdf: listDocBase64[0] || "",
    });
    messages.value.push({
      user: {
        pdf: fileName.value,
        images: imageUrls.value,
        message: textarea.value,
      },
    });
    console.log("values: ", values);
    socket.send(values);
    resetDefault();
  }
};

const resetDefault = () => {
  textarea.value = "";
  listBase64 = [];
  listDocBase64 = [];
  imageUrls.value = [];
  showUploadFile.value = false;
  showImageUploadFile.value = false;
  setTimeout(() => {
    autoScrollDown();
  }, 500);
  removeDocument();
};
</script>
