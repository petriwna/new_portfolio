<template>
  <div class="about">
    <div class="about__title">_about-me</div>
    <SideBar @select="handleSelect" />
    <AboutContent
        :tabs="openedTabs"
        :active-tab="activeTab"
        @changeTab="setActiveTab"
        @closeTab="closeTab"
    />
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import SideBar from "@/widgets/sidebar/ui/SideBar.vue";
import AboutContent from "@/widgets/about-content/ui/AboutContent.vue";

import Bio from "@/widgets/AboutSection/ui/Bio.vue"
import Interests from "@/widgets/AboutSection/ui/Interests.vue"
import Education from "@/widgets/AboutSection/ui/Education.vue"

const componentsMap = {
  bio: Bio,
  interests: Interests,
  education: Education,
}

const defaultTab = 'bio'

const openedTabs = ref([
  {
    label: defaultTab,
    component: componentsMap[defaultTab],
  }
])
const activeTab = ref(defaultTab)

const handleSelect = (label: string) => {
  if (!openedTabs.value.find(tab => tab.label === label)) {
    openedTabs.value.push({
      label,
      component: componentsMap[label],
    })
  }
  activeTab.value = label
}

const setActiveTab = (label: string) => {
  activeTab.value = label
}

const closeTab = (label: string) => {
  openedTabs.value = openedTabs.value.filter(tab => tab.label !== label)
  if (activeTab.value === label) {
    activeTab.value = openedTabs.value.at(-1)?.label || ''
  }
}
</script>
