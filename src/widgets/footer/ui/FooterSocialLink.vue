<script setup lang="ts">
import Icon from '@/shared/ui/Icon.vue'

defineProps<{
  href: string
  icon: string
  className?: string
}>()
</script>

<template>
  <a :href="href" target="_blank" :class="['link', className]">
    <Icon :name="icon" className="footer__icon" />
  </a>
</template>
