<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps(['active'])
</script>

<template>
  <div class="tab" :class="active ? 'active' : ''">
    <slot></slot>
  </div>
</template>

<style>
.tab {
  @apply hidden;
}
.tab.active {
  @apply block;
}
</style>
