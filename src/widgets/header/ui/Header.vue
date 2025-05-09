<template>
  <div class="header">
    <Nav/>
    <button
        ref="menuBtnOpen"
        class="navbar__burger tab link menu-btn-open"
        type="button"
        @click="toggleMenu"
    >
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
import MobileMenu from '../../mobile-menu/ui/MobileMenu.vue'
import Nav from "@/widgets/nav/ui/Nav.vue";
import Icon from "@/shared/ui/Icon.vue";

import { useToggleMenu } from '../model/useToggleMenu';

const { isOpen, toggleMenu } = useToggleMenu();
</script>
