<template>
  <div class="header">
    <Nav/>
    <button ref="menuBtnOpen" class="navbar__burger tab link menu-btn-open" type="button" @click="toggleMenu">
      <Icon name="menu" className="navbar__icon"/>
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
import MobileMenu from '../../../app/layout/MobileMenu.vue'
import Nav from "@/app/layout/Nav.vue";
import Icon from "@/shared/ui/Icon.vue";

const baseUrl = import.meta.env.BASE_URL

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.classList.toggle('is-scroll-disabled', isOpen.value)
}
</script>
