<script>
export default {
  computed: {
    showDrawer: {
      get() {
        return this.$store.state.app.navbar.showDrawer
      },
      async set(value) {
        await this.$store.dispatch('app/setNavbarShowDrawer', value)
      },
    },
  },
  watch: {
    showDrawer() {
      this.updateDrawerOptions()
    },
  },
  methods: {
    updateDrawerOptions() {
      // drawer
      if (this.showDrawer) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    },
    toggleDrawer() {
      this.showDrawer = !this.showDrawer
    },
  },
}
</script>

<template>
  <div>
    <DrawerSheetOverlay v-show="showDrawer" />
    <Transition name="slide-fade-from-left">
      <div
        v-if="showDrawer"
        class="fixed left-0 top-0 bottom-0 backdrop-filter backdrop-blur-md h-full z-50 w-full lg:max-w-md flex-none transition-colors duration-300 bg-gray-100/80 dark:bg-slate-800/80 backdrop-blur supports-backdrop-blur:bg-white/60"
      >
        <div>
          <slot name="header" :toggle-drawer="toggleDrawer" />
        </div>
        <div class="flex flex-col grow">
          <slot name="body" />
        </div>
        <div>
          <slot name="footer" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.slide-fade-from-left-enter-active {
  transition: all 0.26s ease-out;
}

.slide-fade-from-left-leave-active {
  transition: all 0.26s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-from-left-enter-from {
  transform: translateX(100%);
  opacity: 1;
}

.slide-fade-from-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
