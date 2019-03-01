<template>
  <div>
    <img class="base-image" :src="image">
    <!-- use is pulling in the symbol whose id matches name, and the svg can then draw that symbol -->
   <svg class="base-image" :width="width" :height="height">
        <use v-bind="{'xlink:href':'/feather-sprite.svg#'+name}"/>
      </svg>
  </div>
</template>

<script>
// import BaseImage from "@/assets/Undraw.svg";

export default {
  name: "BaseImage",
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
  },
  data() {
    return {
      image: BaseImage
    };
  }
};
</script>

<style lang="scss" src="./BaseImage.scss">
</style>
