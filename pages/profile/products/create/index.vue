<script>
export default {
  layout: 'profile',
  middleware: 'auth',
  data() {
    return {
      form: {
        name: '',
        article: '',
        price: '',
        images: [],
      },
    }
  },
  methods: {
    uploadFiles(file) {
      this.form.images.push(file)
    },
  },
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageHeader>
        <PageTitle text="Добавить товар" />
      </PageHeader>
      <PageSection>
        <Form class="max-w-3xl">
          <template #body>
            <div class="grid lg:grid-cols-6 lg:gap-x-4 gap-y-3">
              <FormTextInput
                placeholder="Наименование товара"
                v-model="form.name"
                class="lg:col-span-4"
              />
              <FormTextInput placeholder="Артикул" v-model="form.article" class="lg:col-span-2" />
              <FormTextInput placeholder="Стоимость" v-model="form.price" class="lg:col-span-6" />
              <FormFileInput :files="form.images" multiple class="lg:col-span-6" />
            </div>
          </template>
          <template #footer>
            <Button> Добавить </Button>
          </template>
        </Form>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
