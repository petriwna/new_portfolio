<script setup>
import {RouterView} from 'vue-router'

import Header from "@/components/Header.vue";
import Hero from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div class="container">
    <header>
      <Header/>
    </header>
    <main>
      <!--      <Hero />-->
      <!--      <About />-->
      <RouterView/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>
