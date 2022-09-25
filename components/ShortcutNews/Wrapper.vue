<template>
  <div class="flex flex-col gap-y-2.5">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 md:gap-x-4 md:gap-y-4">
      <slot/>
    </div>
    <Button type="secondary" :to="{name: 'news'}" class="md:hidden">
      Все новости
    </Button>
  </div>
</template>
