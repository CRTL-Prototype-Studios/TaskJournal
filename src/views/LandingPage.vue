<script setup lang="ts">
import {RouterLink, RouterView, useRouter} from 'vue-router'
import {
  NAvatar, NButton, NConfigProvider, NDialogProvider, NDropdown,
  NGradientText,
  NLayout, NLayoutHeader, NLoadingBarProvider, NMenu, NMessageProvider, NSpace
} from 'naive-ui'
import type { DropdownOption } from 'naive-ui'
import TopViewGuide from "@/views/Guides/TopViewGuide.vue";
const $router = useRouter();
import {h, ref} from 'vue'
import type {Component} from "vue";
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
</script>

<template>
  <NDialogProvider>
    <NConfigProvider>
      <NMessageProvider>
        <NLoadingBarProvider>
          <NLayoutHeader bordered class="flex">
            <TopViewGuide/>
          </NLayoutHeader>
          <div class="w-full relative">
            <NLayout>
              <NGradientText>
                sadsada
              </NGradientText>
            </NLayout>
          </div>
        </NLoadingBarProvider>
      </NMessageProvider>
    </NConfigProvider>
  </NDialogProvider>
</template>

<style>

</style>