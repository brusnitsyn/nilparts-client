<template>
  <div>
    <PortalTarget name="app-before"/>
    <div id="app-before"></div>
    <div class="flex flex-col ">
      <div class="flex flex-row">
        <div class="hidden lg:block sticky left-0 top-0 bottom-0 w-64 border-r border-gray-900/10 dark:border-gray-50/20">
          <slot name="drawer">
            <AdminDrawer />
          </slot>
        </div>
        <div class="flex flex-col min-h-screen w-full lg:flex-1">
          <slot name="header">
            <AdminNavbar />
          </slot>
          <div class="flex flex-col w-full h-full lg:max-w-[calc(100vw-256px)]">
            <Nuxt />
          </div>
        </div>
      </div>
      <slot name="footer">
        <ProfileFooter />
      </slot>
    </div>
    <PortalTarget name="app-after"/>
    <div id="app-after"></div>
  </div>
</template>
