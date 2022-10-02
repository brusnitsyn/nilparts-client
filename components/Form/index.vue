<template>
  <div class="">
    <slot name="header"/>
    <div class="space-y-2" :class="{'pt-5': $scopedSlots.header, 'pb-4.5': $scopedSlots.footer}">
      <slot name="body"/>
    </div>
    <slot name="footer"/>
  </div>
</template>
