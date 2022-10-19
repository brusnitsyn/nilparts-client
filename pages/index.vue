<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'page',
  computed: {
    ...mapGetters({
      categories: 'category/getCategories',
      blogs: 'blog/getBlogs',
    }),
  },
  async fetch() {
    await this.$store.dispatch('blog/fetchBlogs')
  },
}
</script>

<template>
  <div>
    <HeroSwiper />
    <PageWrapper>
      <PageBody>
        <PageSection v-if="categories.length">
          <PageSectionTitle text="Категории" />
          <ShortcutCategoryWrapper>
            <ShortcutCategoryItem
              v-for="(cat, index) in categories.slice(0, 4)"
              :key="cat.id"
              :text="cat.name"
              :image="cat.image"
            />
            <!--https://via.placeholder.com/320x114-->
          </ShortcutCategoryWrapper>
        </PageSection>
        <PageSection v-if="blogs.length">
          <PageSectionTitle
            text="Новости"
            :route="{ name: 'Все новости', to: { name: 'news' } }"
          />
          <ShortcutNewsWrapper>
            <NewsItem
              v-for="(blog, index) in blogs.slice(0, 4)"
              :key="blog.id"
              :model="blog"
            />
          </ShortcutNewsWrapper>
        </PageSection>
      </PageBody>
    </PageWrapper>
  </div>
</template>
