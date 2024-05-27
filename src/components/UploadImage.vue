<template>


        

      


                <div
                    class='w-[420px]  bg-white p-8 rounded-2xl flex flex-col gap-12 border'>
                    <div class='text-center'>
                        <h1 class='text-2xl font-medium mb-2'>Upload Your Photos
                            of the Product or the label</h1>
                        <p class='text-gray-400 '>Files Should be less than
                            5 MB</p>
                    </div>

                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  ">
                            <div
                                class="flex flex-col items-center justify-center pt-5 pb-6">
                                <div class="w-[50px] h-[50px] mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" id="Camera"><path
                                            d="M10 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8-3h-2.4a.888.888 0 0 1-.789-.57l-.621-1.861A.89.89 0 0 0 13.4 2H6.6c-.33 0-.686.256-.789.568L5.189 4.43A.889.889 0 0 1 4.4 5H2C.9 5 0 5.9 0 7v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-8 11a5 5 0 0 1-5-5 5 5 0 1 1 10 0 5 5 0 0 1-5 5zm7.5-7.8a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z"
                                            fill="#7c7c7c"
                                            class="color000000 svgShape w-2 h-2 mb-4"></path></svg>
                                </div>

                                <p
                                    class="mb-2 text-sm text-gray-500 "><span
                                        class="font-semibold underline text-blue-500">Click
                                        to upload</span>
                                    or drag and drop</p>
                                <p
                                    class="text-xs text-gray-500 ">SVG,
                                    PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>

                    <section class="bg-white ">
                        <div
                            class=" ">
                            <div
                                class="mx-auto max-w-screen-md sm:text-center">

                                <form action="#">
                                    <div
                                        class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0 ">
                                        <div class="relative w-full">

                                            <input
                                                class="block p-3  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500  "
                                                placeholder="Enter image details here"
                                                type="email" id="email">
                                        </div>
                                        <div>
                                            <button type="submit"
                                                class="py-3 px-5 w-full text-sm font-medium text-center text-white even:rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg  ring-2 ring-primary-300 ">Submit</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </section>

                </div>
       

</template>
<script setup>

</script>