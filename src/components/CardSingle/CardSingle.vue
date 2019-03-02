<!-- this is the single event component -->

<template>
  <router-link class="card-single-link" :to="{ name: 'card-details', params: { id: event.id }}">
    <div class="container">
      <div class="card-single-title">{{ event.title }}</div>
      <div class="card-single-date">On {{ event.date }} @{{ event.time }}</div>
      <div class="card-single-attendees">
        Attendees:
        <b>{{ event.attendees.length }}</b>
      </div>
      <img class="card-single-image" :src="image">
    </div>
  </router-link>
</template>

<script>
import CardDetails from "@/views/CardDetails";
import CardImage from "@/assets/UndrawTeam.svg";

export default {
  name: "CardSingle",
  // here prop is received
  props: {
    event: Object
  },
  data() {
    return {
      image: CardImage
    };
  }
};
</script>

<style lang="scss" src="./CardSingle.scss">
</style>
