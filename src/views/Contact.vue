<!-- src/views/Contact.vue -->
<!--suppress HtmlDeprecatedAttribute -->
<template>
  <section id="contact" class="py-20 bg-gradient-to-b from-gray-900 to-red-900 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-4">联系我们</h2>
      <p class="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        有任何问题或建议？欢迎与我们联系
      </p>

      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="bg-gray-800 rounded-lg p-8 shadow-xl">
            <h3 class="text-2xl font-bold mb-6">发送消息</h3>

            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label class="block text-gray-300 mb-2" for="name">姓名</label>
                <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                >
              </div>

              <div class="mb-4">
                <label class="block text-gray-300 mb-2" for="email">邮箱</label>
                <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                >
              </div>

              <div class="mb-4">
                <label class="block text-gray-300 mb-2" for="subject">主题</label>
                <input
                    type="text"
                    id="subject"
                    v-model="form.subject"
                    class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                >
              </div>

              <div class="mb-6">
                <label class="block text-gray-300 mb-2" for="message">留言</label>
                <textarea
                    id="message"
                    v-model="form.message"
                    rows="4"
                    class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                ></textarea>
              </div>

              <button
                  type="submit"
                  class="w-full bg-yellow-500 hover:bg-yellow-600 text-red-900 font-bold py-3 px-4 rounded-lg transition-colors"
                  :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">发送中...</span>
                <span v-else>发送消息</span>
              </button>
            </form>
          </div>

          <div>
            <div class="bg-gray-800 rounded-lg p-8 shadow-xl mb-8">
              <h3 class="text-2xl font-bold mb-6">联系信息</h3>

              <div class="space-y-4">
                <div class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p class="font-bold">邮箱</p>
                    <p class="text-gray-300">contact@honghuzhi.com</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p class="font-bold">地址</p>
                    <p class="text-gray-300">中国北京市朝阳区建国路88号</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p class="font-bold">工作时间</p>
                    <p class="text-gray-300">周一至周五: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gray-800 rounded-lg p-8 shadow-xl">
              <h3 class="text-2xl font-bold mb-6">关注我们</h3>

              <div class="flex space-x-4">
                <a href="#" class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-red-900 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>

                <a href="#" class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-red-900 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>

                <a href="#" class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-red-900 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>

                <a href="#" class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-red-900 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Contact',
  setup() {
    const form = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const isSubmitting = ref(false);

    const submitForm = () => {
      isSubmitting.value = true;

      // 模拟表单提交
      setTimeout(() => {
        alert('感谢您的留言！我们会尽快回复您。');
        form.value = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        isSubmitting.value = false;
      }, 1500);
    };

    return {
      form,
      isSubmitting,
      submitForm
    };
  }
});
</script>
