<template>
  <div>
    <div class="header">
      <Nav/>
      <button ref="menuBtnOpen" class="mobile-menu__btn-close tab link menu-btn-open" type="button"
              @click="$emit('close')">
        <Icon name="close" className="mobile-menu__icon"/>
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
import Footer from "@/widgets/footer/ui/Footer.vue";
import Nav from "@/app/layout/Nav.vue";
import Icon from "@/shared/ui/Icon.vue";

const baseUrl = import.meta.env.BASE_URL
</script>
