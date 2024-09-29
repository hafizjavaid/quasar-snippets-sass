import type { APIError } from "~/types";
import { toast } from "vue-sonner";

// Global Store for our application
interface StateProps {
    isLoading: boolean
    appError: null | APIError
}

const state = reactive<StateProps>({
    isLoading: false,
    appError: null,
})

export default () => {
    const { isLoading, appError } = toRefs(state);
    const toggleLoading = (value: boolean) => {
        state.isLoading = value
    }
    const toggleError = (error: null | APIError) => {
        state.appError = error
    }
    const showError = (error: APIError) => {
        console.log(error);
        toast.error(error.message);
    }
    const showMessage = (title: string) => {
        toast.success(title);
    }

    return {
        toggleLoading,
        isLoading,
        appError,
        toggleError,
        showError,
        showMessage
    }
}