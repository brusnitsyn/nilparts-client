<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <div class="text-left">
    <NuxtLink class="flex items-center gap-x-1" :to="{name: 'index'}">
      <span class="flex justify-center items-center">
        <iconify-icon icon="carbon:arrow-left" />
      </span>
      <span>
        В магазин
      </span>
    </NuxtLink>
    <h2 class="pt-1.5 text-xl lg:text-1xl leading-6 lg:leading-7 font-semibold">{{ title }}</h2>
    <h4>{{ subTitle }}</h4>
  </div>
</template>
