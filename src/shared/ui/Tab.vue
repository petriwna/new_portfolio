<template>
  <div class="tab" :class="{ active }">
    <p @click="$emit('click')">{{ label }}</p>
    <Icon name="close" size="16" class="tab__icon" @click.stop="$emit('close')" />
  </div>
</template>
<script setup lang="ts">
import Icon from "@/shared/ui/Icon.vue"
defineProps<{ label: string; active?: boolean }>()
defineEmits(['click', 'close'])
</script>
