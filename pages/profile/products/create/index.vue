<script>
import {mapActions, mapGetters} from "vuex";

export default {
  layout: 'profile',
  middleware: 'auth',
  computed: {
    ...mapGetters({
      categories: 'category/getCategories'
    })
  },
  data() {
    return {
      form: {
        name: '',
        article: '',
        manufacturer: '',
        machines: '',
        price: '',
        in_stock: true,
        short_description: '',
        images: [],
        category_id: null
      },
    }
  },
  methods: {
    ...mapActions({
      addProduct: 'products/addProduct'
    }),
    uploadFiles(file) {
      this.form.images.push(file)
    },
    removeFile(id) {
      this.form.images = this.form.images.filter(image => image.id !== id)
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
              <FormTextInput
                placeholder="Артикул"
                v-model="form.article"
                class="lg:col-span-2"
              />
              <FormTextInput
                placeholder="Производитель"
                v-model="form.manufacturer"
                class="lg:col-span-3"
              />
              <FormTextInput
                placeholder="Техника"
                v-model="form.machines"
                class="lg:col-span-3"
              />
              <FormSelect v-model="form.category_id" label="Выберите категорию" class="lg:col-span-3">
                <FormSelectOption v-for="(item, index) in categories" :key="index" :title="item.name" :value="item.id"/>
              </FormSelect>
              <FormTextInput
                placeholder="Стоимость"
                v-model="form.price"
                class="lg:col-span-3"
              />
              <FormCheckbox
                label="В наличии"
                v-model="form.in_stock"
                class="lg:col-span-6"
              />
              <FormTextarea
                placeholder="Описание товара"
                v-model="form.short_description"
                class="lg:col-span-6"
              />
              <FormFileInput
                :files="form.images"
                @remove="removeFile"
                @upload="uploadFiles"
                multiple
                class="lg:col-span-6"
              />
            </div>
          </template>
          <template #footer>
            <Button @click="addProduct(form)"> Добавить </Button>
          </template>
        </Form>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
