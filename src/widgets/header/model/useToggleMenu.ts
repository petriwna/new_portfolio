import {ref, onUnmounted} from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
    document.body.classList.toggle('is-scroll-disabled', isOpen.value)
}

onUnmounted(() => {
    document.body.classList.remove('is-scroll-disabled')
})

export function useToggleMenu() {
    return {
        isOpen,
        toggleMenu
    }
}
