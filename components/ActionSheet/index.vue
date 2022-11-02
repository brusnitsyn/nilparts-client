<template>
  <div
    key="actionSheet"
    class="fixed bottom-0 w-screen z-50 flex"
    style="max-height: 66.666667%"
  >
    <div
      class="relative max-w-8xl px-4 pb-4 w-full mx-auto flex flex-col flex-1 space-y-1 overflow-y-auto justify-end"
    >
      <slot/>
    </div>
  </div>
</template>
