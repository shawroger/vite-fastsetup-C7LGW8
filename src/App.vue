<script setup lang="ts">
import { ref, Transition } from "vue";
import navBar from "./components/navbar.vue";
import footerApp from "./components/footer.vue";

const page = ref(0);
const showSidebar = ref(false);
</script>

<template>
  <VaLayout>
    <template #top>
      <navBar @click-navbar="(e) => (showSidebar = e)" :originState="showSidebar"></navBar>
    </template>

    <template #left>
      <Transition name="va-sidebar-trans">
        <VaSidebar v-if="showSidebar" class="w-screen md:w-full">
          <VaSidebarItem :active="page === 0" @click="
            page = 0;
          showSidebar = false;
          " to="/">
            <VaSidebarItemContent>
              <VaIcon name="home" />
              <VaSidebarItemTitle> Home </VaSidebarItemTitle>
            </VaSidebarItemContent>
          </VaSidebarItem>
          <VaSidebarItem :active="page === 1" @click="
            page = 1;
          showSidebar = false;
          " to="/~dataview">
            <VaSidebarItemContent>
              <VaIcon name="bubble_chart" />
              <VaSidebarItemTitle> Data viewer </VaSidebarItemTitle>
            </VaSidebarItemContent>
          </VaSidebarItem>
          <VaSidebarItem :active="page === 2" @click="
            page = 2;
          showSidebar = false;
          " to="/~settings">
            <VaSidebarItemContent>
              <VaIcon name="settings" />
              <VaSidebarItemTitle> Settings </VaSidebarItemTitle>
            </VaSidebarItemContent>
          </VaSidebarItem>
        </VaSidebar>
      </Transition>
    </template>

    <template #content>
      <div class="mi">
        <router-view></router-view>
      </div>
      <footerApp></footerApp>
    </template>
  </VaLayout>
</template>


<style lang="css" scoped>
.va-sidebar-trans-enter-active,
.va-sidebar-trans-leave-active {
  transition: all 0.5s ease;
}
.va-sidebar-trans-enter-from,
.va-sidebar-trans-leave-to {
  transform: translateX(-100%);
}
</style>