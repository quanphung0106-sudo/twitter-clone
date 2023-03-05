<template>
    <div class="flex flex-col">
        <!-- Preview Card: What's happening -->
        <SidebarRightPreviewCard title="What's happening">
            <SidebarRightPreviewCardItem v-for="data in whatsHappening">
                <div>
                    <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ data.title }}</h2>
                    <p class="text-xs text-gray-400">{{ data.count }}</p>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
        <!-- Preview Card: Who to follow -->
        <SidebarRightPreviewCard title="Who to follow">
            <SidebarRightPreviewCardItem v-for="data in whoToFollowItems">
                <div class="flex flex-row justify-between p-2 items-center">
                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="data.img" :alt="data.name">
                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ data.name }}</h1>
                            <p class="text-xs text-gray-400">{{ data.handle }}</p>
                        </div>
                    </div>
                    <div class="flex items-center h-full">
                        <button
                            class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full">Follow</button>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
    </div>
</template>

<script setup>
const whatsHappening = ref([
    {
        title: 'SpaceX',
        count: '18.8k Tweets'
    },
    {
        title: '#CodingIsFum',
        count: '18.8k Tweets'
    },
    {
        title: '#artforall',
        count: '18.8k Tweets'
    },
    {
        title: 'SpaceX',
        count: '18.8k Tweets'
    },
    {
        title: 'SpaceX',
        count: '18.8k Tweets'
    },
])

const whoToFollowItems = ref([
    {
        name: 'Joe Biden',
        handle: '@JoeBiden',
        img: 'https://picsum.photos/200/200'
    },
    {
        name: 'Joe Biden',
        handle: '@JoeBiden',
        img: 'https://picsum.photos/200/200'
    },
    {
        name: 'Joe Biden',
        handle: '@JoeBiden',
        img: 'https://picsum.photos/200/200'
    },
])
</script>

<style lang="scss" scoped></style>