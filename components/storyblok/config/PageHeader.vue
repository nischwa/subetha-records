<template>
  <header class="page-header grid">
    <p class="logo">
      <NuxtLink to="/home">
        <img :src="logo.filename" :alt="logo.alt">
      </NuxtLink>
    </p>
    <MenuIcon @menuButtonClick="toggleMenu" :is-open="isMenuOpen" class="menu-toggle"/>
    <nav class="main-navigation grid">
      <ul class="main-navigation__link-list" :class="menuStateClass" @click="closeMenu">
        <li v-for="navItem in navigationItems" :key="navItem.link.id">
          <NuxtLink class="navigation-link animated" :to="navItem.link.cached_url">{{navItem.label}}</NuxtLink>
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
import MenuIcon from "~/components/storyblok/config/MenuIcon.vue";

@Component({
  components: {MenuIcon}
})
export default class PageHeader extends Vue {
  public isMenuOpen: boolean = false;
  @Prop() blok!: IHeader;

  public get logo(): IStoryBlokAsset {
    return this.blok?.logo;
  }

  public get navigationItems(): INavigationItem[] {
    return this.blok?.header_navi;
  }

  public get menuStateClass(): string {
    return this.isMenuOpen ? 'is-open' : 'is-closed'
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public closeMenu(): void {
    this.isMenuOpen = false;
  }
}
</script>

<style lang="scss">
@import 'assets/scss/_mixins.scss';
@import 'assets/scss/_colors.scss';
@import 'assets/scss/_animations.scss';
@import 'assets/scss/_breakpoints.scss';

.menu-toggle {
  grid-column-start: 12;
  width: 2.5rem;
  height: 2.5rem;
  align-self: center;
  justify-self: right;
  margin-right: 0.3rem;
}

.logo {
  margin: 0;
  width: 200px;

  img {
    max-width: 100%;
    height: auto;
  }
}

.main-navigation {
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 2;
  border-top: 2px solid $accent-color;
  font-size: var(--step-1);
  position: relative;

  &__link-list {
    @include reset-list;

    position: absolute;
    width: 80%;
    left: 0;
    background-color: $color-white;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: $transition-default;
    border-bottom-right-radius: 5px;

    .navigation-link {
      display: inline-block;
      padding: 0.5rem 0.5rem;
    }

    &.is-closed {
      transform: translateX(-100%);
    }

    &.is-open {
      transform: translateX(0);
      box-shadow: 0 10px 15px $dark-primary-color--30;
    }
  }
}

@include from-tablet-up {
  .menu-toggle {
    display: none;
  }

  .logo {
    grid-column-start: 2;
    grid-column-end: -1;
    padding: var(--space-s) 0;
  }

  .main-navigation {
    border-width: 1px;
    display: grid;
    padding-top: var(--space-2xs);
    grid-template-columns: repeat(12, 1fr);
    font-size: var(--step-0);
  }

  .main-navigation__link-list {
    grid-column-start: 2;
    grid-column-end: -2;
    width: 100%;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    transition: unset;

    .navigation-link {
      padding-left: 0;
    }

    &.is-open, &.is-closed {
      transform: unset;
      box-shadow: unset;
    }
  }
}
</style>
