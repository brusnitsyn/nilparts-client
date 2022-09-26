<template>
  <div class="md:border md:rounded-xl md:shadow px-2 md:px-6 md:py-5 w-full md:min-w-sm lg:min-w-md md:dark:border-gray-50/[0.2]">
    <slot name="header"/>
    <div class="pt-5 pb-4.5">
      <slot name="body"/>
    </div>
    <slot name="footer"/>
  </div>
</template>
