<!-- this is single event component -->

<template>
  <router-link class="card-single-link" :to="{ name: 'card-details' }">
    <div class="container">
      <div class="card-single-header">{{ header }}</div>
      <div class="card-single-text">{{ text }}</div>
      <img class="card-single-icon">
      {{ icon }}
      <img>
    </div>
  </router-link>
</template>

<script>
import CardDetails from "@/components/CardDetails/CardDetails";
import StartImage from "@/assets/Undraw.svg";

export default {
  name: "CardSingle",
  props: ["header", "text", "icon"]
};
</script>

<style lang="scss">
@import "@/components/CardSingle/CardSingle.scss";
</style>
