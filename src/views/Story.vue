<!-- src/views/Story.vue -->
<template>
  <section id="story" class="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">故事背景</h2>
      <p class="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        在汉朝，一个英雄辈出的时代，你将书写自己的传奇
      </p>

      <div class="flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/2">
          <div class="relative">
            <img src="@/assets/images/汉代背景.jpg" alt="汉代场景" class="rounded-lg shadow-2xl">
            <div class="absolute -bottom-6 -right-6 bg-red-900 text-yellow-400 p-4 rounded-lg shadow-lg max-w-xs">
              <p class="font-bold">"燕雀安知鸿鹄之志哉？"</p>
              <p class="text-sm mt-1">—— 陈胜</p>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2">
          <div class="space-y-6">
            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <span class="w-8 h-8 bg-yellow-500 text-red-900 rounded-full flex items-center justify-center mr-3">1</span>
                时代背景
              </h3>
              <p class="text-gray-300">
                游戏设定在汉朝，一个政治、经济、文化都高度发达的时代。汉武帝时期，北击匈奴，南平百越，开疆拓土，国力达到鼎盛。然而，繁华背后也隐藏着各种社会矛盾和危机。
              </p>
            </div>

            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <span class="w-8 h-8 bg-yellow-500 text-red-900 rounded-full flex items-center justify-center mr-3">2</span>
                你的起点
              </h3>
              <p class="text-gray-300">
                你将扮演一个普通的少年，出身平凡但心怀壮志。在这个风云变幻的时代，你将面临无数选择：是习武从军，保家卫国？还是寒窗苦读，考取功名？或是经商致富，富甲一方？
              </p>
            </div>

            <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-bold mb-3 flex items-center">
                <span class="w-8 h-8 bg-yellow-500 text-red-900 rounded-full flex items-center justify-center mr-3">3</span>
                无限可能
              </h3>
              <p class="text-gray-300">
                在《鸿鹄志》中，你的选择将决定你的命运。你可以成为一代名将，纵横沙场；可以成为治国能臣，辅佐君王；可以成为富商巨贾，富可敌国；也可以成为隐士高人，逍遥自在。一切由你决定！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Story'
});
</script>
