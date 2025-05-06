<template>
  <div class="header">
    <Nav/>
    <button ref="menuBtnOpen" class="mobile-menu__btn-close tab link menu-btn-open" type="button"
            @click="$emit('close')">
      <svg class="mobile-menu__icon" width="24" height="24">
        <use href="../../public/icons.svg#icon-close"></use>
      </svg>
    </button>
  </div>
  <ul class="mobile-menu__list">
    <li>
      <a class="mobile-menu__link" href="#traditions-section">
        Наші традиції
      </a>
    </li>
    <li>
      <a class="mobile-menu__link" href="#chefs-section">
        Шеф-кухарі
      </a>
    </li>
    <li>
      <a class="mobile-menu__link" href="#formats-section">Формати</a>
    </li>
    <li>
      <a class="mobile-menu__link" href="#contact-section">
        Контакти
      </a>
    </li>
  </ul>
  <Footer/>
</template>
<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
</script>
