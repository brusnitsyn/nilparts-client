<script>
import {mapGetters} from "vuex";

export default {
  layout: 'page',
  computed: {
    ...mapGetters({
      contacts: 'contacts/getContact'
    })
  },
  mounted() {
    // console.log(contacts.c)
  },
  async fetch() {
    await this.$store.dispatch('contacts/fetchContact')
  }
}
</script>

<template>
  <PageWrapper>
    <PageBody>
      <PageHeader>
        <PageTitle text="Контакты" />
      </PageHeader>
      <PageSection>
<!--        <div v-for="(content, index) in contacts.content" :key="index">-->
<!--          -->
<!--        </div>-->
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style scoped>

</style>
