<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'page',
  watch: {
    '$route.query.page': {
      handler: async function(page) {
        await this.$store.dispatch('blog/setCurrentPage', page)
        window.scrollTo(0, 0)
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    ...mapGetters({
      blogs: 'blog/getBlogs',
      blogsMeta: 'blog/getMeta',
      blogsLinks: 'blog/getLinks',
    }),

    currentPage: {
      get() {
        return this.blogsMeta.current_page
      },
      async set(value) {
        await this.$router.push({ name: 'news', query: { page: value } })
      },
    },

    hasPaginate() {
      return this.blogsMeta.last_page > 1
    },
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
        <NewsWrapper>
          <NewsItem
            v-for="(blog, index) in blogs"
            :key="blog.id"
            :model="blog"
          />
        </NewsWrapper>
        <Pagination
          v-if="hasPaginate"
          :current="currentPage"
          :total="blogsMeta.total"
          :per-page="blogsMeta.per_page"
          @page-changed="currentPage = $event"
          class="pt-4"
        />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
