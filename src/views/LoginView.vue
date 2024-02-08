<template>
    <body class="flex flex-col justify-center items-center h-screen">
    <div class="w-[40%] mx-auto bg-white border border-[#DFDFDF] shadow-lg rounded shadow-[#DFDFDF] my-[70px] pt-[70px] px-[55px] pb-6">
        <h1 class="font-bold font- text-[29px] leading-[20px] text-black text-shadow ">Back to your digital life</h1>
        <h1 class="mt-3.5 text-[#545454] font-normal text-[14px] leading-[14px] font-IBM">Choose one of the option to go</h1>
        <div class="mt-10">
            <div class="w-full">
                <label for=""></label>
                <input type="text" class="w-full text-base font-medium text-[#0C0C0C] border-[#E6E6E6] outline-0 rounded-[5px] focus:border-[#8AC0FF] border py-5 px-[18px] placeholder:text-[#4F4F4F] placeholder:font-normal placeholder:text-base" placeholder="Password">
            </div>
            <div class="mt-5 w-full">
                <label for=""></label>
                <input type="text" class="w-full text-base font-medium text-[#0C0C0C] border-[#E6E6E6] outline-0 rounded-[5px] focus:border-[#8AC0FF] border py-5 px-[18px] placeholder:text-[#4F4F4F] placeholder:font-normal placeholder:text-base" placeholder="Password">
            </div>
        </div>
        <p class="mt-8 text-[#4F4F4F] font-medium text-base">Or continue with</p>
        <div class="mt-5 w-full flex items-center">
            <button class="w-1/3 bg-[#F7F7F7] rounded py-3 mr-2.5">
                <img src="@/assets/images/google.svg" alt="google.svg" class="mx-auto w-12 h-12">
            </button>
            <button class="w-1/3 bg-[#F7F7F7] rounded py-3 mr-2.5">
                <img src="@/assets/images/facebook-meta.svg" alt="google.svg" class="mx-auto w-12 h-12">
            </button>
            <button class="w-1/3 bg-[#F7F7F7] rounded py-3">
                <img src="@/assets/images/apple.svg" alt="google.svg" class="mx-auto w-12 h-12">
            </button>
        </div>
        <div class="mt-10 flex justify-center w-[60%] mx-auto">
            <button type="button" class="bg-[#5D81F3] rounded px-[65px] py-4"><h1 class="text-white text-base font-normal">Log in</h1></button>
        </div>
    </div>
</body>
</template>

<style>
@import '@/assets/css/output.css'
</style>