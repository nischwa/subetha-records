<template>
  <h1 class="headline">{{ headline }}</h1>
</template>

<script lang="ts">

import {Component, Prop} from "nuxt-property-decorator";
import Vue from "vue";

@Component
export default class Headline extends Vue {
  @Prop() headline!: string;
}
</script>

<style lang="scss">
  .headline {
    font-family: sans-serif;
    text-align: center;
  }
</style>
