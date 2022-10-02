<script>
export default {}
</script>

<template>
  <div>
    <ModalOverlay @click="$emit('close')"/>
    <Transition name="modal">
      <div class="fixed inset-0 w-screen z-50">
        <div
          class="relative max-w-md px-4 py-4 w-full h-full my-auto mx-auto flex flex-col justify-center flex-1 space-y-1 overflow-y-auto">
          <slot/>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  @apply scale-110;
}
</style>
