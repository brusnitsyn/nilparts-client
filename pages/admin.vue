<script>
export default {
  layout: 'admin',
  middleware: ['auth', 'isAdmin']
}
</script>

<template>
  <div class="max-w-8xl">
    <NuxtChild />
  </div>
</template>
