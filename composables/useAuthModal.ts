

const state = reactive({
    isOpen: false
})

export function useAuthModal () {
    const { isOpen } = toRefs(state)
    const onOpen = () => {

        state.isOpen = true
    }
    const onClose = () => {
        state.isOpen = false

    }

    return {
        onClose,
        onOpen,
        isOpen
    }
}