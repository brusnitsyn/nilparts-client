<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    to: {
      type: [String, Object],
      default: undefined
    },
    href: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      defaultStyle: 'cursor-pointer transition-colors duration-300 dark:hover:text-white hover:text-primary-600'
    }
  },
  methods: {
    onClick() {
      if (this.to) {
        this.$router.push(this.to)
      }
      if (!this.href) {
        this.$emit('click')
      }
    }
  }
}
</script>

<template>
  <NuxtLink
    v-if="to"
    tag="a"
    :to="to"
    :class="`${defaultStyle}`"
  >
    <slot>{{ text }}</slot>
  </NuxtLink>
  <a
    v-else
    :class="`${defaultStyle}`"
    :href="href"
    @click="onClick"
  >
    <slot>{{ text }}</slot>
  </a>
</template>
