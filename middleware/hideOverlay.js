export default async function ({store}) {
  await store.dispatch('app/setNavbarShowDrawer', false)
  await store.dispatch('app/setNavbarShowOptions', false)
  if (process.client)
    document.body.classList.remove('overflow-hidden')
}
