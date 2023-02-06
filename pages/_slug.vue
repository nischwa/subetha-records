<template>
  <section>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>

<script>
import { useStoryblokApi } from "@storyblok/nuxt-2";
export default {

  async asyncData({route, store}) {
    // Lists relations that should be resolved from the subcomponents
    const resolveRelations = ['news-section.articles'];
    // eslint-disable-next-line require-await,no-use-before-define
    const storyblokApi = useStoryblokApi();
    const { slug } = route.params;
    const { data } = await storyblokApi.get(`cdn/stories/${slug || 'home'}`, {
      version: "draft",
      resolve_relations: resolveRelations[0]
    });

    // put relation in store
    store.commit('updateArticles', data.rels);

    return {
      story: data.story
    }
  }
};
</script>

