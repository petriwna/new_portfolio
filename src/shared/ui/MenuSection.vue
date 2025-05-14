<script setup lang="ts">
import {ref} from "vue";
import {SidebarItemModel} from "@/entities/sidebarItem/model/SidebarItemModel";

defineProps<{
  title: string
  items: any[]
}>();
const isOpen = ref(false)
// const model = new SidebarItemModel(props.item)

const handleClick = () => {
  // if (model.hasChildren) isOpen.value = !isOpen.value
  // emit('select', model.label)
}
</script>

<template>
  <div :class="['sidebar__item', { 'sidebar__item--open': isOpen }]">
    <div class="sidebar__link" @click="handleClick">

<!--      <h3>{{ title }}</h3>-->
<!--      <ul>-->
<!--        <li v-for="item in items" :key="item.title">-->
<!--          <span v-if="item.icon">{{ item.icon }}</span>-->
<!--          <span>{{ item.title || item.value }}</span>-->
<!--          <ul v-if="item.children">-->
<!--            <li v-for="child in item.children" :key="child">{{ child }}</li>-->
<!--          </ul>-->
<!--        </li>-->
<!--      </ul>-->
    </div>
  </div>
</template>
