<!-- this is the event detail page -->

<template>
  <div class="card-details">
    <slot>I am a details page!</slot>
  </div>
</template>

<script>
export default {
  name: "CardDetails"
};
</script>

<style lang="scss">
@import "@/components/CardDetails/CardDetails.scss";
</style>
