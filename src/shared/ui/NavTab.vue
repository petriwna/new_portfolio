<script setup lang="ts">
defineProps<{
  name: string,
  className?: string,
  route?: string,
}>()
</script>
<template>
  <div :class="['tab', className]">
    <RouterLink class="link" :to="`/${route}`">{{ name }}</RouterLink>
  </div>
</template>
