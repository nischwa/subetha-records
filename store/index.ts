import {INewsItem} from "~/components/storyblok/NewsItem.vue";

export interface IApplicationState {
  articles: any;
}
export const state = (): IApplicationState => ({
  articles: []
})

export const getters = {
  getArticleList(state: IApplicationState): INewsItem[] {
    return state.articles.map((article: any) => article.content);
  }
}

export const mutations = {
  updateArticles (state: any, payload: any): void {
    state.articles = payload;
  }
}
