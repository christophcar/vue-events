<template>
  <section class="wrapper">
    <div class="container">
      <div class="card-single-text">
        <slot>Event #10</slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CardSingle"
};
</script>

<style lang="scss">
@import "src/components/CardSingle/CardSingle.scss";
</style>
