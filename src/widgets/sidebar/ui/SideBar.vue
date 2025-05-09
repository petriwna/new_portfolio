<template>
  <SideTab :selectedTab="selectedTab" @select="selectTab" />
  <SideMenu :menu="menuItems" @select="handleSelect" />
</template>
<script setup lang="ts">
import { useSidebar } from '../model/useSidebar';
import SideTab from "@/features/sideTab/ui/SideTab.vue";
import SideMenu from "@/features/sideMenu/ui/SideMenu.vue";

const emit = defineEmits<{
  (e: 'select', label: string): void
}>()

const { selectedTab, menuItems, selectTab } = useSidebar();

const handleSelect = (label: string) => {
  emit('select', label)
}
</script>
