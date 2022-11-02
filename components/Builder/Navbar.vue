<script>
import p from '@/package.json'

export default {
  computed: {
    name() {
      return p.name
    },
    // showDrawer: {
    //   get() {
    //     return this.$store.state.app.navbar.showDrawer
    //   },
    //   async set(value) {
    //     await this.$store.dispatch('app/setNavbarShowDrawer', value)
    //   }
    // },
    showOptions: {
      get() {
        return this.$store.state.app.navbar.showOptions
      },
      async set(value) {
        await this.$store.dispatch('app/setNavbarShowOptions', value)
      },
    },
  },
  methods: {
    updateDrawerOptions() {
      if (this.showOptions) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    },
    // toggleDrawer() {
    //   this.showDrawer = !this.showDrawer
    // },
    toggleOptions(show) {
      this.showOptions = show
      this.updateDrawerOptions()
    },
  },
}
</script>

<template>
  <div
    ref="navbar"
    class="backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-900/10 dark:border-gray-50/20 bg-white/50 dark:bg-slate-900/50 sticky"
  >
    <div id="navbar-banner" class="banner">
      <slot name="banner" />
    </div>
    <div class="max-w-8xl w-full mx-auto">
      <div class="py-3 lg:px-8 mx-4 lg:mx-0">
        <div class="relative flex items-center">
          <!-- drawer:toggle -->
          <!--          <div-->
          <!--            v-if="$slots['drawer']"-->
          <!--            class="lg:hidden flex items-center self-center justify-center mr-2"-->
          <!--          >-->
          <!--            <button-->
          <!--              class="flex items-center focus:outline-none"-->
          <!--              aria-label="Toggle Drawer Menu"-->
          <!--              @click="toggleDrawer(true)"-->
          <!--            >-->
          <!--              <span-->
          <!--                class="flex items-center text-gray-600 dark:text-gray-300 text-lg"-->
          <!--                aria-hidden="true"-->
          <!--              >-->
          <!--                <iconify-icon icon="uil:bars" v-if="!showDrawer"/>-->
          <!--                <iconify-icon icon="uil:times" v-else/>-->
          <!--              </span>-->
          <!--            </button>-->
          <!--          </div>-->
          <!-- title -->
          <slot name="title">
            <NuxtLink
              tag="a"
              class="mr-3 flex-none overflow-hidden md:w-auto text-md font-bold text-gray-900 dark:text-gray-200"
              :to="{ name: 'index' }"
            >
              <span class="sr-only">home</span>
              <span class="flex items-center">
                <!--                <iconify-icon icon="logos:nuxt-icon" />-->
                {{ name }}
              </span>
            </NuxtLink>
          </slot>
          <!-- menu -->
          <slot name="menu" />
          <!-- options:toggle -->
          <div class="flex-1 flex justify-end md:hidden items-center gap-x-4">
            <button
              class="flex items-center focus:outline-none"
              aria-label="To Search Page"
              @click="$router.push({ name: 'search' })"
            >
              <span
                class="flex items-center text-gray-600 dark:text-gray-300"
                aria-hidden="true"
              >
                <iconify-icon icon="charm:search" class="text-xl" />
              </span>
            </button>
            <button
              class="flex items-center focus:outline-none"
              aria-label="Toggle Options Menu"
              @click="toggleOptions(true)"
            >
              <span
                class="flex items-center text-gray-600 dark:text-gray-300"
                aria-hidden="true"
              >
                <iconify-icon icon="charm:menu-hamburger" class="text-xl" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Portal to="app-after">
        <!-- drawer -->
        <!--        <Transition name="slide-fade-from-up" mode="out-in">-->
        <!--          <div-->
        <!--            v-if="showDrawer"-->
        <!--            class="fixed lg:hidden bg-gray-100 dark:bg-slate-800 pt-12 top-0 left-0 w-screen h-screen z-30 flex flex-col"-->
        <!--          >-->
        <!--            <div class="flex-1 flex flex-col relative overflow-y-auto">-->
        <!--              <slot name="drawer" :toggle-drawer="toggleDrawer"/>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </Transition>-->
        <ActionSheetOverlay v-if="showOptions" @click="toggleOptions(false)"/>
        <Transition name="slide-fade-from-up" appear>
          <!-- options -->
          <slot
            v-if="showOptions"
            name="options"
            :toggle-options="toggleOptions"
            :show-options="showOptions"
          />
        </Transition>
      </Portal>
    </ClientOnly>
  </div>
</template>

<style lang="scss">
.slide-fade-from-up-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-from-up-leave-active {
  transition: all 0.28s;
}

.slide-fade-from-up-enter-from,
.slide-fade-from-up-leave-to {
  transform: translateY(100%);
}

a.router-link-active {
  font-weight: bold;
}

a.router-link-exact-active {
  color: theme('colors.slate.900');
}

html.dark {
  a.router-link-exact-active {
    color: theme('colors.white');
  }
}
</style>
