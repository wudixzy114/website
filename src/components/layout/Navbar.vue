<!-- src/components/layout/Navbar.vue -->
<!--suppress HtmlDeprecatedAttribute -->
<template>
  <nav class="navbar bg-gradient-to-r from-red-900 to-red-700 text-white shadow-lg fixed w-full z-50">
    <div class="container mx-auto px-4">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl flex items-center gap-2">
          <span class="text-2xl font-bold">鸿鹄志</span>
          <span class="text-xs bg-yellow-500 text-red-900 px-2 py-1 rounded">汉代</span>
        </a>
      </div>

      <div class="flex-none hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li v-for="item in menuItems" :key="item.name">
            <a
                :href="item.link"
                class="capitalize hover:bg-red-800 transition-colors"
                :class="{ 'bg-red-800': activeSection === item.link.substring(1) }"
                @click="setActiveSection(item.link.substring(1))"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>

      <!-- 移动端菜单按钮 -->
      <div class="flex-none lg:hidden">
        <button class="btn btn-square btn-ghost" @click="toggleMobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <div v-if="isMobileMenuOpen" class="lg:hidden bg-red-800">
      <ul class="menu menu-vertical p-4">
        <li v-for="item in menuItems" :key="item.name">
          <a
              :href="item.link"
              class="capitalize hover:bg-red-900"
              @click="setActiveSection(item.link.substring(1))"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const isMobileMenuOpen = ref(false);
    const activeSection = ref('home');

    const menuItems = [
      { name: '首页', link: '#home' },
      { name: '游戏特色', link: '#features' },
      { name: '故事背景', link: '#story' },
      { name: '开发进度', link: '#progress' },
      { name: '关于我们', link: '#about' },
      { name: '联系方式', link: '#contact' }
    ];

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const setActiveSection = (section: string) => {
      activeSection.value = section;
      isMobileMenuOpen.value = false;
    };

    return {
      isMobileMenuOpen,
      activeSection,
      menuItems,
      toggleMobileMenu,
      setActiveSection
    };
  }
});
</script>
