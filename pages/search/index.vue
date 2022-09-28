<script>
import Page from "~/layouts/page";
export default {
  components: {Page},
  layout: 'page',
  data() {
    return {
      searchQuery: ''
    }
  }
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <PageSectionTitle text="Поиск" />
        <Form>
          <template #body>
            <FormTextInput placeholder="Поисковый запрос" v-model="searchQuery">
              <template #suffix>
                <button class="px-4 flex items-center gap-x-2">
                  <iconify-icon icon="charm:search" />
                  <span>Найти</span>
                </button>
              </template>
            </FormTextInput>
          </template>
        </Form>
      </PageSection>
      <PageSection v-if="searchQuery.length">
        <PageSectionTitle text="Результаты" />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
