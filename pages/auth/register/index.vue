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
          <FormHeader title="Создать аккаунт" subTitle="в магазине chinaved"/>
        </div>
      </template>
      <template #body>
        <div class="pb-8">
          <div class="space-y-2 pb-4">
            <FormTextInput type="name" placeholder="Имя"/>
            <FormTextInput type="email" placeholder="Адрес электронной почты"/>
            <FormTextInput type="password" placeholder="Пароль"/>
          </div>
          <Button text="Зарегистрироваться"/>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-col gap-y-2 pt-2">
          <Anchor text="У меня есть аккаунт" :to="{name: 'auth-login'}" />
        </div>
      </template>
    </Form>
  </div>
</template>
