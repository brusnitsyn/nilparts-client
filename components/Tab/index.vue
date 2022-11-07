<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps(['customClass'])

// Defining our reactive `data()` properties
let tabContainer = ref(null)
let tabHeaders = ref(null)
let tabs = ref(null)
let activeTabIndex = ref(0)

onMounted(() => {
  tabs.value = [...tabContainer.value.querySelectorAll('.tab')]
  for (let x of tabs.value) {
    if (x.classList.contains('active')) {
      activeTabIndex = tabs.value.indexOf(x)
    }
  }
})

const changeTab = (index) => {
  // Set activeTabIndex item to the index of the element clicked
  activeTabIndex = index
  // Remove any active classes
  for (let x of [...tabs.value, ...tabHeaders.value]) {
    x.classList.remove('active')
  }
  // Add active classes where appropriate, to the active elements!
  tabs.value[activeTabIndex].classList.add('active')
  tabHeaders.value[activeTabIndex].classList.add('active')
}
</script>

<template>
  <div id="tabs-container" :class="customClass" ref="tabContainer">
    <div class="mb-2">
      <ul
        id="tab-headers"
        class="inline-flex space-x-2 overscroll-x-contain overflow-x-scroll"
      >
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          class="cursor-pointer self-start bg-gray-100 rounded-lg px-4 py-3"
          :class="activeTabIndex === index ? 'active' : ''"
          @click="changeTab(index)"
          ref="tabHeaders"
        >
          {{ tab.title }}
        </li>
      </ul>
    </div>
    <div id="active-tab">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#tab-headers {
  .active {
    @apply text-primary-500;
  }
}
</style>
