<!-- this is the event list overview (startpage) -->

<template>
  <section>
    <Navigation/>
    <Headline>Find the best events in your area</Headline>
    <BaseImage/>
    <div class="cards-overview">
      <CardSingle/>
      <CardSingle/>
      <CardSingle/>
      <CardSingle/>
    </div>
  </section>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation";
import Headline from "@/components/Headline/Headline";
import CardSingle from "@/components/CardSingle/CardSingle";

export default {
  name: "CardsOverview",
  components: {
    Navigation,
    Headline,
    CardSingle
  }
};
</script>
