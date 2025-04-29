<template>
  <section
    id="contact"
    v-intersect
    class="py-20 px-4 bg-gray-800/90 backdrop-blur-sm transition-colors duration-300" 
  >
    <div class="container mx-auto max-w-3xl text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 text-white">Get In Touch</h2>
      <p class="text-lg text-gray-300 mb-8 leading-relaxed">
        I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, want to discuss technology, or just say hello!
      </p>
      <a
        href="mailto:your.email@example.com" 
        class="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
      >
        Say Hello
      </a>
       <div class="mt-10 space-x-6">
         <a href="#" target="_blank" class="text-gray-400 hover:text-emerald-400 text-2xl transition-colors"><i class="fab fa-github"></i></a>
         <a href="#" target="_blank" class="text-gray-400 hover:text-emerald-400 text-2xl transition-colors"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed yet
</script>

<style scoped>
/* Contact section specific styles */
</style>
