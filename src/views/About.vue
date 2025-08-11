<!-- src/views/About.vue -->
<template>
  <section id="about" class="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">关于我们</h2>
      <p class="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        我们是一群热爱游戏和历史的开发者
      </p>

      <div class="max-w-4xl mx-auto">
        <div class="bg-gray-800 rounded-lg p-8 shadow-xl">
          <div class="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div class="md:w-1/3">
              <img src="@/assets/images/团队标志.png" alt="团队标志" class="rounded-lg shadow-lg">
            </div>
            <div class="md:w-2/3">
              <h3 class="text-2xl font-bold mb-4">鸿鹄工作室</h3>
              <p class="text-gray-300 mb-4">
                我们是一支独立游戏开发团队，由资深游戏开发者、历史学者和AI技术专家组成。我们热爱中国历史文化，致力于创造有深度、有内涵的游戏作品。
              </p>
              <p class="text-gray-300">
                《鸿鹄志》是我们倾注心血的作品，我们希望通过它，让玩家体验汉代的风云变幻，感受历史的厚重，同时享受自由选择带来的乐趣。
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gray-700 p-6 rounded-lg text-center">
              <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <!--suppress HtmlDeprecatedAttribute -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 class="font-bold mb-2">我们的使命</h4>
              <p class="text-sm text-gray-300">
                创造真正自由的游戏世界，让每个玩家都能在游戏中找到属于自己的故事。
              </p>
            </div>

            <div class="bg-gray-700 p-6 rounded-lg text-center">
              <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <!--suppress HtmlDeprecatedAttribute -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 class="font-bold mb-2">我们的愿景</h4>
              <p class="text-sm text-gray-300">
                结合最新AI技术与深厚历史文化，打造前所未有的互动叙事体验。
              </p>
            </div>

            <div class="bg-gray-700 p-6 rounded-lg text-center">
              <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <!--suppress HtmlDeprecatedAttribute -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 class="font-bold mb-2">我们的价值观</h4>
              <p class="text-sm text-gray-300">
                尊重历史，尊重玩家，尊重创意。我们相信游戏可以成为连接过去与未来的桥梁。
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
  name: 'About'
});
</script>
