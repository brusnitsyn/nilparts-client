<script>
import {SwiperSlide} from 'vue-awesome-swiper'
import {mapGetters, mapActions} from 'vuex'
import {deepClone} from "~/helpers";
export default {
  components: {
    SwiperSlide
  },
  computed: {
    ...mapGetters({
      slides: 'slides/getHeroSlides',
      advert: 'advert/getAdvert',
    })
  },
  data() {
    return {
      advertForm: {
        text: '',
        url: '',
        buttonText: ''
      },
      showModalCreateSlide: false,
      slide: {
        text: '',
        url: '',
        image: {}
      }
    }
  },
  methods: {
    ...mapActions({
      updateAdvert: 'advert/updateAdvert',
      removeSlide: 'slides/removeHeroSlide'
    }),
    uploadedImage(image) {
      this.slide.image = image
    },
    async submit() {
      const form = new FormData()
      form.append('text', this.slide.text)
      form.append('url', this.slide.url)
      form.append('image', this.slide.image.file)

      await this.$store.dispatch('slides/addHeroSlide', form)
    }
  },
  created() {
    this.advertForm = deepClone(this.advert)
    this.advertForm.id = Number.parseInt(this.advertForm.id)
  }
}
</script>

<template>
  <div>
    <PageWrapper>
      <PageBody>
        <PageSection>
          <PageSectionTitle text="Главная страница" />
        </PageSection>
        <PageSection>
          <PageSectionTitle text="Верхний баннер" />
          <Form>
            <template #body>
              <div class="flex flex-col gap-y-1">
                <FormTextInput type="text" placeholder="Текст баннера" v-model="advertForm.text" maxlength="45">
                  <template #suffix>
                    <button class="px-4" @click="updateAdvert(advertForm)">
                      <span>Установить</span>
                    </button>
                  </template>
                </FormTextInput>
                <span class="text-sm">{{ advertForm.text.length }} / 45 символов</span>
              </div>
            </template>
          </Form>
        </PageSection>
        <PageSection>
          <PageSectionTitle text="Слайдер" />
          <div class="flex justify-start pb-2">
            <Button type="primary" @click="showModalCreateSlide = true">
              Добавить слайд
            </Button>
          </div>
          <div class="flex justify-start">
            <AdminSliderSwiper>
              <template #slides>
                <SwiperSlide v-for="(slide, index) in slides" :key="slide.id">
                  <div class="relative">
                    <NuxtImg :src="`${$config.serverURL}/${slide.image.url}`" alt=""/>
                    <div class="absolute right-4 top-4">
                      <Button type="secondary" @click="removeSlide(slide)">
                        Удалить слайд
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              </template>
            </AdminSliderSwiper>
          </div>
        </PageSection>
      </PageBody>
    </PageWrapper>

    <!--modal-->
    <Modal v-if="showModalCreateSlide" @close="showModalCreateSlide = false">
      <ModalBody>
        <div class="flex justify-between items-center pb-4">
          <span>Новый слайд</span>
          <button @click="showModalCreateSlide = false">
            <iconify-icon icon="material-symbols:close-rounded"></iconify-icon>
          </button>
        </div>
        <Form>
          <template #body>
            <FormTextInput placeholder="Текст" v-model="slide.text" />
            <FormTextInput placeholder="Ссылка кнопки действия" v-model="slide.url" />
            <FormFileInput :files="slide.image" @upload="uploadedImage"/>
          </template>
          <template #footer>
            <Button class="mt-3" @click="submit">
              Добавить слайд
            </Button>
          </template>
        </Form>
      </ModalBody>
    </Modal>
  </div>
</template>
