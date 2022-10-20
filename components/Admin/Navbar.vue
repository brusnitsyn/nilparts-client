<script>
import p from '@/package.json'
export default {
  computed: {
    name() {
      return p.name
    },
    showDrawer: {
      get() { return this.$store.state.app.navbar.showDrawer },
      async set(value) { await this.$store.dispatch('app/setNavbarShowDrawer', value) }
    }
  },
  methods: {
    toggleDrawer(value) {
      this.showDrawer = value
    }
  }
}
</script>

<template>
  <div
    ref="navbar"
    class="backdrop-filter backdrop-blur-md top-0 z-40 w-full transition-colors duration-300 lg:z-50 border-b border-gray-900/10 dark:border-gray-50/20 bg-white/50 dark:bg-slate-900/50 sticky"
  >
    <div class="max-w-8xl">
      <div class="py-3 lg:px-8 mx-4 lg:mx-0">
        <div class="relative flex justify-between items-center">
          <div class="flex justify-between">
            <button
              class="flex items-center focus:outline-none lg:hidden"
              aria-label="Toggle Options Menu"
              @click="toggleDrawer(true)"
            >
              <span
                class="flex items-center text-gray-600 dark:text-gray-300"
                aria-hidden="true"
              >
                <iconify-icon icon="charm:menu-hamburger" class="text-xl" />
              </span>
            </button>
          </div>
          <span class="font-medium">
            {{ $auth.user.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
