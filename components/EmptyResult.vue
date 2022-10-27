<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div class="flex flex-col justify-center items-center flex-1 w-full">
    <div class="max-w-lg">
      <div>
        <span> </span>
      </div>
      <div>
        <span class="text-center">{{ text }}</span>
      </div>
    </div>
  </div>
</template>
