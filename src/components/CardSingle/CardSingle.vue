<!-- this is single event component -->

<template>
  <router-link class="card-link" :to="{ name: 'card-details' }">
    <div class="container">
      <div class="card-single-text">
        <slot/>
      </div>
    </div>
  </router-link>
</template>

<script>
import CardDetails from "@/components/CardDetails/CardDetails";

export default {
  name: "CardSingle"
};
</script>

<style lang="scss">
@import "src/components/CardSingle/CardSingle.scss";
</style>
