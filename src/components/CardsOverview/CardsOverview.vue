<template>
  <div>
    <div class="cards-overview">
      <p>CardsOverview #1</p>
      <p>CardsOverview #2</p>
      <p>CardsOverview #3</p>
    </div>
    <CardSingle>Hello World</CardSingle>
    <CardSingle>Hello Mars</CardSingle>
    <CardSingle>Hello Venus</CardSingle>
  </div>
</template>

<script>
import CardSingle from "@/components/CardSingle/CardSingle.vue";

export default {
  name: "CardsOverview",
  components: {
    CardSingle
  }
};
</script>

<style lang="scss">
@import "src/components/CardsOverview/CardsOverview.scss";
</style>
