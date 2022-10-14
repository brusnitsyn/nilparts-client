<script>
export default {
  computed: {
    showDrawer: {
      get() { return this.$store.state.app.navbar.showDrawer },
      async set(value) { await this.$store.dispatch('app/setNavbarShowDrawer', value) }
    }
  }
}
</script>

<template>
  <div class="lg:sticky lg:top-0">
    <AdminDrawerMenuWrapper class="hidden lg:block">
      <AdminDrawerMenuItem text="Главная" :to="{ name: 'admin' }">
        <template #icon>
          <iconify-icon icon="material-symbols:web" width="20" height="20"></iconify-icon>
        </template>
      </AdminDrawerMenuItem>
      <AdminDrawerMenuItem text="Новости" :to="{ name: 'admin-blog' }">
        <template #icon>
          <iconify-icon icon="material-symbols:newspaper" width="20" height="20"></iconify-icon>
        </template>
      </AdminDrawerMenuItem>
      <AdminDrawerMenuItem text="Товары" :to="{ name: 'admin-products' }">
        <template #icon>
          <iconify-icon icon="material-symbols:shopping-bag-outline" width="20" height="20"></iconify-icon>
        </template>
      </AdminDrawerMenuItem>
      <AdminDrawerMenuItem text="Контакты" :to="{ name: 'admin-contacts' }">
        <template #icon>
          <iconify-icon icon="material-symbols:contacts-rounded" width="20" height="20"></iconify-icon>
        </template>
      </AdminDrawerMenuItem>
    </AdminDrawerMenuWrapper>
    <Portal to="app-before" v-if="showDrawer">
      <div>
        <DrawerSheetOverlay @click="showDrawer = false" />
        <Transition name="">
          <div class="fixed left-0 bottom-0 top-0 w-[70%] bg-white z-50">
            <AdminDrawerMenuWrapper>
              <AdminDrawerMenuItem text="Главная страница" :to="{ name: 'admin' }">
                <template #icon>
                  <iconify-icon icon="material-symbols:web" width="20" height="20"></iconify-icon>
                </template>
              </AdminDrawerMenuItem>
              <AdminDrawerMenuItem text="Новости" :to="{ name: 'admin-blog' }">
                <template #icon>
                  <iconify-icon icon="material-symbols:newspaper" width="20" height="20"></iconify-icon>
                </template>
              </AdminDrawerMenuItem>
              <AdminDrawerMenuItem text="Товары" :to="{ name: 'admin-products' }">
                <template #icon>
                  <iconify-icon icon="material-symbols:shopping-bag-outline" width="20" height="20"></iconify-icon>
                </template>
              </AdminDrawerMenuItem>
              <AdminDrawerMenuItem text="Контакты" :to="{ name: 'admin-contacts' }">
                <template #icon>
                  <iconify-icon icon="material-symbols:contacts-rounded" width="20" height="20"></iconify-icon>
                </template>
              </AdminDrawerMenuItem>
            </AdminDrawerMenuWrapper>
          </div>
        </Transition>
      </div>
    </Portal>
  </div>
</template>
