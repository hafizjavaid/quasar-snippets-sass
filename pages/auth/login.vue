<template>
    <div style="min-height: 100dvh;" class="flex flex-col items-center justify-center q-pa-md">
        <div class="q-pa-md" style="max-width: 500px; width: 100%;">
            <h1 class="text-h5 q-mb-sm text-weight-bold">Login</h1>
            <p class="q-mb-xl">Enter your information to login to your account</p>

            <q-form @submit="onSubmit" class="q-gutter-y-md">

                <q-input outlined dense color="grey-10" v-model="state.email" placeholder="Email"
                    :error="errors.email ? true : undefined" :error-message="errors.email"
                    @update:model-value="clearError('email')" />
                <q-input outlined dense color="grey-10" v-model="state.password" placeholder="Password"
                    :error="errors.password ? true : undefined" :error-message="errors.password" type="password"
                    @update:model-value="clearError('password')" />
                <q-btn type="submit" class="full-width" unelevated no-caps color="primary">
                    Sign In
                </q-btn>
            </q-form>
            <AuthSocialLogin />
            <p class="text-center q-mt-md">
                Don't have an account?
                <NuxtLink to="/auth/register" class="text-primary" style="text-decoration: underline;">Register
                </NuxtLink>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>

type FormState = {
    email: string,
    password: string
    name: string

}

const { toggleLoading, showError, showMessage } = useStore();
const { fetch: refreshSession } = useUserSession();


const state = ref<FormState>({
    email: '',
    password: '',
    name: ''

});

const errors = reactive<FormState>({
    email: '',
    password: '',
    name: ''
});

const clearError = (field: keyof FormState) => {
    errors[field] = '';
};
const onSubmit = async () => {
    try {
        toggleLoading(true);
        const result = authSchema.safeParse({
            ...state.value,
            name: state.value.email
        });
        Object.keys(errors).forEach(key => {
            errors[key as keyof FormState] = '';
        });
        console.log(result);

        if (!result.success) {
            result.error.errors.forEach((err) => {
                errors[err.path[0] as keyof FormState] = err.message;
            });
        } else {
            await $fetch("/api/auth/login", {
                method: "POST", body: {
                    ...state.value,
                    name: state.value.email
                }
            });
            await refreshSession();
            showMessage("Logged in");
            navigateTo(`/`);
        }

    } catch (error) {
        const err = handleError(error);
        showError(err);

    } finally {
        toggleLoading(false);
    }
}
</script>