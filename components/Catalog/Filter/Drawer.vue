<script>
export default {
  methods: {
    toggleDrawer(value) {
      this.$store.dispatch('app/setNavbarShowDrawer', value)
    }
  }
}
</script>

<template>
  <div>
    <CatalogTagItem class="mr-4 text-medium" @click="toggleDrawer(true)">
      <template #icon>
        <iconify-icon icon="material-symbols:border-all-rounded" class="text-lg" />
      </template>
      Фильтры
    </CatalogTagItem>
    <ClientOnly>
      <Teleport to="app-after">
        <BuilderDrawer>
          <template #header="{ toggleDrawer }">
            <DrawerSheetHeader text="Фильтры" @clickClose="toggleDrawer(false)" />
          </template>
        </BuilderDrawer>
      </Teleport>
    </ClientOnly>
  </div>
</template>
