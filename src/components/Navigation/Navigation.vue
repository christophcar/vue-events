<template>
    <nav id="navigation-links">
      <router-link :to="{ name: 'cards-overview' }">All Events</router-link>
      <router-link :to="{ name: 'card-details' }">Featured this Week</router-link>
    </nav>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style lang="scss">
@import "@/components/Navigation/Navigation.scss";
</style>
