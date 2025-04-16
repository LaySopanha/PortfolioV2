import { createRouter, createWebHistory } from 'vue-router'

// Router is still needed for Vue initialization, but routes are handled by App.vue sections now.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // No routes needed for single-page layout
    // You could potentially add routes later if specific sections
    // should have unique URLs, but it complicates smooth scrolling.
  ],

  // Optional: Add scroll behavior to reset scroll position if routes were used
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { top: 0 }
  //   }
  // }
})

export default router
