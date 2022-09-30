<script>
export default {
  data() {
    return {
      bannerText: ''
    }
  }
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <PageSectionTitle text="Главная страница" />
      </PageSection>
      <PageSection>
        <PageSectionTitle text="Верхний баннер" />
        <Form>
          <template #body>
            <div class="flex flex-col gap-y-1">
              <FormTextInput type="text" placeholder="Текст баннера" v-model="bannerText" maxlength="45">
                <template #suffix>
                  <button class="px-4">
                    <span>Установить</span>
                  </button>
                </template>
              </FormTextInput>
              <span class="text-sm">{{ bannerText.length }} / 45 символов</span>
            </div>
          </template>
        </Form>
      </PageSection>
      <PageSection>
        <PageSectionTitle text="Слайдер" />
        <div class="flex justify-start">
          <AdminSliderSwiper />
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
