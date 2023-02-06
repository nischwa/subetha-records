<template>
  <section>
    <h2 class="headline--order-2">{{blok?.headline}}</h2>
      <NewsItem v-for="article in articles" :key="article.uuid" :article="article"/>
    <p v-if="readMoreLink">
      <a :href="readMoreLink.link.cached_url">{{readMoreLink.label}}</a>
    </p>
  </section>
</template>

<script lang="ts">

import {Component, Prop} from "nuxt-property-decorator";
import Vue from "vue";
import NewsItem, {INewsItem} from "~/components/storyblok/NewsItem.vue";
import {ILink} from "~/interfaces/atoms/link.interface";

export interface INewsSection {
  headline: string;
  articles: INewsItem[];
  readmore: ILink[];
}

@Component({
  components: {NewsItem}
})
export default class NewsSection extends Vue {
  @Prop() blok!: INewsSection;

  // If maintained returns the link to the news section. Null if not maintained
  public get readMoreLink(): ILink | null {
    if (this.blok.readmore.length === 0) return null;
    return this.blok.readmore[0];
  }

  // Returns array of featured articles
  public get articles(): INewsItem[] | null {
    if (this.$store.getters.getArticleList === 0) return null;
    return this.$store.getters.getArticleList;
  }
}
</script>
