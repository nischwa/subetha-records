<template>
  <button class="menu-button" @click="$emit('menuButtonClick')">
    <svg class="menu-icon" :class="stateClass" width="100%" height="100%" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
      <g class="bar bar-top" >
        <path d="M5.02,20L51.905,20" />
      </g>
        <g class="bar bar-middle" transform="">
          <path d="M5.02,20L51.905,20" />
      </g>
      <g class="bar bar-bottom" transform="">
        <path d="M5.02,20L51.905,20" />
      </g>
    </svg>
  </button>
</template>

<script lang="ts">
import {Component, Prop} from "nuxt-property-decorator";
import Vue from "vue";

@Component
export default class MenuIcon extends Vue {
  @Prop() isOpen!: boolean;

  public get stateClass(): string {
    return this.isOpen ? 'is-open' : 'is-closed';
  }
}
</script>

<style lang="scss">
@import 'assets/scss/_colors.scss';
@import 'assets/scss/_animations.scss';

.menu-button {
  width: 100%;
}
.menu-icon {
  .bar {
    fill:none;
    stroke: $dark-primary-color;
    stroke-width: 4px;
    opacity: 1;
    transition: $transition-default;
    &-top {
      transform: matrix(1.06645,0,0,1,-0.353675,-10);
    }
    &-middle {
      transform: matrix(1.06645,0,0,1,-0.353675,10);
    }
    &-bottom {
      transform: matrix(1.06645,-1.11022e-16,1.18399e-16,1,-0.353675,30);
    }
  }

  &.is-open {
    .bar-middle {
      opacity: 0;
    }
    .bar-top {
      transform: matrix(0.754091,0.754091,-0.707107,0.707107,22.6788,-5.60543);
    }
    .bar-bottom {
      transform: matrix(0.754091,-0.754091,0.707107,0.707107,-5.60543,37.3212);
    }
  }
}
</style>
