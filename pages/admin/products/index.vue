<script>
import { mapActions, mapGetters } from 'vuex'
import { deepClone } from '~/helpers'
import crypto from 'crypto'

export default {
  computed: {
    ...mapGetters({
      categories: 'category/getCategories',
    }),
  },
  data() {
    return {
      treeData: {
        name: 'Категории',
        children: [],
      },
      selectCategory: {},
      category: {
        id: undefined,
        name: '',
        image: {},
        parent_id: 0,
      },
    }
  },
  methods: {
    ...mapActions({
      updateCategory: 'category/updateCategory',
    }),
    makeFolder(item) {
      this.$set(item, 'children', [])
      this.addItem(item)
    },
    addItem(item) {
      item.children.push({
        id: crypto.randomBytes(20).toString('hex'),
        name: 'Новая категория',
        parent_id: this.selectCategory.id ? this.selectCategory.id : undefined
      })
    },
    selectItem(item) {
      this.selectCategory = item
      this.category = { ...item, image: {} }
    },
    removeItem(item) {
      this.removeNode([this.treeData], item)
    },
    removeNode(arr, item) {
      arr.forEach((itm, index) => {
        if (itm.id === item.id) {
          arr.splice(index, 1)
        }
        if (itm.children && itm.children.length)
          this.removeNode(itm.children, item)
      })
    },
    uploadedImage(image) {
      this.category.image = image
    },
  },
  mounted() {
    this.treeData.children = deepClone(this.categories)
  },
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageSection>
        <PageSectionTitle text="Товары" />
      </PageSection>
      <PageSection>
        <PageSectionTitle text="Категории" />
        <div class="grid gap-y-2 md:grid-cols-2">
          <Tree>
            <TreeItem
              :item="treeData"
              @make-folder="makeFolder"
              @add-item="addItem"
              @select-item="selectItem"
              @remove-item="removeItem"
            />
          </Tree>
          <div class="flex flex-col" v-if="category.id">
            <Form>
              <template #header>
                <span>Редактирование: {{ category.name }}</span>
              </template>
              <template #body>
                <FormTextInput
                  v-model="category.name"
                  :placeholder="selectCategory.name"
                />
                <FormFileInput :files="category.image" @upload="uploadedImage"/>
              </template>
              <template #footer>
                <div class="flex justify-end pt-2">
                  <Button @click="updateCategory(category)"> Обновить </Button>
                </div>
              </template>
            </Form>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
