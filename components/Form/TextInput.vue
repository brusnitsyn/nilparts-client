<script>
export default {
  props: {
    value: {
      type: [String, Number],
    },
    placeholder: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'md',
    },
    type: {
      type: String,
      default: 'default',
    },
    maxlength: {
      type: [String, Number],
    }
  },
  computed: {
    havePreEl() {
      return this.$scopedSlots.prefix !== undefined || this.$scopedSlots['prefix-disabled'] !== undefined
    },
    haveSuEl() {
      return this.$scopedSlots.suffix !== undefined
    },
    selectedBorderStyle() {
      return 'border-gray-900/10 dark:border-gray-50/20'
    },
    selectedOnHoverBorderStyle() {
      return 'dark:focus:border-white focus:border-gray-900'
    },
    selectedPaddingStyle() {
      return this.paddingStyles[this.size] || this.paddingStyles.md
    },
    selectedFontSizeStyle() {
      return this.fontSizeStyles[this.size] || this.fontSizeStyles.md
    },
    // modelValue: {
    //   get() {
    //     return this.modelValue;
    //   },
    //   set(value) {
    //     this.$emit('input', value);
    //   },
    // },
  },
  data() {
    return {
      paddingStyles: {
        xs: 'px-1 py-0.5',
        sm: 'px-2 py-1.5',
        md: 'px-4 py-2',
        lg: 'px-5 py-3',
      },
      fontSizeStyles: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      }
    }
  },
}
</script>

<template>
  <div :class="`text-input-container relative flex`">
    <div
      v-if="$scopedSlots['prefix-disabled']"
      :class="`flex rounded-l bg-gray-100 dark:bg-slate-800 text-gray-500 border ${selectedBorderStyle}`"
    >
      <slot name="prefix-disabled" />
    </div>
    <div
      v-if="$scopedSlots.prefix"
      :class="`flex rounded-l border ${selectedBorderStyle}`"
    >
      <slot name="prefix" />
    </div>
    <div class="text-input-wrapper relative flex flex-1">
      <input
        :value="value"
        @input="$emit('input', $event.target.value)"
        :maxlength="maxlength"
        :class="`text-input w-full flex-1 bg-transparent outline-none border ${
          havePreEl ? '' : 'rounded-l'
        } ${
          haveSuEl ? '' : 'rounded-r'
        } ${selectedBorderStyle} ${selectedOnHoverBorderStyle} ${selectedPaddingStyle} ${selectedFontSizeStyle}`"
        :type="type"
        :placeholder="placeholder"
      />
    </div>
    <div
      v-if="$scopedSlots.suffix"
      :class="`flex rounded-r border ${selectedBorderStyle}`"
    >
      <slot name="suffix" />
    </div>
  </div>
</template>
