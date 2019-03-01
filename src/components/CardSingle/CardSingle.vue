<!-- this is the single event component -->

<template>
  <router-link class="card-single-link" :to="{ name: 'card-details', params: { id: '1' }}">
    <div class="container">
      <div class="card-single-title">{{ event.title }}</div>
      <div class="card-single-date">On {{ event.date }} @{{ event.time }}</div>
      <div class="card-single-attendees">
        No. of attendees:
        <b>{{ event.attendees.length }}</b>
      </div>
      <img class="card-single-image" :src="event.image">
    </div>
  </router-link>
</template>

<script>
import CardDetails from "@/views/CardDetails";
import BaseImage from "@/assets/Undraw.svg";
import CardImage from "@/assets/UndrawTeam.svg";

export default {
  name: "CardSingle",
  data() {
    return {
      image: BaseImage,
      event: {
        id: 1,
        title: "Beach Cleanup",
        image: CardImage,
        date: "Tues Aug 19, 2018",
        time: "6:00",
        attendees: [
          { id: "abc123", name: "Adam Jahr" },
          { id: "def456", name: "Gregg Pollack" }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
@import "@/components/CardSingle/CardSingle.scss";
</style>
