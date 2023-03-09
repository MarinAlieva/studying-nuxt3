<template>
  <div>
    <!-- <NuxtLoadingIndicator /> -->
    <LoadingComponent />
    <NuxtLink to="/">Home</NuxtLink> | 
    <NuxtLink to="/post">Posts</NuxtLink> | 
    <NuxtLink to="/user">Users</NuxtLink> | 
    <!-- <NuxtLink to="/user">User</NuxtLink> -->
    <slot />
  </div>
</template>