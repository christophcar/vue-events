<template>
  <div>
    <img class="start-image" :src="image">
  </div>
</template>

<script>
import TeasterImage from "@/assets/Undraw.svg";

export default {
  name: "StartImage",
  data() {
    return {
      image: TeasterImage
    };
  }
};
</script>

<style lang="scss">
@import "@/components/StartImage/StartImage.scss";
</style>
