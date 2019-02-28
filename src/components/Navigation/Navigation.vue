<template>
  <nav class="navigation-links">
    <router-link :to="{ name: 'cards-overview' }">Home</router-link>
    <span class="navigation-separator">|</span>
    <router-link :to="{ name: 'card-details' }">Featured this Week</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style lang="scss">
@import "@/components/Navigation/Navigation.scss";
</style>
