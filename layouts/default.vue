<template>
  <div>
    <PageHeader v-if="headerData?.story" :blok="headerData?.story?.content" />
    <main>
      <Nuxt />
    </main>
    <footer>FOOTER</footer>
  </div>
</template>

<script>
import { useStoryblokApi } from "@storyblok/nuxt-2";
import PageHeader from "~/components/storyblok/config/PageHeader.vue";
export default {
  components: {PageHeader},
  data: () => ({
    headerData: null,
    footerData: null
  }),

  // eslint-disable-next-line require-await
  async fetch() {
    const storyblokApi = useStoryblokApi();
    const headerRequest = await storyblokApi.get("cdn/stories/config/header", {
      version: "draft",
    });
    this.headerData = headerRequest?.data
  }
};
</script>


