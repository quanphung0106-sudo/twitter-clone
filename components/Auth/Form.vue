<template>
    <div>
        <div class="pt-5 space-y-6">
            <UIInput value="hello" label="Username" placeholder="@username" v-model="data.username" />
            <UIInput value="hello" label="Password" placeholder="******" type="password" v-model="data.password" />
            <div class=""><button @click="handleLogin">Login</button></div>
        </div>
    </div>
</template>

<script setup>
const data = reactive({
    password: '',
    username: '',
    loading: false
})

async function handleLogin() {
    const { login } = useAuth()

    data.loading = true;
    try {
        await login({
            username: data.username,
            password: data.password
        })
    } catch (err) {
        console.log(err)
    } finally {
        data.loading = false;
    }
}
</script>

<style lang="scss" scoped></style>