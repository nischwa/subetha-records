<template>
  <header class="page-header">
    <p class="logo">
      <NuxtLink to="/home">
        <img :src="logo.filename" :alt="logo.alt" width="250px" height="auto">
      </NuxtLink>

    </p>
    <nav class="main-navigation">
      <ul class="main-navigation__link-list">
        <li v-for="navItem in navigationItems" :key="navItem.link.id">
          <NuxtLink :to="navItem.link.cached_url">{{navItem.label}}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">

import {Component, Prop} from "nuxt-property-decorator";
import Vue from "vue";
import {IHeader, INavigationItem} from "~/interfaces/components/pageheader.interface";
import {IStoryBlokAsset} from "~/interfaces/storyblok.interface";

@Component
export default class PageHeader extends Vue {
  @Prop() blok!: IHeader;

  public get logo(): IStoryBlokAsset {
    return this.blok?.logo;
  }

  public get navigationItems(): INavigationItem[] {
    return this.blok?.header_navi;
  }
}
</script>

<style lang="scss">
@import 'assets/scss/_mixins.scss';
@import 'assets/scss/_colors.scss';
.logo {
  margin: 0;
  text-align: center;
}

.main-navigation {
  &__link-list {
    @include reset-list;

    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem 0;
    border-top: 1px solid $accent-color;
  }
}
</style>
