<!-- this is the event list overview (startpage) -->

<!-- Since data only flows down, this means we have to put our data high enough
in the component tree so that it can flow down to all of the places it needs to go. -->

<template>
  <section>
    <Navigation/>
    <Headline :headline="headline"/>
    <BaseImage/>
    <CardSingle v-for="event in events" :key="event.id" :event="event"/>
  </section>
</template>

<script>
import Headline from "@/components/Headline/Headline";
import CardSingle from "@/components/CardSingle/CardSingle";
import EventService from "@/services/EventService";

export default {
  name: "CardsOverview",
  components: {
    Headline,
    CardSingle
  },
  data() {
    return {
      events: [],
      headline: "Find great events in your area"
    };
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>
