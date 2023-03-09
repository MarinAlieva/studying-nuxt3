<template>
  <div>
    <h1>Post page</h1>
    <div v-for="post in data" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>

export default {

  setup() {
    useHead({
      title: 'Post list page',
      titleTemplate: (title) => `${title} | MySite`,
      meta: [
        { name: 'description', content: 'post list post list' },
        { name: 'keywords', content: 'post postkeywords' },
      ],
    })


    const { data, error, loading } = useAsyncData(async () => {
      const response = await $fetch('/api/posts') // $ | -
      return response
    })

    return { data, error, loading }
  },
}

</script>
