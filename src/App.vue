<script setup lang="ts">
import HeaderNav from './components/sections/HeaderNav.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import FooterSection from './components/sections/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col pt-[4.5rem]">
    <HeaderNav />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <FooterSection />
  </div>
</template>
