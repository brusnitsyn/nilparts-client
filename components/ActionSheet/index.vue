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
    <ActionSheetOverlay @click="close"/>
<!--    Переделать анимацию-->
    <Transition name="slide-fade-from-bottom" mode="out-in">
      <div
        class="fixed bottom-0 w-screen z-50 flex"
        style="max-height: 66.666667%"
      >
        <div
          class="relative max-w-8xl px-4 pb-4 w-full mx-auto flex flex-col flex-1 space-y-1 overflow-y-auto justify-end"
        >
          <slot/>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-fade-from-bottom-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-from-bottom-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-from-bottom-enter-from,
.slide-fade-from-bottom-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
