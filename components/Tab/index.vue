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
    <div id="tab-headers">
      <ul class="overscroll-x-contain overflow-x-scroll h-full">
        <!-- this shows all of the titles -->
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="activeTabIndex === index ? 'active' : ''"
          @click="changeTab(index)"
          ref="tabHeaders"
        >
          {{ tab.title }}
          <span class="absolute -bottom-[2px] w-full h-[2px] bg-primary-500" />
        </li>
      </ul>
    </div>
    <!-- this is where the tabs go, in this slot -->
    <div id="active-tab">
      <slot></slot>
    </div>
  </div>
</template>

<style>
#tab-headers ul {
  @apply w-full relative inline-flex m-0 p-0 border-b-2 border-b-gray-200;
  padding-bottom: -2px;
  scrollbar-width: none;
}

#tab-headers ul::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
}
#tab-headers ul::-webkit-scrollbar-thumb {
  @apply bg-transparent;
}

#tab-headers ul li {
  list-style: none;
  padding: 1rem 1.25rem;
  @apply whitespace-nowrap relative cursor-pointer h-full flex flex-col;
}
#tab-headers ul li.active {
  @apply text-primary-500 font-bold;
}

#tab-headers ul li.active:after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 2px;
  width: 100%;
  @apply bg-primary-500;
}
#active-tab,
#tab-headers {
  width: 100%;
}

#active-tab {
  padding: 0.75rem;
}
</style>
