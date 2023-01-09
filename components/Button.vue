<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'md',
    },
    to: {
      type: [String, Object],
      default: undefined,
    },
    href: {
      type: String,
      default: undefined,
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultStyle: 'border transition-color duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/60 focus:ring-offset-gray-800/60 flex items-center justify-center gap-x-2 ',
      styles: {
        none: 'cursor-pointer bg-transparent',
        default: 'cursor-pointer',
        bordered: 'cursor-pointer text-white border border-2 border-white hover:border-black/70',
        primary: 'cursor-pointer text-white bg-primary-500 hover:bg-primary-400 border-primary-500',
        secondary: 'cursor-pointer text-slate-800 bg-gray-200 border-gray-200 hover:bg-gray-300 dark:text-white dark:border-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700',
        opposite: 'cursor-pointer text-white bg-gray-800 hover:bg-white hover:text-gray-800 hover:border-gray-900 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:border-white',
        disabled: 'text-gray-500 bg-gray-100 dark:text-white dark:border-slate-800 dark:bg-slate-800'
      },
      sizes: {
        lg: 'h-12 px-8 text-lg rounded-lg',
        md: 'h-10 px-6 text-base rounded',
        sm: 'h-9 px-4 text-sm rounded',
        xs: 'h-6 px-3 text-xs rounded',
        rounded: 'h-12 px-8 text-sm rounded-full font-medium',
      },
    }
  },
  computed: {
    selectedStyle() {
      if(this.disabled)
        return this.styles.disabled

      return this.styles[this.type] || this.styles.primary
    },
    selectedSize() {
      return this.sizes[this.size] || this.sizes.lg
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
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
  >
    <slot name="icon" />
    <slot>{{ text }}</slot>
  </NuxtLink>
  <a
    v-else
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
    :href="href"
    @click="onClick"
  >
    <slot name="icon" />
    <slot>{{ text }}</slot>
  </a>
</template>
