<template>
    <div>
        <MainSection title="Home" :loading="loading">
            Hello
        </MainSection>
    </div>
</template>

<script setup>
const loading = ref(false)
</script>

<style lang="scss" scoped></style>