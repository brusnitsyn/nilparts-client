<script>
export default {}
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
          <AdminBlogItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 1" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
          <AdminBlogItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
          <AdminBlogItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 3" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
          <AdminBlogItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 4" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
          <AdminBlogItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 1" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
          <AdminBlogItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
          <AdminBlogItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 3" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
          <AdminBlogItem image="https://via.placeholder.com/350x180" user="admin" title="Заголовок новости 4" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque debitis dicta dolor, est ex facere, provident quasi qui quibusdam, quisquam sed veritatis voluptates. Consequuntur fugiat ipsum nemo quae tempora." />
        </NewsWrapper>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
