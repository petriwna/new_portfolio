<template>
  <aside class="sidebar">
    <nav class="sidebar__menu">
      <SidebarItem
          v-for="(item, index) in menu"
          :key="index"
          :item="item"
          :index="index"
      />
    </nav>
  </aside>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue'

const menu = [
  {
    label: 'personal-info',
    icon_arrow: 'arrow',
    children: [
      {
        label: 'bio',
        icon: 'folder',
        color: '--primitive-rose-400',
        icon_arrow: 'arrow-s',
        children: [
          {label: 'high-school', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
          {label: 'university', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
        ],
      },
      {
        label: 'interests',
        icon: 'folder',
        icon_arrow: 'arrow-s',
        color: '--primitive-teal-400',
        children: [
          {label: 'high-school', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
          {label: 'university', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
        ],
      },
      {
        label: 'education',
        icon: 'folder',
        icon_arrow: 'arrow-s',
        color: '--primitive-indigo-500',
        children: [
          {label: 'high-school', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
          {label: 'university', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
        ],
      },
    ],
  },
  {
    label: 'contacts',
    icon_arrow: 'arrow',
    children: [
      {label: 'user@gmail.com', icon: 'message', color: '--primitive-slate-500'},
      {label: '+3598246359', icon: 'phone', color: '--primitive-slate-500'},
    ],
  },
]
</script>
