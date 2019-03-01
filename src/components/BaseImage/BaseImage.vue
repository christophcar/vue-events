<template>
  <div>
    <img class="base-image" :src="image">
  </div>
</template>

<script>
import BaseImage from "@/assets/Undraw.svg";

export default {
  name: "BaseImage",
  data() {
    return {
      image: BaseImage
    };
  }
};
</script>

<style lang="scss" src="./BaseImage.scss">
</style>
