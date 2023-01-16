<template>
  <section>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>

<script>
import { useStoryblokApi } from "@storyblok/nuxt-2";
export default {
  // eslint-disable-next-line require-await
  async asyncData({route}) {
    const storyblokApi = useStoryblokApi();

    const { slug } = route.params;
    const { data } = await storyblokApi.get(`cdn/stories/${slug || 'home'}`, {
      version: "draft",
    });
    
    return {
      story: data.story
    }
  }
};
</script>

