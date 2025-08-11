<!-- src/components/layout/Footer.vue -->
<!--suppress HtmlDeprecatedAttribute -->
<template>
  <footer class="bg-black text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center mb-4">
            <span class="text-2xl font-bold text-yellow-400">鸿鹄志</span>
            <span class="text-xs bg-red-900 text-yellow-400 px-2 py-1 rounded ml-2">汉代</span>
          </div>
          <p class="text-gray-400 mb-4">
            一个真正自由的文字剧情游戏，在汉代风云中书写你的传奇。
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold mb-4">游戏</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">游戏特色</a></li>
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">故事背景</a></li>
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">开发进度</a></li>
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">媒体资源</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold mb-4">社区</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">官方论坛</a></li>
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">玩家社区</a></li>
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">开发者日志</a></li>
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">MOD支持</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold mb-4">支持</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">常见问题</a></li>
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">联系我们</a></li>
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">隐私政策</a></li>
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">服务条款</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
        <p>&copy; 2023 鸿鹄工作室. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer'
});
</script>
