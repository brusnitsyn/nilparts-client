<script>
export default {
  layout: 'page',
  data() {
    return {
      current: 1,
      perPage: 2,
      total: 12
    }
  }
}
</script>

<template>
<PageWrapper>
  <PageBody>
    <PageSection>
      <PageSectionTitle text="Каталог" />
      <CatalogTagWrapper>
        <CatalogTagItem>
          Запчасти
        </CatalogTagItem>
        <CatalogTagItem>
          Спецтехника
        </CatalogTagItem>
        <CatalogTagItem>
          Масла и смазки
        </CatalogTagItem>
        <CatalogTagItem>
          Резина
        </CatalogTagItem>
      </CatalogTagWrapper>
      <CatalogWrapper class="pt-4">
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
      </CatalogWrapper>
      <Pagination :current="current" :total="total" :per-page="perPage" @page-changed="current = $event" class="pt-4" />
    </PageSection>
  </PageBody>
</PageWrapper>
</template>

<style scoped>

</style>
