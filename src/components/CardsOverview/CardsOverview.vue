<!-- this is the event list overview (startpage) -->

<template>
  <section>
    <Headline>Neueste Events in deiner Stadt</Headline>
    <img class="start-image" :src="image">
    <div class="cards-overview">
      <CardSingle>Event #1</CardSingle>
      <CardSingle>Event #2</CardSingle>
      <CardSingle>Event #3</CardSingle>
    </div>
  </section>
</template>

<script>
import CardSingle from "@/components/CardSingle/CardSingle";
import Headline from "@/components/Headline/Headline";
import StartImage from "@/assets/undraw.svg";

export default {
  name: "CardsOverview",
  components: {
    CardSingle,
    Headline
  },
  data() {
    return {
      image: StartImage
    };
  }
};
</script>

<style lang="scss">
@import "@/components/CardsOverview/CardsOverview.scss";
</style>
