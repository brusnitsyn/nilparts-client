<script>
import p from '~/package.json'
export default {
  computed: {
    name() {
      return p.name
    },
    author() {
      return p.author
    },
    version() {
      return p.version
    }
  },
  data() {
    return {
      menus: [
        {type: 'link', text: 'Главная', route: {name: 'index'}},
        {type: 'link', text: 'Каталог', route: {name: 'catalog'}},
        {type: 'link', text: 'Таможенный сервис', route: {name: 'service'}},
        {type: 'link', text: 'Новости', route: {name: 'news'}},
        {type: 'link', text: 'Контакты', route: {name: 'contacts'}},
      ]
    }
  }
}
</script>

<template>
  <footer class="border-t lg:border-gray-900/10 dark:border-gray-50/20">
    <section class="max-w-8xl mx-auto px-4 lg:px-8 flex flex-col w-full">
      <ul class="flex flex-col gap-y-2 lg:flex-row lg:gap-x-6 pt-4">
        <li v-for="(item, index) in menus" :key="index">
          <NuxtLink :to="item.route" class="hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline">
            {{ item.text }}
          </NuxtLink>
        </li>
      </ul>
      <div class="w-full flex flex-col gap-y-2 md:gap-y-0 md:flex-row justify-between items-start md:items-center py-4">
        <div class="text-sm">
          Copyright © 2022 <a>{{ name }}</a>. Все права защищены.
        </div>
        <div class="text-xs text-gray-600 dark:text-gray-400">

          <div
            class="flex flex-row items-center space-x-2 float-right"
          >
            <span class="text-center md:text-right">
              design by {{ author }}
            </span>
            <span
              class="block bg-blue-500 rounded px-1 py-0.5 text-white"
            >
              v.{{ version }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
