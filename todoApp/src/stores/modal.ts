import { defineStore } from 'pinia'
import { ref, shallowRef, type Component } from 'vue'

export const useModalStore = defineStore('globalModal', () => {
  const isModalOpen = ref(false)
  const innerComponentProps = ref({})
  const innerComponent = shallowRef<Component | null>(null)

  const closeGlobalModal = () => {
    isModalOpen.value = false
    innerComponent.value = null
    innerComponentProps.value = {}
  }

  const openGlobalModal = (component?: Component, props?: any) => {
    if (component) {
      innerComponent.value = component
      innerComponentProps.value = { ...props }
    }

    isModalOpen.value = true
  }

  const toggleGlobalModal = (component?: Component) => {
    if (isModalOpen.value) {
      closeGlobalModal()
    } else {
      openGlobalModal(component)
    }
  }

  return {
    innerComponentProps,
    isModalOpen,
    innerComponent,
    closeGlobalModal,
    openGlobalModal,
    toggleGlobalModal
  }
})
