<template>
  <div :class="['sidebar__item', { 'sidebar__item--open': isOpen }]">
    <div class="sidebar__link" @click="toggle">
      <svg
          v-if="hasChildren"
          class="sidebar__arrow"
          :class="{ rotated: isOpen }"
          width="16" height="16"
      >
        <use :href="`/icons.svg#icon-${item.icon_arrow}`"/>
      </svg>
      <div class="sidebar__link-text" @click="toggle"
           :class="{ 'sidebar__link-text--left': item.padding}">
        <svg v-if="item.icon"
             class="sidebar__icon" width="16" height="16"
             :style="{ fill: item.color ? `var(${item.color})` : 'currentColor' }"
        >
          <use :href="`/icons.svg#icon-${item.icon}`"/>
        </svg>
        <span class="sidebar__label"
              :class="{ 'sidebar__label--disabled': !item.children || item.children.length === 0 }"
        >{{ item.label }}</span>
      </div>
    </div>

    <div v-if="hasChildren && isOpen" class="sidebar__sub-menu" :class="{ 'sidebar__sub-menu--first': index === 0 }">
      <SidebarItem
          v-for="(child, index) in item.children"
          :key="index"
          :item="child"
      />
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import SidebarItem from './SidebarItem.vue'

const props = defineProps({
  item: Object,
  index: Number,
})

const isOpen = ref(false)
const hasChildren = computed(() => props.item.children?.length > 0)

const toggle = () => {
  if (hasChildren.value) {
    isOpen.value = !isOpen.value
  }
}
</script>
