<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__logo tab">
        <RouterLink class="link" to="/">nataliia-sychevska</RouterLink>
      </div>
      <div class="navbar__items">
        <ul class="navbar__nav">
          <li class="tab" :class="{ 'tab--active': $route.path === '/' }">
            <RouterLink class="link" to="/">_hello</RouterLink>
          </li>
          <li class="tab" :class="{ 'tab--active': $route.path === '/about' }">
            <RouterLink class="link" to="/about">_about-me</RouterLink>
          </li>
          <li class="tab" :class="{ 'tab--active': $route.path === '/projects' }">
            <RouterLink class="link" to="/projects">_projects</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar__contacts-tab">
      <div class="tab" :class="{ 'tab--active': $route.path === '/contacts' }">
        <RouterLink class="link" to="/contacts">_contact-me</RouterLink>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import {useRoute} from 'vue-router'

const $route = useRoute()
</script>
