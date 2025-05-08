<script setup>
import {RouterView} from 'vue-router'

import Header from "@/widgets/header/ui/Header.vue";
import Footer from "@/widgets/footer/ui/Footer.vue";

</script>

<template>
  <div class="container">
    <header>
      <Header/>
    </header>
    <main>
      <RouterView/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>
