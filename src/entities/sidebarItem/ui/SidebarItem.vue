<template>
  <div :class="['sidebar__item', { 'sidebar__item--open': isOpen }]">
    <div class="sidebar__link" @click="handleClick">
      <svg
          v-if="model.hasChildren"
          class="sidebar__arrow"
          :class="{ rotated: isOpen }"
          width="16" height="16"
      >
        <use :href="model.arrowHref"/>
      </svg>
      <div class="sidebar__link-text"
           :class="{ 'sidebar__link-text--left': model.isPadding}">
        <svg v-if="props.item.icon"
             class="sidebar__icon" width="16" height="16"
             :style="{ fill: model.colorStyle }"
        >
          <use :href="model.iconHref"/>
        </svg>
        <span class="sidebar__label"
              :class="{ 'sidebar__label--disabled': !model.hasChildren }"
        >{{ model.label }}</span>
      </div>
    </div>

    <div v-if="model.hasChildren && isOpen" class="sidebar__sub-menu" :class="{ 'sidebar__sub-menu--first': index === 0 }">
      <SidebarItem
          v-for="(child, index) in model.children"
          :key="index"
          :item="child"
          :index="index"
          @select="$emit('select', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {SidebarItemModel} from '../model/SidebarItemModel'
import {SidebarItem as SidebarItemType} from '../types/SidebarItem'
import SidebarItem from './SidebarItem.vue'

const props = defineProps<{
  item: SidebarItemType
  index: number
}>()

const emit = defineEmits<{
  (e: 'select', label: string): void
}>()

const isOpen = ref(false)
const model = new SidebarItemModel(props.item)

const handleClick = () => {
  if (model.hasChildren) isOpen.value = !isOpen.value
  emit('select', model.label)
}
</script>
