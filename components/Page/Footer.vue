<template>
  <footer class="border-t lg:border-gray-900/10 dark:border-gray-50/20">
    <section class="max-w-8xl mx-auto px-4 lg:px-8 flex flex-col w-full">
      <div class="w-full flex flex-col">
        <div class="flex flex-row">
          <div>
            <span class="font-medium py-2.5 block">Каталог</span>
            <ul class="space-y-1.5">
              <li>Запчасти</li>
              <li>Спецтехника</li>
              <li>Масла и смазки</li>
              <li>Резина</li>
            </ul>
          </div>
        </div>
      </div>
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
  }
}
</script>

<style scoped>

</style>
