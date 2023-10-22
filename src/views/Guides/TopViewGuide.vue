<script setup lang="ts">
import {RouterLink, RouterView, useRouter} from 'vue-router'
import {
    NAvatar, NButton, NConfigProvider, NDialogProvider, NDropdown,
    NGradientText,
    NLayout, NLayoutHeader, NLoadingBarProvider, NMenu, NMessageProvider, NSpace
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

const activeKey = ref(), isLoggedIn = false;
const dropdownOptions: DropdownOption[] = [
    {label: "Account", key: "auth.principal"},
    {label: "Sign out", key: "auth.sign-out"},
];

function dropdownHandler(key: string) {
    $router.push({name: key});
}
</script>

<template>
    <div class="flex items-center justify-between px-8">
        <div class="flex items-center cursor-pointer">
            <img src="@/assets/images/TaskJournal%20Icon.svg" width="40" height="40"/>
            <NGradientText>TaskJournal</NGradientText>
        </div>
        <div class="flex">
            <NMenu v-model:value="activeKey" mode="horizontal" :options="menuOptions"/>
        </div>
        <div v-if="!isLoggedIn">
            <NButton type="primary">Get Started</NButton>
        </div>
        <div v-else>
            <NDropdown placement="bottom-end" show-arrow :options="dropdownOptions" @select="dropdownHandler">
                <NAvatar/>
            </NDropdown>
        </div>
    </div>
</template>

<style scoped>

</style>