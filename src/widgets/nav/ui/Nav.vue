<template>
  <nav class="navbar">
    <div class="navbar__container">
      <RouterLink class="navbar__logo nav-item link" to="/">nataliia-sychevska</RouterLink>
      <div class="navbar__items">
        <div class="navbar__nav">
          <RouterLink
              v-for="link in linksWithoutContacts"
              :key="link.to"
              class="nav-item link"
              :class="{ 'nav-item--active': route.path === link.to }"
              :to="link.to"
          >
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="navbar__contacts-tab">
      <RouterLink
          class="nav-item link"
          :class="{ 'nav-item--active': route.path === contactLink.to }"
          :to="contactLink.to"
      >
        {{ contactLink.label }}
      </RouterLink>
    </div>
  </nav>
</template>
<script setup lang="ts">
import {useRoute} from 'vue-router'
import {navLinks} from '../model/navLinks'

const route = useRoute()

const linksWithoutContacts = navLinks.filter(link => link.to !== '/contacts')
const contactLink = navLinks.find(link => link.to === '/contacts')!
</script>
