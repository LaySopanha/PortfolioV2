const observerOptions = {
  root: null, // relative to document viewport
  rootMargin: '0px',
  threshold: 0.1 // trigger when 10% of the element is visible
}

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('intersecting')
      // Optional: Unobserve after intersection to avoid re-triggering
      // observer.unobserve(entry.target);
    } else {
      // Optional: Remove class if you want the animation to reverse when scrolling out
      // entry.target.classList.remove('intersecting');
    }
  })
}

const observer = new IntersectionObserver(observerCallback, observerOptions)

export const vIntersect = {
  mounted: (el) => {
    // Add initial state class for transition setup
    el.classList.add('intersect-initial')
    observer.observe(el)
  },
  beforeUnmount: (el) => {
    observer.unobserve(el)
  }
}

// Helper function to apply directive globally if needed
export const registerIntersectDirective = (app) => {
  app.directive('intersect', vIntersect)
}
