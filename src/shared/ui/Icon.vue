<script setup lang="ts">
defineProps<{
  name: string
  className?: string
  size?: string
}>()

const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <svg :width="size || 24" :height="size || 24" :class="['icon', className]">
    <use :href="`${baseUrl}icons.svg#icon-${name}`"/>
  </svg>
</template>
