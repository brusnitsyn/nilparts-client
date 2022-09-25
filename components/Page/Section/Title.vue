<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    route: {
      type: Object,
      default: undefined
    }
  }
}
</script>

<template>
  <div class="flex flex-row justify-between items-center mb-2">
    <span class="text-lg font-medium">{{ text }}</span>
    <Anchor v-if="route" :text="route.name" :to="route.to" class="hidden md:block"/>
  </div>
</template>
