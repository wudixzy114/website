<!-- src/App.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <Home />
      <Features />
      <Story />
      <Progress />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/layout/Navbar.vue';
import Home from './views/Home.vue';
import Features from './views/Features.vue';
import Story from './views/Story.vue';
import Progress from './views/Progress.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Footer from './components/layout/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Home,
    Features,
    Story,
    Progress,
    About,
    Contact,
    Footer
  }
});
</script>

<style>
/* 全局样式 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700;900&display=swap');

body {
  font-family: 'Noto Serif SC', serif;
  background-color: #111827;
  color: #f3f4f6;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
