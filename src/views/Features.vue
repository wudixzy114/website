<!-- src/views/Features.vue -->
<!--suppress HtmlDeprecatedAttribute -->
<template>
  <section id="features" class="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">游戏特色</h2>
      <p class="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        《鸿鹄志》致力于提供前所未有的自由度，让玩家真正掌控自己的命运
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
            v-for="feature in gameStore.features"
            :key="feature.id"
            class="card bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            @click="gameStore.setSelectedFeature(feature)"
        >
          <figure class="p-6 bg-gradient-to-br from-red-900 to-red-700">
            <div class="w-16 h-16 mx-auto flex items-center justify-center bg-yellow-500 rounded-full">
              <component :is="feature.icon" class="w-8 h-8 text-red-900" />
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h3 class="card-title text-xl">{{ feature.title }}</h3>
            <p class="text-gray-300">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- 特色详情模态框 -->
      <div v-if="gameStore.selectedFeature" class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" @click.self="gameStore.setSelectedFeature(null)">
        <div class="bg-gray-800 rounded-lg max-w-2xl w-full p-6 relative">
          <button
              class="absolute top-4 right-4 text-gray-400 hover:text-white"
              @click="gameStore.setSelectedFeature(null)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="flex items-center mb-4">
            <div class="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-full mr-4">
              <component :is="gameStore.selectedFeature.icon" class="w-6 h-6 text-red-900" />
            </div>
            <h3 class="text-2xl font-bold">{{ gameStore.selectedFeature.title }}</h3>
          </div>

          <p class="text-gray-300 mb-6">
            {{ gameStore.selectedFeature.description }}
          </p>

          <div class="bg-gray-700 p-4 rounded-lg">
            <h4 class="font-bold mb-2">实现细节</h4>
            <p class="text-sm text-gray-300">
              {{ getFeatureDetails(gameStore.selectedFeature.id) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGameStore } from '../stores/gameStore';
import { AcademicCapIcon, SparklesIcon, BookOpenIcon, CodeBracketIcon } from '@heroicons/vue/24/outline';

export default defineComponent({
  name: 'Features',
  components: {
    AcademicCapIcon,
    SparklesIcon,
    BookOpenIcon,
    CodeBracketIcon
  },
  setup() {
    const gameStore = useGameStore();

    const getFeatureDetails = (id: number) => {
      switch(id) {
        case 1:
          return '玩家可以自由选择学习方向，不受传统游戏职业限制。可以同时习武、读书、经商，根据个人喜好发展角色能力。';
        case 2:
          return '采用最新AI技术，根据玩家选择动态生成剧情和对话。每个玩家的游戏体验都是独一无二的，AI会适应玩家的游戏风格。';
        case 3:
          return '游戏背景设定在汉代，精心还原了当时的历史文化、社会制度和风俗习惯。玩家可以体验汉代的政治、军事、文化生活。';
        case 4:
          return '游戏提供多条剧情线，玩家的每个选择都会影响故事走向和最终结局。可以成为一代名将、治国能臣、富商巨贾或隐士高人。';
        default:
          return '';
      }
    };

    return {
      gameStore,
      getFeatureDetails
    };
  }
});
</script>
