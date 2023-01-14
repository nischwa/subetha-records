<script setup>
import { useStoryblok } from "@storyblok/nuxt-2";
import { useRoute} from "@nuxtjs/composition-api";
const route = useRoute();
const { slug } = route.value.params;
const { story } = useStoryblok(slug || 'home', { version: "draft" });
</script>

<template>
  <section>
    A Dynamic Page
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>
