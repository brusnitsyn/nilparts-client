<script>
export default {
  layout: 'page'
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
      </CatalogWrapper>
    </PageSection>
  </PageBody>
</PageWrapper>
</template>

<style scoped>

</style>
