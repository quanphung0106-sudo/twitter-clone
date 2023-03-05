<template>
    <div class="m-2 border rounded-2xl bg-gray-50 dark:bg-dim-700 overflow-hidden" :class="twitterBorderColor">
        <h1 class="p-3 text-2xl font-extrabold text-gray-900 border-b dark:text-white" :class="twitterBorderColor">{{
            props.title }}</h1>
        <slot />

        <div class="p-3 text-sm text-blue-400 hover:bg-gray-100 dark:hover:bg-dim-300 cursor-pointer"
            :class="defaultTransition">Show more</div>
    </div>
</template>

<script setup>

const { twitterBorderColor, defaultTransition } = useTailwindConfig()
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped></style>