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
    },
    min: {
      type: [String, Number],
      default: 1
    },
    max: {
      type: [String, Number],
      default: 99
    }
  },
  watch: {
    sValue(value) {
      let emitValue = 1
      if(value > this.max)
        emitValue = this.max

      if(value < this.min)
        emitValue = this.min

      if(value >= this.min && value <= this.max)
        emitValue = value

      this.sValue = emitValue
    }
  },
  computed: {
    havePreEl() {
      return (
        this.$scopedSlots.prefix !== undefined ||
        this.$scopedSlots['prefix-disabled'] !== undefined
      )
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
    sValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
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
      },
    }
  },
  methods: {

  }
}
</script>

<template>
  <div :class="`relative flex`">
    <div
      :class="`flex rounded-l border border-r-0 w-10 ${selectedBorderStyle}`"
    >
      <button class="flex justify-center items-center grow hover:text-primary-500 transition-colors duration-300" @click="sValue--">
        <iconify-icon icon="material-symbols:remove-rounded" width="18" height="18"/>
      </button>
    </div>
    <div class="relative flex flex-1">
      <input
        ref="input"
        :value="value"
        @input="sValue = $event.target.value"
        :maxlength="maxlength"
        inputmode="numeric"
        :min="min"
        :max="max"
        :class="`w-full flex-1 bg-transparent outline-none border text-center ${selectedBorderStyle} ${selectedOnHoverBorderStyle} ${selectedPaddingStyle} ${selectedFontSizeStyle}`"
        type="number"
        :placeholder="placeholder"
      />
    </div>
    <div :class="`flex rounded-r border border-l-0 w-10 ${selectedBorderStyle}`">
      <button class="flex justify-center items-center grow hover:text-primary-500 transition-colors duration-300" @click="sValue++">
        <iconify-icon icon="material-symbols:add-rounded" width="18" height="18"/>
      </button>
    </div>
  </div>
</template>
