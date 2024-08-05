<template>
  <div class="h-full min-w-min bg-white">
    <div class="w-full relative flex justify-center items-center mt-20">
      <header class="">
        <div class="top-0 justify-center flex">
          <img src="/public/logo.svg" alt="logo" />
        </div>
        <div class="flex mt-16 max-w-[1504px]">
          <div class="">
            <img src="/public/image-hero-left.png" alt="left" />
          </div>
          <div class="flex-row flex gap-0">
            <div>
              <h1>Group Chat for Everyone</h1>
              <h2>
                Meet makes it easy to connect with others face-to-face virtually
                and collaborate across any device.
              </h2>

              <div>
                <button>Download v1.3</button>
                <button>What is it?</button>
              </div>
            </div>
          </div>
          <div>
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
