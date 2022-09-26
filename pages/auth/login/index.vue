<script>
export default {
  layout: 'auth'
}
</script>

<template>
  <div class="md:mx-auto md:my-auto mt-12 px-4 md:px-8 w-full max-w-lg">
    <Form>
      <template #header>
        <div class="pb-10">
          <FormHeader title="Войти в аккаунт" subTitle="магазина chinaved"/>
        </div>
      </template>
      <template #body>
        <div class="pb-8">
          <div class="space-y-2 pb-4">
            <FormTextInput type="email" placeholder="Адрес электронной почты"/>
            <FormTextInput type="password" placeholder="Пароль"/>
          </div>
          <Button text="Войти"/>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-col gap-y-2 pt-2">
          <Anchor text="У меня нет аккаунта" :to="{name: 'auth-register'}" />
        </div>
      </template>
    </Form>
  </div>
</template>
