<script>
export default {
  layout: 'page',
  data() {
    return {
      current: 1,
      perPage: 2,
      total: 12
    }
  }
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
          <NewsItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 1" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
          <NewsItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
          <NewsItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 3" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
          <NewsItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 4" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
        </NewsWrapper>
        <Pagination :current="current" :total="total" :per-page="perPage" @page-changed="current = $event" class="pt-4"/>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
