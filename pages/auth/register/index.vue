<script>
export default {
  layout: 'auth',
  data() {
    return {
      form: {},
      formErrors: [],
      formError: false
    }
  },
  methods: {
    async register() {
      await this.$axios.post('/users', this.form)
        .then(async (res) => {
          await this.$auth.loginWith('laravelSanctum', {data: this.form})
          this.formError = false
        })
        .catch((err) => {
          this.formErrors = err.response.data
          this.formError = true
        })
    },
    clearError() {
      this.formError = false
      this.formErrors = []
    }
  }
}
</script>

<template>
  <div class="md:mx-auto md:my-auto mt-12 px-4 md:px-8 w-full max-w-lg md:border md:rounded-xl md:shadow md:px-6 md:py-5 md:min-w-sm lg:min-w-md md:dark:border-gray-50/20">
    <Form>
      <template #header>
        <div class="pb-10">
          <FormHeader title="Создать аккаунт" subTitle="в магазине chinaved"/>
        </div>
      </template>
      <template #body>
        <div class="pb-8">
          <div class="space-y-2 pb-4">
            <FormTextInput v-model="form.name" type="name" placeholder="Имя"/>
            <FormTextInput v-model="form.email" type="email" placeholder="Адрес электронной почты"/>
            <FormTextInput v-model="form.password" type="password" placeholder="Пароль"/>
          </div>
          <Button text="Зарегистрироваться" @click="register"/>
          <div v-show="formError" class="border border-red-300 bg-red-200 rounded mt-1 p-2 py-1">
            <div class="flex justify-between items-center">
              <span class="text-red-500">{{ formErrors.message }}</span>
              <button @click="clearError" class="flex items-center justify-center">
                <iconify-icon icon="material-symbols:close-rounded" width="18" height="18" class="text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex items-start flex-col gap-y-2 pt-2">
          <Anchor text="У меня есть аккаунт" :to="{name: 'auth-login'}" />
        </div>
      </template>
    </Form>
  </div>
</template>
