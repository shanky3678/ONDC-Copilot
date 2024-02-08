<template>
    <div class="pl-8 pr-[60px] py-2 flex justify-between items-center">
        <div class="flex items-center">
            <img src="@/assets/images/government-of-india.svg" alt="logo">
            <p class="ml-3 font-normal text-[#1F263E] text-[19px]">ONDC <br> DASHBAORD</p>
        </div>
        <div class="flex items-center">
            <div class="relative">
                <button type="button" class="relative chat-open">
                    <img src="@/assets/images/Shape.svg" alt="bell-icon">
                    <p class="bg-[#F56C89] px-2 py-1 rounded-[50%] absolute -top-4 -right-3 text-sm text-white">1</p>
                </button>
                <ul class="chat-close hidden absolute top-[27px] right-0 z-[9] w-[300px] h-[400px] overflow-auto sidebar bg-white rounded-lg border border-[#ADADAD]">
                    <p class="sticky top-0 py-3 px-4 w-full bg-[#DDDDDD] text-black font-medium text-base rounded-tl-lg rounded-tr-lg">Notification</p>
                    <ul class="p-3">
                        <li class="text-[#000000] font-normal text-base border-b border-[#ADADAD] py-2"> <a href="#" class="text-[#0D3357] font-semibold text-base">Eugene</a> ordered 2 copies of <span class="text-[#0D3357] font-semibold text-base">OEM license</span> <span class="text-[#988e8e] font-normal text-base">14 minutes ago</span></li>
                        <li class="text-[#000000] font-normal text-base border-b border-[#ADADAD] py-2"> <a href="#" class="text-[#0D3357] font-semibold text-base">Eugene</a> ordered 2 copies of <span class="text-[#0D3357] font-semibold text-base">OEM license</span> <span class="text-[#988e8e] font-normal text-base">14 minutes ago</span></li>
                        <li class="text-[#000000] font-normal text-base border-b border-[#ADADAD] py-2"> <a href="#" class="text-[#0D3357] font-semibold text-base">Eugene</a> ordered 2 copies of <span class="text-[#0D3357] font-semibold text-base">OEM license</span> <span class="text-[#988e8e] font-normal text-base">14 minutes ago</span></li>
                        <li class="text-[#000000] font-normal text-base border-b border-[#ADADAD] py-2"> <a href="#" class="text-[#0D3357] font-semibold text-base">Eugene</a> ordered 2 copies of <span class="text-[#0D3357] font-semibold text-base">OEM license</span> <span class="text-[#988e8e] font-normal text-base">14 minutes ago</span></li>
                        <li class="text-[#000000] font-normal text-base border-b border-[#ADADAD] py-2"> <a href="#" class="text-[#0D3357] font-semibold text-base">Eugene</a> ordered 2 copies of <span class="text-[#0D3357] font-semibold text-base">OEM license</span> <span class="text-[#988e8e] font-normal text-base">14 minutes ago</span></li>
                        <li class="text-[#000000] font-normal text-base border-b border-[#ADADAD] py-2"> <a href="#" class="text-[#0D3357] font-semibold text-base">Eugene</a> ordered 2 copies of <span class="text-[#0D3357] font-semibold text-base">OEM license</span> <span class="text-[#988e8e] font-normal text-base">14 minutes ago</span></li>
                    </ul>
                </ul>
            </div>
            
            <img src="@/assets/images/Setting.svg" alt="chat" class="ml-7">
            <img src="@/assets/images/INDIA.svg" alt="chat" class="ml-7">
            <img src="@/assets/images/Profile.svg" alt="chat" class="ml-7">
        </div>
    </div>
    <div class="w-full bg-[#d1cccc2e] relative pt-[64px] pl-10 pr-[62px] pb-11 flex h-customh2 overflow-auto sidebar">
        <div class="w-[20%] mt-4">
            <h1 class="font-bold text-[#079ADC] text-[90px]">Hello</h1>
            <p class="font-medium text-sm text-[#979797] mt-1">Welcome to ONDC uploader</p>
            <p class="mt-10 font-normal text-base text-[#979797]">Lorem ipsum dolor sit amet consectetur. Nibh semper
                dolor sed sit mauris euismod ut sagittis. Sit urna vestibulum in arcu. Pharetra faucibus porta neque vel
                morbi. Venenatis phasellus libero nec ligula.</p>
            <p class="mt-5 font-normal text-base text-[#979797]">Lorem ipsum dolor sit amet consectetur. Nibh semper
                dolor sed sit mauris euismod ut sagittis. Sit urna vestibulum in arcu. Pharetra faucibus porta neque vel
                morbi. Venenatis phasellus libero nec ligula.</p>
        </div>
        <div class="w-[80%] ml-6">
            <div class="w-full border border-[#DFDFDF] pt-[55px] px-[55px] pb-8 rounded-lg bg-white">
                <div class="flex items-center justify-between">
                    <p class="font-semibold text-[#1F263E] text-[25px] mr-10">Check if your upload is already in the
                        database</p>
                    <div class="relative">
                        <input type="text"
                            class="w-[552px] py-4 pr-4 pl-12 rounded-lg border border-[#B7B7B7] outline-0">
                        <img src="@/assets/images/mingcute_search-fill.svg" alt="chat" class="ml-7 absolute left-[-10px] top-4">
                    </div>
                </div>
                <div class="mt-6">
                    <div class="h-custom h3 overflow-auto overflow-x-hidden sidebar shadow-xl">
                    <table class=" table-auto w-full shadow-lg rounded-bl-lg rounded-br-lg">
                        <thead class=" bg-[#F5F5F5] border-b border-[#E1CFFF] sticky top-0">
                            <th class="min-w-[250px] rounded-tl-lg rounded-bl-lg px-5 py-[13px] flex bg-[#F5F5F5]">
                                <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                <p class="ml-5 font-medium text-sm justify-start flex">Name</p>
                            </th>
                            <th class="min-w-[250px] px-5 py-[13px] text-start bg-[#F5F5F5]">Date</th>
                            <th class="min-w-[250px] px-5 py-[13px] text-start bg-[#F5F5F5]">Category</th>
                            <th
                                class="min-w-[250px] px-5 py-[13px] text-start rounded-tr-lg rounded-bt-lg bg-[#F5F5F5]">
                                PDF View</th>
                        </thead>
                        <tbody style="overflow-y: auto;">
                            <tr class="w-full border-b border-[#E1CFFF] hover:bg-[#E1CFFF] bg-white">
                                <td class="min-w-[250px] p-6 flex items-center">
                                    <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                    <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                </td>
                                <td class="min-w-[250px] p-6">21/04/2024</td>
                                <td class="min-w-[250px] p-6">Your Friend Buzz</td>
                                <td class="min-w-[250px] p-6"><a href="#"><u>View the PDF</u></a></td>
                            </tr>
                            
                            <tr class="w-full border-b border-[#E1CFFF] hover:bg-[#E1CFFF] ">
                                <td class="min-w-[250px] p-6 flex items-center">
                                    <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                    <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                </td>
                                <td class="min-w-[250px] p-6">21/04/2024</td>
                                <td class="min-w-[250px] p-6">Your Friend Buzz</td>
                                <td class="min-w-[250px] p-6 cursor-pointer"><a href="#"><u>View the PDF</u></a></td>
                            </tr>
                            <tr class="w-full border-b border-[#E1CFFF] hover:bg-[#E1CFFF] ">
                                <td class="min-w-[250px] p-6 flex items-center">
                                    <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                    <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                </td>
                                <td class="min-w-[250px] p-6">21/04/2024</td>
                                <td class="min-w-[250px] p-6">Your Friend Buzz</td>
                                <td class="min-w-[250px] p-6 cursor-pointer"><a href="#"><u>View the PDF</u></a></td>
                            </tr>
                            <tr class="w-full border-b border-[#E1CFFF] hover:bg-[#E1CFFF] ">
                                <td class="min-w-[250px] p-6 flex items-center">
                                    <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                    <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                </td>
                                <td class="min-w-[250px] p-6">21/04/2024</td>
                                <td class="min-w-[250px] p-6">Your Friend Buzz</td>
                                <td class="min-w-[250px] p-6 cursor-pointer"><a href="#"><u>View the PDF</u></a></td>
                            </tr>
                            <tr class="w-full border-b border-[#E1CFFF] hover:bg-[#E1CFFF] ">
                                <td class="min-w-[250px] p-6 flex items-center">
                                    <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                    <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                </td>
                                <td class="min-w-[250px] p-6">21/04/2024</td>
                                <td class="min-w-[250px] p-6">Your Friend Buzz</td>
                                <td class="min-w-[250px] p-6 cursor-pointer"><a href="#"><u>View the PDF</u></a></td>
                            </tr>
                            <tr class="w-full border-b border-[#E1CFFF] hover:bg-[#E1CFFF] ">
                                <td class="min-w-[250px] p-6 flex items-center">
                                    <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                    <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                </td>
                                <td class="min-w-[250px] p-6">21/04/2024</td>
                                <td class="min-w-[250px] p-6">Your Friend Buzz</td>
                                <td class="min-w-[250px] p-6 cursor-pointer"><a href="#"><u>View the PDF</u></a></td>
                            </tr>
                            <tr class="w-full border-b border-[#E1CFFF] hover:bg-[#E1CFFF] ">
                                <td class="min-w-[250px] p-6 flex items-center">
                                    <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                    <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                </td>
                                <td class="min-w-[250px] p-6">21/04/2024</td>
                                <td class="min-w-[250px] p-6">Your Friend Buzz</td>
                                <td class="min-w-[250px] p-6 cursor-pointer"><a href="#"><u>View the PDF</u></a></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div class="mt-[80px] flex items-center">
                        <input
                            class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-7 w-7 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#C8C8C8] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[7px] checked:after:block checked:after:h-[19px] checked:after:w-[9px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] "
                            type="checkbox"
                            id="bd1">
                            <label for="bd1" class="ml-4 cursor-pointer">Similar file exists here, but my file is an update
                                to it
                            </label>
                    </div>
                    <div class="mt-4 flex items-center">
                        <input
                            class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-7 w-7 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#C8C8C8] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[7px] checked:after:block checked:after:h-[19px] checked:after:w-[9px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] "
                            type="checkbox"
                            id="bd1">
                            <label for="bd1" class="ml-4 cursor-pointer">Exact Law/ regulation file I want to upload already
                                to it
                            </label>
                    </div>
                    <div class="mt-4 flex items-center">
                        <input
                            class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-7 w-7 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#C8C8C8] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[7px] checked:after:block checked:after:h-[19px] checked:after:w-[9px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] "
                            type="checkbox"
                            id="bd1">
                            <label for="bd1" class="ml-5 cursor-pointer">My law/ regulation file does not exist here
                                to it
                            </label>
                    </div>
                    <button type="button" data-te-toggle="modal" data-te-target="#exampleModalCenter"
                        data-te-ripple-init data-te-ripple-color="light"
                        class="mt-[51px] bg-[#5D81F3] w-[220px] py-4 outline-0 rounded-lg">
                        <h1 class="font-medium  text-xl text-white">Submit</h1>
                    </button>
                </div>
            </div>
            <p class="font-normal text-xs text-[#9A9B9F] text-center mt-5">© Copyright 2024 CYDRA TECH x MASTERGEAR All
                Rights Reserved</p>
        </div>
    </div>
    <!-- regularation modal -->
    <div data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div data-te-modal-dialog-ref
            class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-[580px] translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[600px]">
            <div
                class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 px-16 py-[60px] yes-modal">
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md p-4 dark:border-opacity-50">
                    <!--Modal title-->
                    <p class="fomt-semibold text-[30px] leading-[35px] text-[#1F263E] text-center"
                        id="exampleModalCenterTitle">
                        Is your Law/Regulation an Update to an Exiting File here ?
                    </p>
                    <!--Close button-->
                    <button type="button"
                        class=" absolute top-4 right-5 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!--Modal body-->
                <!-- <div class="relative p-4">
                    <p>This is a vertically centered modal.</p>
                </div> -->

                <!--Modal footer-->
                <div
                    class="flex w-full items-center justify-end rounded-b-md p-4 dark:border-opacity-50">
                    <button type="button"
                    id="yes-button"
                    data-te-toggle="modal" data-te-target="#exampleModalCenter1"
                    data-te-modal-dismiss
                        class="mr-10 inline-block rounded bg-[#5D81F3] text-white px-6 h-[64px] w-1/2 text-[28px] font-semibold uppercase leading-normal transition duration-150 ease-in-out"
                      data-te-ripple-color="light"  aria-label="Close">
                        YES
                    </button>
                    <button type="button"
                        class="ml-1 inline-block rounded bg-white px-6 h-[64px] w-1/2 text-[28px] font-semiold uppercase leading-normal text-[#5D81F3]  transition duration-150 ease-in-out border border-[#5D81F3]"
                        data-te-modal-dismiss data-te-ripple-color="light" aria-label="Close">
                        NO
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- regulation end -->
    <!-- modal for registration  -->
    <div
  data-te-modal-init
  class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModalCenter1"
  tabindex="-1"
  aria-labelledby="exampleModalCenterTitle1"
  aria-modal="true"
  role="dialog">
  <div
    data-te-modal-dialog-ref
    class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[40%]">
    <div
      class="pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
      <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-m">
        <!--Close button-->
        <button
          type="button"
          class="absolute top-0 right-0 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!--Modal body-->
      <div class="relative">
        <div class="w-full bg-white border border-[#DFDFDF] shadow-lg rounded-lg shadow-[#DFDFDF] pt-[70px] px-[60px] pb-11">
            <div class="">
                <div class="w-full">
                    <label for="" class="font-bold text-[#1F263E] text-base ml-[22px]">Name of the Law/ Regulation </label>
                    <input type="text" class="w-full mt-[14px] text-xs font-medium text-[#0C0C0C] border-[#8AC0FF] outline-0 rounded-[10px] focus:border-[#8AC0FF] border py-[22px] px-[45px] placeholder:text-[#979797] placeholder:font-normal placeholder:text-xs" placeholder="Please enter your name ?">
                </div>
                <div class="mt-12 w-full">
                    <label for="" class="font-bold text-[#1F263E] text-base ml-[22px]">Choose the Category ?</label>
                    <input type="text" class="w-full mt-[14px] text-xs font-medium text-[#0C0C0C] border-[#8AC0FF] outline-0 rounded-[10px] focus:border-[#8AC0FF] border py-[22px] px-[45px] placeholder:text-[#979797] placeholder:font-normal placeholder:text-xs" placeholder="Please the choose  category applicable ">
                </div>
                <div class="mt-12 w-full">
                    <label for="" class="font-bold text-[#1F263E] text-base ml-[22px]">Govt. link of the Law / Regulation  </label>
                    <input type="text" class="w-full mt-[14px] text-xs font-medium text-[#0C0C0C] border-[#8AC0FF] outline-0 rounded-[10px] focus:border-[#8AC0FF] border py-[22px] px-[45px] placeholder:text-[#979797] placeholder:font-normal placeholder:text-xs" placeholder="Please enter your Product name ?">
                </div>
            </div>
            <div class="bg-[#F8F8FF] w-full h-[210px] p-[30px] mt-9 border-2 border-dashed border-[#DDDDDD]">
                <label for="fileInput" class="cursor-pointer block w-full">
                  <input type="file" id="fileInput" class="hidden" multiple accept=".jpg,.jpeg,.png,.gif,.mp4,.pdf,.psd,.ai,.doc,.docx,.ppt">
                  <img src="@/assets/images/Upload icon.svg" alt="upload" class="mx-auto">
                  <p class="text-[#0F0F0F] mt-6 text-center">Drag & drop files or <span class="font-bold text-base text-[#483EA8]">Browse</span></p>
                  <p class="font-normal text-xs text-[#676767] mt-2 text-center">Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                </label>
              </div>
              
            <div class="mt-6 flex justify-center w-full mx-auto">
                <button type="button" data-te-toggle="modal" data-te-target="#exampleModalCenter3" data-te-modal-dismiss aria-label="Close"
                data-te-ripple-init data-te-ripple-color="light" class="bg-[#5D81F3] w-full rounded px-[65px] py-[18px]"><h1 class="text-white text-xs font-normal">SUBMIT</h1></button>
            </div>
        </div>
      </div>

    </div>
  </div>
    </div>
    <!-- registation modal ends here -->
    <!-- modal success messsage -->
    <div data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="exampleModalCenter3" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
    <div data-te-modal-dialog-ref
        class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-[580px] translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[600px]">
        <div
            class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 px-16 py-[60px]">
            <button type="button"
                class=" absolute top-4 right-5 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!--Modal body-->
            <div class="relative p-4">
                <img src="@/assets/images/successfull.svg" alt="" class="mx-auto">
                <p class="font-semibold text-[29px] text-center">Thank you for submitting the Law</p>
            </div>
            </div>
        </div>
    </div>
</template>