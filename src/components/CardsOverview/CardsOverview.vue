<!-- this is the event list overview (startpage) -->

<template>
  <section>
    <Navigation />
    <Headline>Neueste Events in deiner Stadt</Headline>
    <img class="start-image" :src="image">
    <div class="cards-overview">
      <CardSingle :header="event.header" :text="event.text" :icon="event.icon"/>
      <CardSingle :header="event.header" :text="event.text" :icon="event.icon"/>
      <CardSingle :header="event.header" :text="event.text" :icon="event.icon"/>
    </div>
  </section>
</template>

<script>
import CardSingle from "@/components/CardSingle/CardSingle";
import Headline from "@/components/Headline/Headline";
import Navigation from "@/components/Navigation/Navigation";
import StartImage from "@/assets/Undraw.svg";

export default {
  name: "CardsOverview",
  components: {
    CardSingle,
    Headline,
    Navigation
  },
  data() {
    return {
      image: StartImage,
      event: {
        header: "Event #1",
        text: "Join our awesome event at Stadium",
        icon: StartImage
      }
    };
  }
};
</script>

<style lang="scss">
@import "@/components/CardsOverview/CardsOverview.scss";
</style>
