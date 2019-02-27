<template>
  <div class="cards-overview">
    <CardSingle>Event #1</CardSingle>
    <CardSingle>Event #2</CardSingle>
    <CardSingle>Event #3</CardSingle>
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
