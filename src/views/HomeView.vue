

<template>
  <div class="w-full bg-white flex">
        <div class="min-w-[20%] max-w-[20%] w-[20%] h-auto bg-[#0D3357] px-5 pt-10 pb-10">
            <img src="@/assets/images/logo.svg" alt="logo" class="mx-auto border-b border-[#D8D8D8]">
            <h1 class="mt-10 font-normal text-[22px] leading-[25px] text-white">Fill the Inputs and get the Results </h1>
            <div class="mt-6">
                <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 
            <div class="relative" data-te-dropdown-ref>
                <button
                class="flex justify-between items-center py-4 whitespace-nowrap border-2 border-[#38AC0FF] rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                type="button"
                id="dropdownMenuButton1"
                style="width: -webkit-fill-available;"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light">
                Choose your Language 
                <span class="ml-2 w-2">
                    <img src="@/assets/images/down-arrow.svg" alt="">
                    
                </span>
                </button>
                <ul
                class="absolute z-[1000] p-3 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1"
                style="width: -webkit-fill-available;"
                data-te-dropdown-menu-ref>
                <li>
                    <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >English</a
                    >
                </li>
                <li>
                    <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >Hindi</a
                    >
                </li>
                <li>
                    <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >Kannada</a
                    >
                </li>
                </ul>
            </div>
            <div class="relative mt-10" data-te-dropdown-ref>
                <button
                class="flex justify-between items-center py-4 whitespace-nowrap border-2 border-[#38AC0FF] rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                type="button"
                id="dropdownMenuButton2"
                style="width: -webkit-fill-available;"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light">
                Choose your state 
                <span class="ml-2 w-2">
                    <img src="@/assets/images/down-arrow.svg" alt="">
                  
                </span>
                </button>
                <ul
                class="absolute z-[1000] h-[200px] overflow-auto sidebar p-3 float-left m-0 hidden min-w-max list-none rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton2"
                style="width: -webkit-fill-available;"
                data-te-dropdown-menu-ref>
                <li>
                    <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >kerala</a
                    >
                </li>
                <li>
                    <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >Karnataka</a
                    >
                </li>
                <li>
                    <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >tamilnadu</a
                    >
                </li>
                <li>
                    <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >kerala</a
                    >
                </li>
                <li>
                    <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >Karnataka</a
                    >
                </li>
                <li>
                    <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >tamilnadu</a
                    >
                </li>
                </ul>
            </div>
            <div class="mt-10">
                <label for=""></label>
                <input type="text" id="" class="h-[51px] p-4 w-full outline-0 rounded-[5px] border-2 border-[#8AC0FF] placeholder:font-medium placeholder:text-sm placeholder:text-[#979797]" placeholder="Enter The Product name">
            </div>
            <div class="relative mt-10" data-te-dropdown-ref>
                <button
                class="flex justify-between items-center py-4 whitespace-nowrap border-2 border-[#38AC0FF] rounded bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                type="button"
                id="dropdownMenuButton3"
                style="width: -webkit-fill-available;"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light">
                Choose Your category 
                <span class="ml-2 w-2">
                    <img src="@/assets/images/down-arrow.svg" alt="">
                   
                </span>
                </button>
                <ul
                class="absolute z-[1000] h-[120px] sidebar p-3 float-left m-0 hidden min-w-max list-none overflow-auto rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton3"
                style="width: -webkit-fill-available;"
                data-te-dropdown-menu-ref>
                <li>
                    <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >category1</a
                    >
                </li>
                <li>
                    <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >category2</a
                    >
                </li>
                <li>
                    <a
                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                    >category3</a
                    >
                </li>
                </ul>
            </div>
            <div class="mt-10 mb-7">
                <textarea class="p-4 h-[110px] outline-0 border-2 border-[#8AC0FF] rounded-[5px] w-full placeholder:font-medium placeholder:text-sm placeholder:text-[#979797]" placeholder="Other Specific Details Related to Products "></textarea>
            </div>
            <div class="flex justify-center w-full mx-auto">
                <button type="button" class="bg-[#5D81F3] w-full rounded px-[65px] py-2.5"><h1 class="text-white text-xs font-normal">SUBMIT</h1></button>
            </div>
            <div class="mt-8">
                <div class="flex items-center">
                    <img src="@/assets/images/enlarge.svg" alt="FAQ">
                    <p class="font-medium text-lg text-white pl-[19px]">Updates & FAQ</p>
                </div>
                <div class="mt-8 flex items-center">
                    <img src="@/assets/images/logout.svg" alt="FAQ">
                    <p class="font-medium text-lg text-white pl-[19px]">Log out</p>
                </div>
            </div>
            </div>
        </div>
        <div class="min-w-[80%] w-[80%]">
            <div class="h-[70px] w-full bg-white flex justify-between items-center pl-[30px] py-3 pr-[60px]">
                <button type="button" class="relative">
                    <img src="@/assets/images/Shape.svg" alt="bell-icon">
                    <p class="bg-[#F56C89] px-2 py-1 rounded-[50%] absolute -top-4 -right-3 text-sm text-white">1</p>
                </button>
                <div class="flex items-center">
                    <button>
                        <img src="@/assets/images/Setting.svg" alt="bell-icon">
                    </button>
                    <div class="ml-7 error">
                        <img src="@/assets/images/INDIA.svg" alt="bell-icon">
                    </div>
                    <div class="ml-7 profile">
                        <button type="button" >
                            <img src="@/assets/images/Profile.svg" alt="bell-icon">
                        </button>
                        <ul class="list hidden w-[400px] h-[500px] absolute top-[60px] right-12 rounded-[18px] shadow-xl border border-[#BABABA] p-12 bg-white z-[99]">
                            <li class="font-bold text-lg text-[#5D81F3]">Profile</li>
                            <li class="mt-9 font-bold text-lg text-[#979797]">Uploader the Law</li>
                            <li class="mt-9 font-bold text-lg text-[#979797]">Verifier the Law </li>
                            <li class="mt-9 font-bold text-lg text-[#979797]">Downloaded</li>
                            <li class="mt-9 font-bold text-lg text-[#979797]">Setting</li>
                            <li class="mt-9 font-bold text-lg text-[#979797]">Ranking</li>
                            <li class="mt-9 font-bold text-lg text-[#979797]">Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bg-[#d1cccc2e] pl-7 pr-[35px] pb-7 pt-[40px]">
                <div class="overflow-auto h-customh1 gray-scroll pt-[42px] pr-[15px]">
                    <div class="relative">
                        <div class="bg-[#E9F3FD] rounded-[33px] pt-[40px] pl-[90px] pb-[50px]">
                            <h1 class="text-[40px] leading-[50px] font-bold text-[#1F263E]">Welcome to ONDC <br> Dashboard</h1>
                            <p class="mt-5 font-normal text-base text-[#979797] w-[60%]">
                                Lorem ipsum dolor sit amet consectetur. Nibh semper dolor sed sit mauris euismod ut sagittis. Sit urna vestibulum in arcu. Pharetra faucibus porta neque vel morbi. Venenatis phasellus libero nec ligula.
                            </p>
                        </div>
                        <img src="@/assets/images/Chat-bot-amico.svg" alt="chat-bot" class="absolute top-[-38px] right-0 h-[290px] w-[290px]">
                    </div>
                    <div class="mt-[22px] rounded-[5px] bg-white px-[46px] py-10">
                        <div class="flex items-start">
                            <img src="@/assets/images/chat.svg" alt="chat">
                            <div class="flex items-start ml-[14px] pb-7">
                                <p class="font-medium text-base text-[#1F263E] w-[80%]">A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.</p>
                                <div class="flex items-center ml-6">
                                    <img src="@/assets/images/like.svg" alt="like" class="cursor-pointer">
                                    <img src="@/assets/images/dislike.svg" alt="dislike" class="ml-5 cursor-pointer">
                                </div>
                            </div>
                        </div>
                        <div class="flex items-start mt-[30px]">
                            <img src="@/assets/images/picture.svg" alt="chat">
                            <div class="mt-5 flex items-start ml-[14px] pb-7">
                                <p class="font-medium text-base text-[#002AB1]">A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.</p>
                            </div>
                        </div>
                        <div class="flex items-start mt-5">
                            <img src="@/assets/images/chat.svg" alt="chat">
                            <div class="flex items-start ml-[14px] pb-7">
                                <p class="font-medium text-base text-[#1F263E] w-[80%]">A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.</p>
                                <div class="flex items-center ml-6">
                                    <img src="@/assets/images/like.svg" alt="like" class="cursor-pointer">
                                    <img src="@/assets/images/dislike.svg" alt="dislike" class="ml-5 cursor-pointer">
                                </div>
                            </div>
                        </div>
                        <div class="flex items-start mt-[30px]">
                            <img src="@/assets/images/picture.svg" alt="chat">
                            <div class="mt-5 flex items-start ml-[14px] pb-7">
                                <p class="font-medium text-base text-[#002AB1]">A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.</p>
                            </div>
                        </div>
                        <div class="flex items-start mt-5">
                            <img src="@/assets/images/chat.svg" alt="chat">
                            <div class="flex items-start ml-[14px] pb-7">
                                <p class="font-medium text-base text-[#1F263E] w-[80%]">A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.</p>
                                <div class="flex items-center ml-6">
                                    <img src="@/assets/images/like.svg" alt="like" class="cursor-pointer">
                                    <img src="@/assets/images/dislike.svg" alt="dislike" class="ml-5 cursor-pointer">
                                </div>
                            </div>
                        </div>
                        <div class="flex items-start mt-[30px]">
                            <img src="@/assets/images/picture.svg" alt="chat">
                            <div class="mt-5 flex items-start ml-[14px] pb-7">
                                <p class="font-medium text-base text-[#002AB1]">A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.</p>
                            </div>
                        </div>
                        <div class="flex items-start mt-5">
                            <img src="@/assets/images/chat.svg" alt="chat">
                            <div class="flex items-start ml-[14px] pb-7">
                                <p class="font-medium text-base text-[#1F263E] w-[80%]">A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.</p>
                                <div class="flex items-center ml-6">
                                    <img src="@/assets/images/like.svg" alt="like" class="cursor-pointer">
                                    <img src="@/assets/images/dislike.svg" alt="dislike" class="ml-5 cursor-pointer">
                                </div>
                            </div>
                        </div>
                        <div class="flex items-start mt-[30px]">
                            <img src="@/assets/images/picture.svg" alt="chat">
                            <div class="mt-5 flex items-start ml-[14px] pb-7">
                                <p class="font-medium text-base text-[#002AB1]">A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-[18px] relative">
                    <input type="text" class="w-full border border-[#D1CCCC] outline-0 py-5 pl-5 pr-14 rounded-[6px]">
                    <img src="@/assets/images/send.svg" alt="send" class="absolute right-6 top-[21px] cursor-pointer">
                </div>
                <div class="mt-2">
                    <p class="font-normal text-[#9A9B9F] text-xs text-center"><u>ChatGPT Jan 9 Version.</u> Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  import { onMounted } from "vue";
  import '@/assets/js/lib/jquery-3.2.1.min.js';
  import '@/assets/js/lib/tw-elements/dist/js/index.min.js'
  import { Tooltip, initTE, Dropdown } from "tw-elements";

  onMounted(() => {
    initTE({ Tooltip,Dropdown });
  });
</script>