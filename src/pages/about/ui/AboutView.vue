<template>
  <div class="about">
    <div class="about__title">_about-me</div>
    <SideBar @select="handleSelect" />
    <div class="about__content">
      <component :is="currentComponent" v-if="currentComponent" />

    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, computed} from 'vue'
import SideBar from "@/widgets/sidebar/ui/SideBar.vue";
import Bio from "@/widgets/AboutSection/ui/Bio.vue";
import Interests from "@/widgets/AboutSection/ui/Interests.vue";
import Education from "@/widgets/AboutSection/ui/Education.vue";

const selected = ref('bio');
const componentsMap: Record<string, any> = {
  'bio': Bio,
  'interests': Interests,
  'education': Education,
}
const handleSelect = (label: string) => selected.value = label;
const currentComponent = computed(() => componentsMap[selected.value]);
</script>
