<template>
  <div class="header">
    <Nav/>
    <button ref="menuBtnOpen" class="navbar__burger tab link menu-btn-open" type="button" @click="toggleMenu">
      <svg class="navbar__icon" width="24" height="24">
        <use href="../../public/icons.svg#icon-icon-menu"></use>
      </svg>
    </button>
    <div ref="mobileMenu" class="mobile-menu" :class="{ 'is-open': isOpen }">
      <div class="container">
        <MobileMenu @close="toggleMenu"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import MobileMenu from './MobileMenu.vue'
import Nav from "@/components/Nav.vue";

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.classList.toggle('is-scroll-disabled', isOpen.value)
}
</script>
