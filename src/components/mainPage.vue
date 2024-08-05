<template>
  <div class="items-center justify-center min-h-screen">
    <div class="flex flex-col items-center mt-28">
      <div class="w-0.5 h-10 bg-gray-400"></div>
      <div
        class="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full"
      >
        <span class="text-lg">01</span>
      </div>

      <div
        class="flex flex-row max-w-[1110px] h-auto justify-center items-center gap-3 mt-16">
      
        <div>
          <img src="/public/image-woman-in-videocall.jpg" alt="déo" />
        </div>
        <div>
          <img src="/public/image-women-videochatting.jpg" alt="video" />
        </div>

        <div>
          <img src="/public/image-men-in-meeting.jpg" alt="men" />
        </div>
        <div>
          <img src="/public/image-man-texting.jpg" alt="man" />
        </div>
      </div>

      <div class="mt-20 max-w-[540px] flex text-center">
        <div class="justify-center items-center">
        <h4 class="pb-4">
            Built for modern use
        </h4>
        <h1 class="pb-8">
            Smarter meetings, all in one place
        </h1>
        <h3>
            Send messages, share files, show your screen, and record your meetings — all in one 
            workspace. Control who can join with invite-only team access, data encryption, and data export.
        </h3>
        </div>
      </div>

      <div class="flex flex-col items-center mt-16 relative">
        <div class="w-0.5 h-10 bg-gray-400"></div>
      <div
        class="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full"
      >
        <span class="text-lg">02</span>
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
