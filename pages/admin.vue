<script>
export default {
  layout: 'admin',
  middleware: ['auth']
}
</script>

<template>
  <div class="max-w-8xl">
    <NuxtChild />
  </div>
</template>
