<template>
  <article class="news-item">
    <div class="text-wrapper">
      <header class="news-item__header">
        <h3 class="headline headline--order-3">{{blok?.headline}}</h3>
        <p class="published-date">published on <time>{{publishedDate}}</time></p>
      </header>
      <p class="main-article">
        {{blok?.article}}
      </p>
    </div>

    <aside class="article-image">
      <img :src="image.filename" :alt="image.alt">
    </aside>
  </article>
</template>

<script lang="ts">

import {Component, Prop} from "nuxt-property-decorator";
import Vue from "vue";
import {IStoryBlokAsset} from "~/interfaces/storyblok.interface";

export interface INewsItems {
  headline: string;
  published: string;
  image: IStoryBlokAsset;
  article: string;
}

@Component
export default class NewsItem extends Vue {
  @Prop() blok!: INewsItems;

  public get publishedDate(): string {
    return new Date(this.blok?.published)?.toLocaleDateString();
  }

  public get image(): IStoryBlokAsset | null {
    if (!this.blok?.image.filename) return null;
    return this.blok?.image;
  }
}
</script>

<style lang="scss">
@import "assets/scss/_breakpoints.scss";
@import "assets/scss/_colors.scss";
.news-item {
  display: flex;
  flex-direction: column-reverse;
  margin: var(--space-l-xl) 0;
  border-bottom: 1px solid $divider-color;

  @include from-tablet-up {
    flex-direction: row;
    gap: 1rem;

    & > * {
      flex: 1 1 0;
    }
  }
}

.news-item__header {
  @include from-tablet-up {
    .headline {
      margin-top: 0;
      margin-bottom: var(--space-s-m);
    }
  }
}

.published-date {
  color: $dark-primary-color;
}
</style>
