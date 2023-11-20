import { ref, onMounted, onUnmounted } from 'vue'

export function useObserver(callback: () => void) {
  const lastItem = ref(null)
  let observer: null | IntersectionObserver = null

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback()
      }
    })

    if (lastItem.value && observer) {
      observer.observe(lastItem.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { lastItem }
}
