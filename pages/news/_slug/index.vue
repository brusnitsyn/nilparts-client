<script>
import {mapGetters} from "vuex";

export default {
  layout: 'page',
  head() {
    return {
      title: this.blog.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blog.sub_title
        }
      ],
    }
  },
  computed: {
    ...mapGetters({
      blog: 'blog/getBlog'
    }),
  },
  async fetch() {
    await this.$store.dispatch('blog/fetchBlog', this.$route.params.slug)
  },
}
</script>

<template>
  <PageWrapper>
    <PageBody class="max-w-4xl mx-auto">
      <PageHeader>
        <PageTitle :text="blog.title" />
      </PageHeader>
      <PageSection>
        <article v-if="blog.content.blocks">
          <template v-for="block in blog.content.blocks">
            <h1 v-if="block.type === 'header' && block.data.level === 1" :key="block.id">
              {{ block.data.text }}
            </h1>

            <h2 v-if="block.type === 'header' && block.data.level === 2" :key="block.id">
              {{ block.data.text }}
            </h2>

            <h3 v-if="block.type === 'header' && block.data.level === 3" :key="block.id">
              {{ block.data.text }}
            </h3>

            <p v-if="block.type === 'paragraph'" :key="block.id">
              {{ block.data.text }}
            </p>

            <NuxtImg v-if="block.type === 'image'" :src="block.data.file.url" />
          </template>
        </article>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style scoped>

</style>
