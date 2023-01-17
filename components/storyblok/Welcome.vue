<template>
  <div class="welcome">
    <h2 class="welcome__headline headline--order-2">
      <small>welcome to</small><br>
      <span class="first">SUBETHA </span><span class="second"> RECORDS</span>
    </h2>
  </div>
</template>

<script lang="ts">
import {Component, Prop} from "nuxt-property-decorator";
import Vue from "vue";

@Component
export default class Welcome extends Vue {
  @Prop() blok!: any;

  public get background(): string {
    return 'https://a.storyblok.com/f/164605/x/aad09c5bcd/meter-min.svg';
  }
}
</script>

<style lang="scss">
@import 'assets/scss/colors.scss';
.welcome {
  display: flex;
  justify-content: center;

  &__headline {
    text-align: right;
    letter-spacing: 0.2rem;
    margin: var(--space-l) 0;
    .first {
      color: $accent-color;
    }
    .second {
      background: $secondary-text;
      color: $color-white;
    }
    small {
      font-size: var(--step-3);
    }
  }
}
</style>
