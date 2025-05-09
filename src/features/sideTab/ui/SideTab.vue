<template>
  <div class="about__page-items">
    <article class="about__page left-menu">
      <div
          v-for="tab in tabs"
          :key="tab"
          class="left-menu__tab"
          :class="{ active: tab === selectedTab }"
          @click="() => $emit('select', tab)"
      >
        <Icon :name="tab" className="left-menu__icon" :class="{ active: tab === selectedTab }"/>
      </div>
    </article>
  </div>
</template>
<script setup lang="ts">
import Icon from "@/shared/ui/Icon.vue";
import {sidebarMenuTabs} from '@/shared/config/sidebarMenuConfig';

defineProps<{ selectedTab: string }>();
defineEmits<{
  (e: 'select', tab: string): void;
}>();

const tabs = sidebarMenuTabs;
</script>
