<template>
    <div class="h-full min-w-min bg-white">
        <div class="w-full relative flex justify-center items-center mt-20">
            <header class="">
                <div class="top-0 justify-center flex flex-row gap-20">
                    <img src="/public/logo.svg" alt="logo" />
                </div>
                <div class="flex mt-16 max-w-[1504px]">
                    <div class="flex pr-20 items-start">
                        <img src="/public/image-hero-left.png" alt="left" />
                    </div>
                    <div class="flex-row flex text-center">
                        <div class="pt-4">
                            <h1 class="text-6xl text-title font-black pb-9">Group Chat for Everyone</h1>
                            <h2 class="text-lg text-h2 pb-8">
                                Meet makes it easy to connect with others face-to-face virtually
                                and collaborate across any device.
                            </h2>

                            <div class="flex justify-center text-base font-black gap-4 text-white bottom-0">
                                <button class="bg-btn1 pl-10 pr-10 pt-4 pb-4 rounded-full hover:bg-hcol1">Download <span
                                        class="text-sp">v1.3</span></button>
                                <button class="bg-btn2 pl-8 pr-8 pt-4 pb-4 rounded-full hover:bg-hcol">What is it?</button>
                            </div>
                        </div>
                    </div>
                    <div class="pl-20 flex items-end">
                        <img src="/public/image-hero-right.png" alt="right" />
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
};
</script>
