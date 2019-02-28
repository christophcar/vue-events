<!-- this is the event list overview (startpage) -->

<template>
  <section>
    <Navigation/>
    <Headline>Find the best events in your area</Headline>
    <StartImage/>
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
import StartImage from "@/components/StartImage/StartImage";
import CardSingle from "@/components/CardSingle/CardSingle";

export default {
  name: "CardsOverview",
  components: {
    Navigation,
    Headline,
    StartImage,
    CardSingle
  }
};
</script>
