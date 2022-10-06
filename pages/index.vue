<script>
import {mapGetters} from "vuex";

export default {
  layout: 'page',
  computed: {
    ...mapGetters({
      categories: 'category/getCategories'
    })
  }
}
</script>

<template>
  <div>
    <HeroSwiper/>
    <PageWrapper>
      <PageBody>
        <PageSection>
          <PageSectionTitle text="Категории"/>
          <ShortcutCategoryWrapper>
            <ShortcutCategoryItem v-for="(cat, index) in categories.slice(0, 3)" :key="cat.id" :text="cat.name" :image="cat.image"/> <!--https://via.placeholder.com/320x114-->
          </ShortcutCategoryWrapper>
        </PageSection>
        <PageSection>
          <PageSectionTitle text="Новости" :route="{name: 'Все новости', to: {name: 'news'}}"/>
          <ShortcutNewsWrapper>
            <NewsItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 1" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
            <NewsItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
            <NewsItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 3" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
            <NewsItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 4" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
          </ShortcutNewsWrapper>
        </PageSection>
      </PageBody>
    </PageWrapper>
  </div>
</template>
