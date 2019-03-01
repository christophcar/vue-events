<!-- this is the event list overview (startpage) -->

<template>
  <section>
    <Navigation/>
    <Headline>Find the best events in your area</Headline>
    <BaseImage/>
    <div class="cards-overview">
      <CardSingle v-for="event in events" :key="event.id" :event="event"/>
    </div>
  </section>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation";
import Headline from "@/components/Headline/Headline";
import CardSingle from "@/components/CardSingle/CardSingle";
import axios from "axios";

export default {
  name: "CardsOverview",
  components: {
    Navigation,
    Headline,
    CardSingle
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    axios
      .get("http://localhost:3000/events")
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>
