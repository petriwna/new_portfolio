<template>
  <div>
    <div class="header">
      <Nav/>
      <button ref="menuBtnOpen" class="mobile-menu__btn-close nav-item link menu-btn-open" type="button"
              @click="$emit('close')">
        <Icon name="close" className="mobile-menu__icon"/>
      </button>
    </div>
    <div class="mobile-menu__content">
      <p class="mobile-menu__list-title"># navigate:</p>
      <ul class="mobile-menu__list">
        <li @click="$emit('close')">
          <RouterLink class="mobile-menu__link" to="/">_hello</RouterLink>
        </li>
        <li  @click="$emit('close')">
          <RouterLink class="mobile-menu__link" to="/about">_about-me</RouterLink>
        </li>
        <li @click="$emit('close')">
          <RouterLink class="mobile-menu__link" to="/projects">_projects</RouterLink>
        </li>
        <li @click="$emit('close')">
          <RouterLink class="mobile-menu__link" to="/contacts" >_contact-me</RouterLink>
        </li>
      </ul>
    </div>
  </div>
  <Footer/>
</template>
<script setup lang="ts">
import Footer from "@/widgets/footer/ui/Footer.vue";
import Nav from "@/widgets/nav/ui/Nav.vue";
import Icon from "@/shared/ui/Icon.vue";
</script>
