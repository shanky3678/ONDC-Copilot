<template>
    <div class="pl-8 pr-[60px] py-2 flex justify-between items-center">
        <div class="flex items-center">
            <img src="images/government-of-india.svg" alt="logo">
            <p class="ml-3 font-normal text-[#1F263E] text-[19px]">ONDC <br> DASHBAORD</p>
        </div>
        <div class="flex items-center">
            <img src="images/chat.svg" alt="chat" class="ml-7">
            <img src="images/Setting.svg" alt="chat" class="ml-7">
            <img src="images/INDIA.svg" alt="chat" class="ml-7">
            <img src="images/Profile.svg" alt="chat" class="ml-7">
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
            <div class="w-full border border-[#DFDFDF] pt-[17px] px-[55px] pb-8 rounded-lg">
                <p class="font-semibold text-[26px] text-[#1F263E] text-center"><u>Verifying the law </u></p>
                <div class="flex items-center justify-end mt-6">
                    <div class="relative">
                        <input type="text"
                            class="w-[552px] py-4 pr-4 pl-12 rounded-lg border border-[#B7B7B7] outline-0">
                        <img src="images/mingcute_search-fill.svg" alt="chat" class="ml-7 absolute left-[-10px] top-4">
                    </div>
                </div>
                <div class="mt-6 w-full flex">
                    <div class="w-1/2 pr-[100px] border-r border-[#D9D9D9]">
                        <p class="font-semibold text-[26px] text-[#1F263E]"><u>Law/Regulation to verify</u></p>
                        <div class="w-full">
                            <table class="mt-16 shadow-lg rounded-bl-lg rounded-br-lg">
                                <thead class=" bg-[#F5F5F5] border-b border-[#E1CFFF] sticky top-0">
                                    <th class="min-w-[150px] rounded-tl-lg rounded-bl-lg px-5 py-[13px] flex bg-[#F5F5F5]">
                                        <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                        <p class="ml-5 font-medium text-sm justify-start flex">Name</p>
                                    </th>
                                    <th
                                        class="min-w-[150px] px-5 py-[13px] text-start rounded-tr-lg rounded-bt-lg bg-[#F5F5F5]">
                                        PDF View</th>
                                </thead>
                                <tbody style="overflow-y: auto;">
                                    <tr class="w-full border-b border-[#E1CFFF]">
                                        <td class="min-w-[150px] p-6 flex items-center">
                                            <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                            <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                        </td>
                                        <td class="min-w-[150px] p-6"><a href="#"><u>View the PDF</u></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="w-1/2 px-10 pb-1">
                        <p class="font-semibold text-[26px] text-[#1F263E]"><u>Our Data base</u></p>
                        <div class="h-customh3 shadow-lg overflow-auto overflow-x-hidden sidebar mt-8 pr-3 w-full">
                        <table class=" table-auto shadow-lg rounded-bl-lg rounded-br-lg w-full pr-2">
                            <thead class=" bg-[#F5F5F5] border-b border-[#E1CFFF] sticky top-[-0.5] pr-2">
                                <th class="min-w-[250px] rounded-tl-lg rounded-bl-lg px-5 py-[13px] flex bg-[#F5F5F5]">
                                    <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                    <p class="ml-5 font-medium text-sm justify-start flex">Name</p>
                                </th>
                                <th
                                    class="min-w-[250px] px-5 py-[13px] text-start rounded-tr-lg rounded-bt-lg bg-[#F5F5F5]">
                                    PDF View</th>
                            </thead>
                            <tbody style="overflow-y: auto;">
                                <tr class="w-full border-b border-[#E1CFFF]">
                                    <td class="min-w-[250px] p-6 flex items-center">
                                        <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                        <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                    </td>
                                    <td class="min-w-[250px] p-6"><a href="#"><u>View the PDF</u></a></td>
                                </tr>
                                <tr class="w-full border-b border-[#E1CFFF]">
                                    <td class="min-w-[250px] p-6 flex items-center">
                                        <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                        <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                    </td>
                                    <td class="min-w-[250px] p-6"><a href="#"><u>View the PDF</u></a></td>
                                </tr>
                                <tr class="w-full border-b border-[#E1CFFF]">
                                    <td class="min-w-[250px] p-6 flex items-center">
                                        <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                        <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                    </td>
                                    <td class="min-w-[250px] p-6 cursor-pointer"><a href="#"><u>View the PDF</u></a></td>
                                </tr>
                                <tr class="w-full border-b border-[#E1CFFF]">
                                    <td class="min-w-[250px] p-6 flex items-center">
                                        <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                        <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                    </td>
                                    <td class="min-w-[250px] p-6 cursor-pointer"><a href="#"><u>View the PDF</u></a></td>
                                </tr>
                                <tr class="w-full border-b border-[#E1CFFF]">
                                    <td class="min-w-[250px] p-6 flex items-center">
                                        <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                        <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                    </td>
                                    <td class="min-w-[250px] p-6 cursor-pointer"><a href="#"><u>View the PDF</u></a></td>
                                </tr>
                                <tr class="w-full border-b border-[#E1CFFF]">
                                    <td class="min-w-[250px] p-6 flex items-center">
                                        <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                        <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                    </td>
                                    <td class="min-w-[250px] p-6 cursor-pointer"><a href="#"><u>View the PDF</u></a></td>
                                </tr>
                                <tr class="w-full border-b border-[#E1CFFF]">
                                    <td class="min-w-[250px] p-6 flex items-center">
                                        <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                        <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                    </td>
                                    <td class="min-w-[250px] p-6 cursor-pointer"><a href="#"><u>View the PDF</u></a></td>
                                </tr>
                                <tr class="w-full border-b border-[#E1CFFF]">
                                    <td class="min-w-[250px] p-6 flex items-center">
                                        <input type="checkbox" name="" id="db-1" class="cursor-pointer">
                                        <p class="ml-5 font-medium text-sm justify-start flex">Buzz</p>
                                    </td>
                                    <td class="min-w-[250px] p-6 cursor-pointer"><a href="#"><u>View the PDF</u></a></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <input type="checkbox" name="" id="bd1" class="cursor-pointer">
                    <label for="bd1" class="ml-5 cursor-pointer">Exact File Already Exist in DB ?</label>
                </div>
                <div class="flex items-center mt-6" data-te-toggle="modal" data-te-target="#exampleModalCenter2"
                data-te-ripple-init data-te-ripple-color="light">
                    <input type="checkbox" name="" id="bd1" class="cursor-pointer">
                    <label for="bd1" class="ml-5 cursor-pointer">Given File is An Update to existing File</label>
            </div>
                <div class="flex items-center mt-6" data-te-toggle="modal" data-te-target="#exampleModalCenter3"
                data-te-ripple-init data-te-ripple-color="light">
                    <input type="checkbox" name="" id="bd1" class="cursor-pointer">
                    <label for="bd1" class="ml-5 cursor-pointer">The Given File Does Not Exist IN DB
                    </label>
                </div>
                <button type="button" data-te-toggle="modal" data-te-target="#exampleModalCenter1"
                data-te-ripple-init data-te-ripple-color="light"
                    class="mt-[51px] bg-[#5D81F3] w-[220px] py-4 outline-0 rounded-lg">
                    <h1 class="font-medium  text-xl text-white">Submit</h1>
                </button>
            </div>
            <p class="font-normal text-xs text-[#9A9B9F] text-center mt-5">© Copyright 2024 CYDRA TECH x MASTERGEAR All
                Rights Reserved</p>
        </div>
    </div>
     <!-- modal success messsage -->
 <div data-te-modal-init
 class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
 id="exampleModalCenter1" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
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
             <button type="button" data-te-modal-dismiss aria-label="Close" class="w-[182px] h-[64px] font-semibold text-[29px] leading-[35px] text-white rounded mt-12 mx-auto bg-[#5D81F3] flex justify-center items-center">
                Okay
             </button>
         </div>
         </div>
     </div>
 </div>
 <!-- modal for verifying the ink -->
 <div data-te-modal-init
 class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
 id="exampleModalCenter2" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
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
             <p class="font-medium mt-6 text-lg text-start text-[#text-[#1F263E]">Verify the link given to check of this belong to govt website</p>
             <a href="#" class="text-[#079ADC] font-medium mt-6 text-lg text-start">Link : https://www.google.gov</a>
             <div class="flex items-center mt-6">
                <input type="checkbox" name="" id="bd1" class="cursor-pointer">
                <label for="bd1" class="ml-5 cursor-pointer">Yes, its a Govt website</label>
            </div>
            <div class="flex items-center mt-4">
                <input type="checkbox" name="" id="bd1" class="cursor-pointer">
                <label for="bd1" class="ml-5 cursor-pointer">No, its a Govt website 
                </label>
            </div>
             <button type="button" data-te-modal-dismiss aria-label="Close" class="w-[182px] h-[54px] font-medium text-xl text-white rounded mt-7 mx-auto bg-[#5D81F3] flex justify-center items-center ">
                Submit
             </button>
         </div>
         </div>
     </div>
 </div>

 <!-- Check if the repealed (expired)   -->
 <div data-te-modal-init
 class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
 id="exampleModalCenter3" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
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
            <p class="font-semibold text-[29px] leading-[35px] text-[#1F263E]">Check if the repealed (expired)  </p>
             <p class="font-medium mt-6 text-lg text-start text-[#text-[#1F263E]">Check online if the law is replealed </p>
             <a href="#" class="text-[#079ADC] font-medium mt-6 text-lg text-start">Link : https://www.google.gov</a>
             <div class="flex items-center mt-6">
                <input type="checkbox" name="" id="bd1" class="cursor-pointer">
                <label for="bd1" class="ml-5 cursor-pointer">The Law/Regulation  is repealed </label>
            </div>
            <div class="flex items-center mt-4">
                <input type="checkbox" name="" id="bd1" class="cursor-pointer">
                <label for="bd1" class="ml-5 cursor-pointer">The Law/Regulation is currently legal   
                </label>
            </div>
             <button type="button" data-te-modal-dismiss aria-label="Close" class="w-[182px] h-[54px] font-medium text-xl text-white rounded mt-7 mx-auto bg-[#5D81F3] flex justify-center items-center ">
                Submit
             </button>
         </div>
         </div>
     </div>
 </div>
</template>