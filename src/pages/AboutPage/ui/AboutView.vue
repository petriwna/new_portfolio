<template>
  <div class="about">
    <SideBar @select="handleSelect" />
    <div class="about__content">
      <component :is="currentComponent" v-if="currentComponent"/>
      <p v-else class="about__placeholder">Select a topic from the sidebar</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, computed} from 'vue'

import SideBar from "@/features/sidebar/ui/SideBar.vue";
import Bio from "@/widgets/AboutSection/ui/Bio.vue";
import Interests from "@/widgets/AboutSection/ui/Interests.vue";
import Education from "@/widgets/AboutSection/ui/Education.vue";

const selected = ref('')

const componentsMap: Record<string, any> = {
  'bio': Bio,
  'interests': Interests,
  'education': Education,
}

const currentComponent = computed(() => componentsMap[selected.value])

const handleSelect = (label: string) => {
  selected.value = label
  console.log(selected.value)
}
</script>
