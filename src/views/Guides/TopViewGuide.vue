<script setup lang="ts">
import {RouterLink, RouterView, useRouter} from 'vue-router'
import {
    NAvatar, NButton, NConfigProvider, NDialogProvider, NDropdown,
    NGradientText, NInput,
    NLayout, NLayoutHeader, NLoadingBarProvider, NMenu, NMessageProvider, NSpace, NTag
} from 'naive-ui'
import type {DropdownOption} from 'naive-ui'
import TopViewGuide from "@/views/Guides/TopViewGuide.vue";

const $router = useRouter();
import {h, ref} from 'vue'
import type {Component} from "vue";
import {NIcon} from 'naive-ui'
import type {MenuOption} from 'naive-ui'

function renderIcon(icon: Component) {
    return () => h(NIcon, null, {default: () => h(icon)})
}

const menuOptions: MenuOption[] = [
    {
        label: 'Home',
        key: 'home'
    },
    {
        label: 'Tools',
        key: 'tools'
    },
    {
        label: 'Schedules',
        key: 'schedules'
    },
    {
        label: 'Tasks',
        key: 'tasks'
    }
]

const activeKey = ref(), isLoggedIn = true;
const dropdownOptions: DropdownOption[] = [
    {label: "Account", key: "auth.principal"},
    {label: "Sign out", key: "auth.sign-out"},
];

function dropdownHandler(key: string) {
    $router.push({name: key});
}
</script>

<template>
    <div class="flex items-center justify-between w-full m-3 gap-5">
        <div class="flex items-center cursor-pointer gap-3 mx-5">
            <img src="@/assets/images/TaskJournal%20Icon.svg" width="40" height="40"/>
            <NGradientText class="font-bold text-lg">TaskJournal</NGradientText>
        </div>
        <div class="flex-grow">
            <NMenu v-model:value="activeKey" mode="horizontal" :options="menuOptions"/>
        </div>
        <div class="flex gap-5 justify-center mx-10">
            <NInput />
            <NTag>CMD + K</NTag>
        </div>
        <div v-if="!isLoggedIn" class="flex gap-3 mx-5">
            <NButton type="primary">Get Started</NButton>
        </div>
        <div v-else class="flex gap-3 mx-5">
            <NDropdown placement="bottom-end" show-arrow :options="dropdownOptions" @select="dropdownHandler">
                <NAvatar/>
            </NDropdown>
        </div>
    </div>
</template>

<style scoped>

</style>