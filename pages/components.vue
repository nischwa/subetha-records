<template>
 <section>
   <NewsItem v-if="news" :blok="news.content"/>
 </section>
</template>
<script>
import newsMock from '../mocks/stories/index';
export default {
  data: () => {
    return {
      news: newsMock.firstArticle.story
    }
  }
}
</script>
