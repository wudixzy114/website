<!-- src/views/Home.vue -->
<!--suppress HtmlDeprecatedAttribute -->
<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- 背景图片 -->
    <div class="absolute inset-0 z-0">
      <img src="@/assets/images/汉代背景.jpg" alt="汉代背景" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
    </div>

    <div class="container mx-auto px-4 z-10 text-center text-white">
      <h1 class="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
        <span class="text-yellow-400">鸿鹄</span>志
      </h1>
      <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
        一个真正自由的文字剧情游戏，在汉代风云中书写你的传奇
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-300">
        <button class="btn btn-primary btn-lg bg-yellow-500 hover:bg-yellow-600 text-red-900 border-none">
          开始游戏
        </button>
        <button class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-red-900">
          了解更多
        </button>
      </div>

      <div class="mt-16 animate-bounce">
        <a href="#features" class="text-white/80 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animation-delay-300 {
  animation-delay: 0.3s;
  animation-fill-mode: both;
}
</style>
