<template>
  <div class="card-single">
    <slot>Hey, I am a slot of CardSingle</slot>
  </div>
</template>

<script>
export default {
  name: "CardSingle"
};
</script>

<style lang="scss">
@import "src/components/CardSingle/CardSingle.scss";
</style>
