<template>
  <div>
    <div class="header">
      <Nav/>
      <button ref="menuBtnOpen" class="mobile-menu__btn-close tab link menu-btn-open" type="button"
              @click="$emit('close')">
        <svg class="mobile-menu__icon" width="24" height="24">
          <use href="../../public/icons.svg#icon-close"></use>
        </svg>
      </button>
    </div>
    <div class="mobile-menu__content">
      <p class="mobile-menu__list-title"># navigate:</p>
      <ul class="mobile-menu__list">
        <li>
          <RouterLink class="mobile-menu__link" to="/" @click="$emit('close')">_hello</RouterLink>
        </li>
        <li>
          <RouterLink class="mobile-menu__link" to="/about" @click="$emit('close')">_about-me</RouterLink>
        </li>
        <li>
          <RouterLink class="mobile-menu__link" to="/projects" @click="$emit('close')">_projects</RouterLink>
        </li>
        <li>
          <RouterLink class="mobile-menu__link" to="/contacts" @click="$emit('close')">_contact-me</RouterLink>
        </li>
      </ul>
    </div>
  </div>
  <Footer/>
</template>
<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
</script>
