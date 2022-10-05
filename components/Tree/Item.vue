<script>
export default {
  props: {
    item: Object,
  },
  computed: {
    isFolder() {
      return this.item.children && this.item.children.length;
    }
  },
  data() {
    return {
      isOpen: false,
      isSelected: false,
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
      // this.isSelected = true
      this.$emit('select-item', this.item)
    },
    makeFolder() {
      if (!this.isFolder) {
        this.$emit("make-folder", this.item);
        // this.isOpen = true;
      }
    },
    remove() {
      this.$emit('remove-item', this.item)
    }
  }
}
</script>

<template>
  <li>
    <div
      class="flex items-center justify-start gap-x-1.5 cursor-pointer">
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
      <button @click="toggle" @dblclick="makeFolder" class="text-left leading-5" :class="{'font-medium': isOpen}">
        {{ item.name }}
      </button>
      <button @click="remove" class="flex items-center" v-if="item.id">
        <iconify-icon icon="material-symbols:delete-outline-rounded" width="18"></iconify-icon>
      </button>
    </div>
    <ul v-show="isOpen" v-if="isFolder" class="pl-1">
      <TreeItem
        class="item"
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"
        @select-item="$emit('select-item', $event)"
        @remove-item="$emit('remove-item', $event)"
      />
      <li @click="$emit('add-item', item)" class="flex items-center gap-x-1.5">
        <iconify-icon icon="material-symbols:add-circle-outline-rounded" width="18"></iconify-icon>
        Создать
      </li>
    </ul>
  </li>
</template>
