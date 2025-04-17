<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden"
  >
    <div class="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
      <!-- Text Content -->
      <div class="md:w-3/5 text-center md:text-left motion-safe:animate-fade-in-left">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight"
        >
          Hi, I'm <span class="text-emerald-600 dark:text-emerald-400">Lay Sopanha</span>
        </h1>
        <!-- Typing Animation Placeholder -->
        <p
          class="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-medium h-16 md:h-auto"
        >
          <!-- Added height for stability during typing -->
          A
          <span class="font-semibold text-gray-800 dark:text-white">{{ typedRole }}</span
          ><span class="typed-cursor text-emerald-600 dark:text-emerald-400">|</span> creating
          innovative and user-centric solutions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
          <!-- Added Icons to Buttons -->
          <a
            href="#projects"
            @click.prevent="smoothScroll('#projects')"
            class="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 8h1V5H5v3zm0 4h1v2H5v-2zm1 4H5v-2h1v2z"
                clip-rule="evenodd"
              />
            </svg>
            View My Work
          </a>
          <a
            href="#contact"
            @click.prevent="smoothScroll('#contact')"
            class="inline-flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Get In Touch
          </a>
        </div>
        <!-- Social Links -->
        <div class="flex justify-center md:justify-start space-x-6">
          <a
            href="https://github.com/LaySopanha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            class="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-3xl transition-colors duration-200 transform hover:scale-110"
          >
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/lay-sopanha-12a62b2b4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            class="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-3xl transition-colors duration-200 transform hover:scale-110"
          >
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Image Placeholder with Animation -->
      <div
        class="md:w-2/5 flex justify-center md:justify-end mt-10 md:mt-0 motion-safe:animate-fade-in-right"
      >
        <div
          class="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-emerald-200 to-cyan-300 dark:from-emerald-800 dark:to-cyan-800 shadow-xl flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-700"
        >
          <span class="text-gray-500 dark:text-gray-400 text-lg font-medium"></span>
          <img src="/images/Profile1.jpg" alt="Your Name" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { smoothScroll } from '@/utils/helpers'

// --- Typing Animation Logic ---
const roles = ['Data Scientist', 'Full-stack Developer'] // Add roles to type
const typedRole = ref('')
let roleIndex = 0
let charIndex = 0
let typingTimeout = null
let isDeleting = false

const type = () => {
  const currentRole = roles[roleIndex]
  if (isDeleting) {
    // Deleting
    typedRole.value = currentRole.substring(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length // Move to next role
      typingTimeout = setTimeout(type, 500) // Pause before typing next role
    } else {
      typingTimeout = setTimeout(type, 50) // Deleting speed
    }
  } else {
    // Typing
    typedRole.value = currentRole.substring(0, charIndex + 1)
    charIndex++
    if (charIndex === currentRole.length) {
      isDeleting = true
      typingTimeout = setTimeout(type, 1500) // Pause after typing role
    } else {
      typingTimeout = setTimeout(type, 100) // Typing speed
    }
  }
}

onMounted(() => {
  typingTimeout = setTimeout(type, 500) // Initial delay
})

onUnmounted(() => {
  clearTimeout(typingTimeout) // Cleanup on component unmount
})
// --- End Typing Animation Logic ---
</script>

<style scoped>
/* Blinking Cursor Animation */
.typed-cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 0.7s infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* Simple Fade-in Animations (add to tailwind.config.cjs if needed) */
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out forwards;
}
.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out forwards;
}
</style>
