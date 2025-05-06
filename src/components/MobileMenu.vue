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
          <a class="mobile-menu__link" href="#hello">
            _hello
          </a>
        </li>
        <li>
          <a class="mobile-menu__link" href="#chefs-section">
            _about-me
          </a>
        </li>
        <li>
          <a class="mobile-menu__link" href="#formats-section">_projects</a>
        </li>
        <li>
          <a class="mobile-menu__link" href="#contact-section">
            _contact-me
          </a>
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
