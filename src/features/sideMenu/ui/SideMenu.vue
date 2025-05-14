<template>
  <aside class="sidebar">
    <nav class="sidebar__menu">
      <SidebarItem
          v-for="(item, index) in menu"
          :key="item.label + '-' + index"
          :item="item"
          :index="index"
          @select="$emit('select', $event)"
      />
    </nav>
  </aside>
</template>

<script setup lang="ts">
import SidebarItem from '@/entities/sidebarItem/ui/SidebarItem.vue';
import type { SidebarMenuItem } from '@/shared/config/sidebarMenuConfig';

defineProps<{
  menu: SidebarMenuItem[];
}>();

defineEmits<{
  (e: 'select', label: string): void;
}>();
</script>
