<template>
  <div class="users-list">
    <user-card v-for="user in data" :key="user.id" :user="user"/>
    <LazyHydrate when-visible>
      <component-with-logic />
    </LazyHydrate>
  </div>
</template>

<script>
export default {
  setup() {
    // const { nuxt } = useNuxtApp()
    // const { nuxt } = useContext()

    useHead({
      title: 'User list page',
      titleTemplate: (title) => `${title} | MySite`,
      meta: [
        { name: 'description', content: 'user list user list' },
        { name: 'keywords', content: 'user userkeywords' },
      ],
    })

    const { data, error, loading } = useAsyncData(async () => {
      const response = await $fetch('/api/users') // $ | -
      return response
    })

    onMounted(() => {
      // nuxt.loading = true
      setTimeout(() => {
        console.log('set timeout 3000')
        // nuxt.loading = false
      }, 3000)
      // тут пытаюсь проверить инициализирована ли логика в 
      // компоненте component-with-logic, который я обернула в LazyHydrate

      // component-with-logic содержит кнопку по которой к компоненту 
      // добавляется класс .blue-color, генерирую клик по этой кнопке
      // и смотрю в добавился ли класс в разметке не доскроливая до компонента

      // соответствеено если оборачиваю component-with-logic в LazyHydrate,
      // то клик на кнопку не срабатывает и класс не добавляется
      setTimeout(() => {
        const blueBtn = document.querySelector('.component-with-logic__button');
        if (blueBtn) {
          blueBtn.click();
        }
      }, 1000)
    })

    return { data, error, loading }
  },
}

</script>

<style scoped>
.users-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
}
</style>
