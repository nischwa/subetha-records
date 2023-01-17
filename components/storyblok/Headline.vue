<template>
  <h1 class="headline headline--order-3">{{ blok.headline }}</h1>
</template>

<script lang="ts">

import {Component, Prop} from "nuxt-property-decorator";
import Vue from "vue";

export interface IHeadline {
  headline: string;
}

@Component
export default class Headline extends Vue {
  @Prop() blok!: IHeadline;

  public mounted(): void {
    console.log(this.blok)
  }
}
</script>
