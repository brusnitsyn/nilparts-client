<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      blogs: 'blog/getBlogs'
    })
  },
  async fetch() {
    await this.$store.dispatch('blog/fetchBlogs')
  },
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageHeader>
        <PageTitle text="Новости" />
      </PageHeader>
      <PageSection>
        <div class="flex flex-col gap-y-1 pb-2 md:pb-0">
          <PageSectionTitle text="Все новости" :route="{name: 'Добавить новость', to: { name: 'admin-blog-create' }}" />
          <Button :to="{ name: 'admin-blog-create' }" class="md:hidden">
            Добавить новость
          </Button>
        </div>
        <NewsWrapper>

          <AdminBlogItem v-for="(blog, index) in blogs" :key="blog.id" :blog="blog" />
        </NewsWrapper>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
