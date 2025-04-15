import { ref, onMounted, watch } from 'vue'

export function useDarkMode() {
  const isDarkMode = ref(false)

  const updateHtmlClass = (darkMode) => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('darkMode', isDarkMode.value.toString())
  }

  onMounted(() => {
    const storedPreference = localStorage.getItem('darkMode')
    // Check for system preference if no stored preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    if (storedPreference !== null) {
      isDarkMode.value = storedPreference === 'true'
    } else {
      isDarkMode.value = prefersDark // Default to system preference
    }
    updateHtmlClass(isDarkMode.value)
  })

  // Watch for changes in the ref and update the class/localStorage
  watch(isDarkMode, (newValue) => {
    updateHtmlClass(newValue)
    // Note: localStorage is updated in toggleDarkMode to avoid writing on initial load
  })

  return {
    isDarkMode,
    toggleDarkMode,
  }
}
