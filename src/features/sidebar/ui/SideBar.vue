<template>
  <SideTab />
  <SideMenu @select="$emit('select', $event)" />
</template>
<script setup lang="ts">
import SideTab from "@/features/sidebar/ui/SideTab.vue";
import SideMenu from "@/features/sidebar/ui/SideMenu.vue";
</script>
