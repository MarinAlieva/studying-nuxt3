export default defineNuxtRouteMiddleware((to) => {
  console.log('defineNuxtRouteMiddleware');
  if (to.params.id === '1') {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
  }
})
