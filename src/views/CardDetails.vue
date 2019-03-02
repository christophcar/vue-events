<!-- this is the event detail page -->

<template>
  <section>
    <Navigation/>
    <h1>{{ event.title }}</h1>
    <h5>Organized by {{ event.organizer }}</h5>
    <h5>Category: {{ event.category }}</h5>
    <BaseImage/>
    <address>{{ event.location }}</address>
    <h2>Event details</h2>
    <p>{{ event.description }}</p>
    <h2>
      Attendees:
      <span class="badge -fill-gradient">{{ event.attendees.length }}</span>
    </h2>
  </section>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: {
    id: Number
  },
  data() {
    return {
      event: {}
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>

<style lang="scss" src="./CardDetails.scss">
</style>

