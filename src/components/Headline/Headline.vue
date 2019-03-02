<template>
  <h1 class="headline-text">{{ headline }}</h1>
</template>

<script>
export default {
  name: "Headline",
  props: {
    headline: {
      type: String,
      default: "this is the default!"
    }
  }
};
</script>

<style lang="scss" src="./Headline.scss">
</style>

