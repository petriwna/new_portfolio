<script setup>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div class="container">
    <header>
      <Header/>
    </header>
    <main>
<!--      <Hero />-->
      <About />
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>
