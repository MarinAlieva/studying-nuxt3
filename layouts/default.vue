<template>
  <div>
    <LoadingComponent v-if="loading"/>
    <NuxtLink to="/">Home</NuxtLink> | 
    <NuxtLink to="/post">Posts</NuxtLink> | 
    <NuxtLink to="/user">Users</NuxtLink> | 
    <slot />
  </div>
</template>

<script>

export default {

  setup() {
    const nuxtApp = useNuxtApp();
    const loading = ref(false);

    nuxtApp.hook("page:start", () => {
      loading.value = true;
    });
    nuxtApp.hook("page:finish", () => {
      loading.value = false;
    });

    return { loading }
  },
}

</script>