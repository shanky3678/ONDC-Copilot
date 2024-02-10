<template>
    <div class="relative">
        <div v-show="isBusy" class="h-full w-full bg-black opacity-75 absolute z-10 items-center justify-center flex">
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-600 animate-spin dark:text-gray-600 fill-white"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>

        <div class="pl-8 pr-[60px] py-2 flex justify-between items-center">
            <div class="flex items-center">
                <img src="@/assets/images/government-of-india.svg" alt="logo">
                <p class="ml-3 font-normal text-[#1F263E] text-[19px]">ONDC <br> DASHBAORD</p>
            </div>
            <div class="flex items-center">
                <img src="@/assets/images/Setting.svg" alt="chat" class="ml-7">
                <img src="@/assets/images/INDIA.svg" alt="chat" class="ml-7">
                <button @click="onPressProfileBtn()" type="button" class="ml-7">
                    <img src="@/assets/images/Profile.svg" alt="bell-icon">
                </button>
                <ul v-show="showProfileMenu"
                    class="list w-[400px] h-[300px] absolute top-[60px] right-12 rounded-[18px] shadow-xl border border-[#BABABA] p-12 bg-white z-[99]">
                    <RouterLink to="/home">
                        <li class="font-bold text-lg text-[#979797] ">Home</li>
                    </RouterLink>
                    <RouterLink to="/defender">
                        <li class="mt-9 font-bold text-lg  text-[#5D81F3]">ONDC Law Defender</li>
                    </RouterLink>
                    <button type="button" data-te-toggle="modal" data-te-target="#rankingpop" data-te-ripple-init
                        data-te-ripple-color="light">
                        <li class="mt-9 font-bold text-lg text-[#979797]">Ranking</li>
                    </button>
                    <br>

                    <button @click="logoutFun()">
                        <li class="mt-9 font-bold text-lg text-[#979797]">Logout</li>
                    </button>
                </ul>
            </div>
        </div>
        <div class="w-full bg-[#d1cccc2e] relative pt-[64px] pl-10 pr-[62px] pb-11 flex h-custom h2 overflow-auto sidebar">
            <div class="w-[20%] mt-4">
                <h1 class="font-bold text-[#079ADC] text-[90px]">Hello</h1>
                <p class="font-medium text-sm text-[#979797] mt-1">Welcome to ONDC uploader</p>
                <p class="mt-10 font-normal text-base text-[#979797]">Verify Laws, regulations, un-updated amendments, court
                    orders and ministry guidelines which <bold>do not</bold> exist in our database</p>
                <p class="mt-5 font-normal text-base text-[#979797]">You will receive <bold>1pt</bold> and might increase
                    your ranking after verification of the content of the left sided file compared to our database(right
                    side section).</p>
                <p class="mt-5 font-normal text-base text-[#979797]">You will receive <bold>no points</bold>, if you verify
                    incorrectly. </p>
                <p class="mt-5 font-normal text-base text-[#979797]">If you get high enough ranking for certain time period,
                    you wil be given the title of “Official ONDC law partner”.</p>
            </div>
            <div class="w-[80%] ml-6">
                <div class="w-full border border-[#DFDFDF] pt-[17px] px-[55px] pb-8 rounded-lg">
                    <p class="font-semibold text-[26px] text-[#1F263E] text-center"><u>Verifying the law </u></p>
                    <div class="flex items-center justify-end mt-6">
                        <div class="relative">
                            <input type="text"
                                class="w-[552px] py-4 pr-4 pl-12 rounded-lg border border-[#B7B7B7] outline-0">
                            <img src="@/assets/images/mingcute_search-fill.svg" alt="chat"
                                class="ml-7 absolute left-[-10px] top-4">
                        </div>
                    </div>
                    <div class="mt-6 w-full flex">
                        <div class="w-1/2 pr-[100px] border-r border-[#D9D9D9]">
                            <p class="font-semibold text-[26px] text-[#1F263E]"><u>Law/Regulation to verify</u></p>
                            <div class="w-full">
                                <table class="mt-16 shadow-lg rounded-bl-lg rounded-br-lg">
                                    <thead class=" bg-[#F5F5F5] border-b border-[#E1CFFF] sticky top-0">
                                        <th
                                            class="min-w-[150px] rounded-tl-lg rounded-bl-lg px-5 py-[13px] flex bg-[#F5F5F5]">

                                            <p class="ml-5 font-medium text-sm justify-start flex">Name</p>
                                        </th>
                                        <th
                                            class="min-w-[150px] px-5 py-[13px] text-start rounded-tr-lg rounded-bt-lg bg-[#F5F5F5]">
                                            PDF View</th>
                                    </thead>
                                    <tbody style="overflow-y: auto;">
                                        <tr v-if="unverifiedDocuments.length > 0" class="w-full border-b border-[#E1CFFF]">
                                            <td class="min-w-[150px] p-6 flex items-center">
                                                <p class="ml-5 font-medium text-sm justify-start flex">
                                                    {{ unverifiedDocuments[0]['document_name'] }}</p>
                                            </td>
                                            <td class="min-w-[150px] p-6"><a target="_blank"
                                                    :href="`${constant.endpoint}/pdf?filepath=${unverifiedDocuments[0]['document_url']}`"><u>View
                                                        the PDF</u></a></td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>

                        <div class="w-1/2 px-10 pb-1">
                            <p class="font-semibold text-[26px] text-[#1F263E]"><u>Our Data base</u></p>
                            <div class="h-[500px] shadow-lg overflow-auto overflow-x-hidden sidebar mt-8 pr-3 w-full">
                                <table class=" table-auto shadow-lg rounded-bl-lg rounded-br-lg w-full pr-2">
                                    <thead class=" bg-[#F5F5F5] border-b border-[#E1CFFF] sticky top-[-0.5] pr-2">
                                        <th
                                            class="min-w-[250px] rounded-tl-lg rounded-bl-lg px-5 py-[13px] flex bg-[#F5F5F5]">

                                            <p class="ml-5 font-medium text-sm justify-start flex">Name</p>
                                        </th>
                                        <th
                                            class="min-w-[250px] px-5 py-[13px] text-start rounded-tr-lg rounded-bt-lg bg-[#F5F5F5]">
                                            PDF View</th>
                                    </thead>
                                    <tbody v-if="verifiedDocuments.length > 0" style="overflow-y: auto;"
                                        v-for="document of verifiedDocuments">
                                        <tr class="w-full border-b border-[#E1CFFF]">
                                            <td class="min-w-[250px] p-6 flex items-center">

                                                <p class="ml-5 font-medium text-sm justify-start flex">{{
                                                    document['document_name'] }}</p>
                                            </td>
                                            <td class="min-w-[250px] p-6"><a target="_blank"
                                                    :href="`${constant.endpoint}/pdf?filepath=${document['document_url']}`"><u>View
                                                        the PDF</u></a></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div v-show="showSubmitBtn">
                        <div class="flex items-center">
                            <input ref="bd1" v-model="selectedOption1" @click="select1" :value="constant.verifyOption1"
                                class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-7 w-7 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#C8C8C8] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[7px] checked:after:block checked:after:h-[19px] checked:after:w-[9px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] "
                                type="checkbox" id="bd1">
                            <label for="bd1" class="ml-4 cursor-pointer">{{ constant.verifyOption1 }}

                            </label>
                        </div>
                        <div class="flex items-center mt-6" data-te-toggle="modal" @click="select2"
                            data-te-target="#exampleModalCenter2" data-te-ripple-init data-te-ripple-color="light">
                            <input ref="bd2" v-model="selectedOption2" :value="constant.verifyOption2"
                                class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-7 w-7 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#C8C8C8] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[7px] checked:after:block checked:after:h-[19px] checked:after:w-[9px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] "
                                type="checkbox" id="bd2">
                            <label for="bd2" class="ml-4 cursor-pointer">{{ constant.verifyOption2 }}

                            </label>
                        </div>
                        <div class="flex items-center mt-6" data-te-toggle="modal" @click="select3"
                            data-te-target="#exampleModalCenter3" data-te-ripple-init data-te-ripple-color="light">
                            <input ref="bd3" v-model="selectedOption3" :value="constant.verifyOption3"
                                class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-7 w-7 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#C8C8C8] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[7px] checked:after:block checked:after:h-[19px] checked:after:w-[9px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] "
                                type="checkbox" id="bd3">
                            <label for="bd3" class="ml-4 cursor-pointer">{{ constant.verifyOption3 }}

                            </label>
                        </div>
                        <div class="flex items-center mt-6" data-te-toggle="modal" @click="select4"
                            data-te-target="#exampleModalCenter3" data-te-ripple-init data-te-ripple-color="light">
                            <input ref="bd4" v-model="selectedOption4" :value="constant.verifyOption3"
                                class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-7 w-7 appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#C8C8C8] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[7px] checked:after:block checked:after:h-[19px] checked:after:w-[9px] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] "
                                type="checkbox" id="bd4">
                            <label for="bd4" class="ml-4 cursor-pointer">{{ constant.verifyOption4 }}

                            </label>
                        </div>
                        <button @click="verifyDocumentDoc()" type="button" data-te-toggle="modal"
                            data-te-target="#exampleModalCenter1" data-te-ripple-init data-te-ripple-color="light"
                            class="mt-[51px] bg-[#5D81F3] w-[220px] py-4 outline-0 rounded-lg">
                            <h1 class="font-medium  text-xl text-white">Submit</h1>
                        </button>
                    </div>
                </div>
                <p class="font-normal text-xs text-[#9A9B9F] text-center mt-5">© Copyright 2024 CYDRA TECH x MASTERGEAR All
                    Rights Reserved</p>
            </div>
        </div>
        <!-- modal success messsage -->
        <div data-te-modal-init
            class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="exampleModalCenter1" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true"
            role="dialog">
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
                    <div class="relative w-full">
                        <p class="font-semibold text-[29px] text-center">Thank you for verification + 1pt for verifying </p>
                        <p class="font-semibold text-[29px] text-center">Redirecting..</p>
                        <button @click="navToDefender()" type="button" data-te-modal-dismiss aria-label="Close"
                            class="w-[182px] h-[64px] font-semibold text-[29px] leading-[35px] text-white rounded mt-12 mx-auto bg-[#5D81F3] flex justify-center items-center">
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal for verifying the ink -->
        <div data-te-modal-init
            class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="exampleModalCenter2" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true"
            role="dialog">
            <div data-te-modal-dialog-ref
                class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-[580px] translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[458px]">
                <div
                    class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 p-11">
                    <button type="button"
                        class=" absolute top-4 right-5 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <!--Modal body-->
                    <div class="relative w-full">
                        <p class="font-semibold text-[29px] leading-[35px] text-[#1F263E]">Verify the link</p>
                        <p class="font-medium mt-6 text-lg text-start text-[#text-[#1F263E]">Verify the link given to check
                            of
                            this belong to govt website</p>
                        <a href="#" class="text-[#079ADC] font-medium mt-6 text-lg text-start">Link :
                            https://www.google.gov</a>
                        <div class="flex items-center mt-6">
                            <input type="checkbox" name="" id="bd1" class="cursor-pointer">
                            <label for="bd1" class="ml-5 cursor-pointer">Yes, its a Govt website</label>
                        </div>
                        <div class="flex items-center mt-4">
                            <input type="checkbox" name="" id="bd1" class="cursor-pointer">
                            <label for="bd1" class="ml-5 cursor-pointer">No, its a Govt website
                            </label>
                        </div>
                        <button type="button" data-te-modal-dismiss aria-label="Close"
                            class="w-[182px] h-[54px] font-medium text-xl text-white rounded mt-7 mx-auto bg-[#5D81F3] flex justify-center items-center ">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Check if the repealed (expired)   -->
        <div data-te-modal-init
            class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="exampleModalCenter3" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true"
            role="dialog">
            <div data-te-modal-dialog-ref
                class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-[580px] translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[486px]">
                <div
                    class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 p-11">
                    <button type="button"
                        class=" absolute top-4 right-5 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <!--Modal body-->
                    <div class="relative w-full">
                        <p class="font-semibold text-[29px] leading-[35px] text-[#1F263E]">Check if the repealed (expired)
                        </p>
                        <p class="font-medium mt-6 text-lg text-start text-[#text-[#1F263E]">Check online if the law is
                            replealed </p>
                        <a v-if="unverifiedDocuments.length > 0" target="_blank"
                            :href="`${constant.endpoint}/pdf?filepath=${unverifiedDocuments[0]['document_url']}`"
                            class="text-[#079ADC] font-medium mt-6 text-lg text-start">Link : {{
                                `${constant.endpoint}/pdf?filepath=${unverifiedDocuments[0]['document_url']}` }}</a>
                        <div class="flex items-center mt-6">
                            <input type="checkbox" name="" id="bd1" class="cursor-pointer">
                            <label for="bd1" class="ml-5 cursor-pointer">The Law/Regulation is repealed </label>
                        </div>
                        <div class="flex items-center mt-4">
                            <input type="checkbox" name="" id="bd1" class="cursor-pointer">
                            <label for="bd1" class="ml-5 cursor-pointer">The Law/Regulation is currently legal
                            </label>
                        </div>
                        <button type="button" data-te-modal-dismiss aria-label="Close"
                            class="w-[182px] h-[54px] font-medium text-xl text-white rounded mt-7 mx-auto bg-[#5D81F3] flex justify-center items-center ">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div data-te-modal-init
            class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="rankingpop" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
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
                    <div class="relative w-full">
                        <p class="font-semibold text-[29px] text-center">Ranking will appear once enough users upload
                            Laws/Regulation</p>
                        <p class="font-semibold text-[29px] text-center">Will Redirect in 3 sec..</p>

                        <button type="button" data-te-modal-dismiss aria-label="Close"
                            class="w-[182px] h-[64px] font-semibold text-[29px] leading-[35px] text-white rounded mt-12 mx-auto bg-[#5D81F3] flex justify-center items-center">
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import '@/assets/css/output.css';
</style>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Popconfirm, initTE } from 'tw-elements'
import { useServerStore } from '@/stores/server';
import * as constant from '@/shared/constant'
import { isEmptyOrNull } from '@/shared/utils'


const router = useRouter()
const server = useServerStore();
const unverifiedDocuments = ref([])
const verifiedDocuments = ref([])
const selectedOption1 = ref(null)
const selectedOption2 = ref(null)
const selectedOption3 = ref(null)
const selectedOption4 = ref(null)
const showProfileMenu = ref(false)
const verify_remark = ref(null)
const is_legit = ref(null)
const isBusy = ref(false)
const showSubmitBtn = ref(true)

onMounted(async () => {
    initTE({ Popconfirm });
    await fetchData()
    console.log(server.userDetails)
})

function onPressProfileBtn() {
    showProfileMenu.value = !showProfileMenu.value
    console.log(showProfileMenu.value)
}

async function fetchData() {
    unverifiedDocuments.value = await server.getUnverifiedDocument()
    verifiedDocuments.value = await server.getVerifiedDocument()

    if (unverifiedDocuments.value.length <= 0) {
        showSubmitBtn.value = false
    } else {
        setTimeout(() => {
            showSubmitBtn.value = true
        }, 10000);
    }
}

//temperary
const select1 = () => {
    selectedOption2.value = false
    selectedOption3.value = false
    selectedOption4.value = false
    verify_remark.value = constant.verifyOption1
    is_legit.value = false
}

const select2 = () => {
    selectedOption1.value = false
    selectedOption3.value = false
    selectedOption4.value = false
    verify_remark.value = constant.verifyOption2
    is_legit.value = true
}
const select3 = () => {
    selectedOption1.value = false
    selectedOption2.value = false
    selectedOption4.value = false
    verify_remark.value = constant.verifyOption3
    is_legit.value = true
}

const select4 = () => {
    selectedOption1.value = false
    selectedOption2.value = false
    selectedOption3.value = false
    verify_remark.value = constant.verifyOption4
    is_legit.value = false
}

function logoutFun() {
    let response = server.logout();
    if (response)
        router.push({
            name: 'Login'
        })
}


function navToDefender() {
    router.push({
        name: 'Defender'
    })
}


async function verifyDocumentDoc() {
    if (unverifiedDocuments.value.length > 0) {
        console.log(unverifiedDocuments.value[0]['document_id'], server.userDetails)
        let response = await server.verifyDocument(
            server.userDetails.user_id,
            unverifiedDocuments.value[0]['document_id'],
            verify_remark.value,
            is_legit.value
        )
        if (!isEmptyOrNull(response.message)) {
            setTimeout(() => {
                router.push({
                    name: 'Defender'
                })
            }, 3000);
        } else {
            alert("Something went wrong. Refresh and try again." + response)
        }
    }
}


</script>