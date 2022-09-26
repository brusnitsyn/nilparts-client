<script>
export default {
  methods: {
    close() {
      setTimeout(() => this.$emit('onClose'), 100)
    }
  }
}
</script>

<template>
  <div>
    <DrawerSheetOverlay @click="close" />
    <Transition name="slide-fade-from-left">
      <div
        class="fixed inset-0 w-screen z-50 flex">
        <div
          class="relative max-w-4xl md:px-4 md:pb-8 md:pt-8 w-full md:mx-auto flex flex-col flex-1 space-y-1 justify-center">
          <slot/>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.slide-fade-from-left-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-from-left-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-from-left-enter-from,
.slide-fade-from-left-leave-to {
  transform: translateX(0px);
  opacity: 0;
}
</style>
