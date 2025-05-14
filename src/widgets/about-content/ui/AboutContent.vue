<template>
  <div class="about__container">
    <div class="about__tab-container">
      <Tab
          v-for="tab in tabs"
          :key="tab.label"
          :label="tab.label"
          :active="tab.label === activeTab"
          @click="() => $emit('changeTab', tab.label)"
          @close="() => $emit('closeTab', tab.label)"
      />
    </div>
    <div class="about__content">
      <component :is="currentComponent" v-if="currentComponent"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import {computed} from 'vue'
import Tab from "@/shared/ui/Tab.vue"
import Scroll from "@/shared/ui/Scroll.vue";

const props = defineProps<{
  tabs: { label: string; component: any }[],
  activeTab: string
}>()

const currentComponent = computed(() => {
  return props.tabs.find(tab => tab.label === props.activeTab)?.component
})
</script>
