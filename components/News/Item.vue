<script>
export default {
  props: {
    model: {
      type: Object,
      default: undefined,
    },
  },
  methods: {
    toBlog() {
      this.$router.push({
        name: 'news-slug',
        params: { slug: this.model.slug },
      })
    },
  },
}
</script>

<template>
  <div
    class="flex flex-col justify-between border border-gray-900/10 dark:border-gray-50/20 rounded-lg shadow-sm h-full overflow-clip"
  >
    <NuxtLink class="flex flex-col" :to="{ name: 'index' }">
      <NuxtImg
        v-if="model.image"
        loading="lazy"
        :src="`${$config.serverURL}/${model.image.url}`"
        alt=""
        class="w-full h- h-[180px] lg:w-[350px] object-cover"
      />
      <div class="flex flex-col justify-between px-2 py-1 text-sm">
        <div class="flex flex-col">
          <div class="flex justify-between">
          <span class="block font-medium">
            {{ model.user.name }}
          </span>
            <span class="block">
            {{ model.created_at }}
          </span>
          </div>
          <span class="block text-base font-medium truncate py-1.5">
          {{ model.title }}
        </span>
          <span class="block font-normal line-clamp-2">
          {{ model.sub_title }}
        </span>
        </div>
      </div>
    </NuxtLink>
    <div class="py-2 px-2">
      <Button @click="toBlog"> Читать далее</Button>
    </div>
  </div>
</template>
