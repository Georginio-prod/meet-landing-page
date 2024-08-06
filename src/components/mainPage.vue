<template>
    <div class="items-center justify-center min-h-screen">
        <div class="flex flex-col items-center mt-28">
            <div class="w-0.5 h-20 bg-tr"></div>
            <div class="flex items-center justify-center w-12 h-12 border-2 border-tr rounded-full">
                <span class="text-lg text-num">01</span>
            </div>

            <div
                class="flex flex-row max-w-[1110px] h-auto justify-center items-center gap-8 mt-16 rounded-lg overflow-hidden">
                <div class="w-1/4 overflow-hidden rounded-lg">
                    <img src="/public/image-woman-in-videocall.jpg" alt="déo"
                        class="w-full h-full object-cover rounded-md" />
                </div>
                <div class="w-1/4 overflow-hidden rounded-lg">
                    <img src="/public/image-women-videochatting.jpg" alt="video"
                        class="w-full h-full object-cover rounded-md" />
                </div>
                <div class="w-1/4 overflow-hidden rounded-lg">
                    <img src="/public/image-men-in-meeting.jpg" alt="men"
                        class="w-full h-full object-cover rounded-md" />
                </div>
                <div class="w-1/4 overflow-hidden rounded-lg">
                    <img src="/public/image-man-texting.jpg" alt="man" class="w-full h-full object-cover rounded-md" />
                </div>
            </div>


            <div class="mt-20 max-w-[540px]  justify-center items-center flex text-center">
                <div class="justify-center items-center">
                    <h4 class="pb-4 text-gree font-black tracking-wider">
                        BUILT FOR MODERN USE
                    </h4>
                    <h1 class="pb-8 text-title text-4xl font-black break-words">
                        Smarter meetings, all in one place
                    </h1>
                    <h3 class="text-lg">
                        Send messages, share files, show your screen, and record your meetings — all in one
                        workspace. Control who can join with invite-only team access, data encryption, and data export.
                    </h3>
                </div>
            </div>

            <div class="flex flex-col items-center mt-[72px] relative">
                <div class="w-0.5 h-20 bg-tr"></div>
                <div class="flex items-center justify-center w-12 h-12 border-2 border-tr rounded-full">
                    <span class="text-lg text-num">02</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Main",
};
</script>
