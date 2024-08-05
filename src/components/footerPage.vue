<template>
  <footer class="justify-center min-h-screen bg-gray-100">
  <div class="relative items-center justify-center container-fullscreen w-full">
    <div class="flex flex-row w-full h-full mix-blend-multiply bg-green-500">
      <img src="/public/image-footer.jpg" alt="img" class="w-full h-full object-cover mix-blend-multiply">
      
      <div class="absolute inset-0 flex items-center justify-center text-white flex-row gap-32">
        <h1 class="text-4xl font-bold mb-4">
          Experience more together
        </h1>
        <h3 class="text-xl mb-4">
          Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
        </h3>
        <button class="px-4 py-2 bg-green-600 rounded-full hover:bg-green-700 focus:outline-none">
          Download v1.3
        </button>
      </div> 
     
    </div>
  </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>