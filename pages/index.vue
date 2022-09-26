<template>
  <div>
    <HeroSwiper/>
    <PageWrapper>
      <PageBody>
        <PageSection>
          <PageSectionTitle text="Категории"/>
          <ShortcutCategoryWrapper>
            <ShortcutCategoryItem text="Запчасти" image="https://via.placeholder.com/320x114"/>
            <ShortcutCategoryItem text="Спецтехника" image="https://via.placeholder.com/320x114"/>
            <ShortcutCategoryItem text="Масла и смазки" image="https://via.placeholder.com/320x114"/>
            <ShortcutCategoryItem text="Резина" image="https://via.placeholder.com/320x114"/>
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

<script>
export default {
  layout: 'page',
}
</script>
