<script setup lang="ts">
import logo from "../assets/logo.png"
import { ref } from "vue"

const navColor = "#F8F8FE";
const props = defineProps({
  originState: Boolean
})
const showSidebar = ref(props.originState);

const clickNavBarEmit = defineEmits(["click-navbar"]);
function clickNavBar() {
  showSidebar.value = !showSidebar.value;
  clickNavBarEmit("click-navbar", showSidebar.value);
}
</script>

<template>
  <VaNavbar :color="navColor" class="mb-3">
    <template #left>
      <VaButton :color="navColor" :icon="showSidebar ? 'menu_open' : 'menu'" @click="clickNavBar" />
      <VaNavbarItem>
        <p class="ml-2.5 w-full">HAJIMI WEBRTC</p>
      </VaNavbarItem>
    </template>
    <template #right>
      <VaNavbarItem class="hidden sm:block">
        <img :src="logo" alt="web-logo" class="w-10 max-w-full max-h-full" />
      </VaNavbarItem>
    </template>
  </VaNavbar>
</template>
