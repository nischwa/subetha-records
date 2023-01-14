import {IStoryBlokAsset, IStoryBlokLink} from "~/interfaces/storyblok.interface";

export interface INavigationItem {
  label: string;
  link: IStoryBlokLink;
}
export interface IHeader {
  logo: IStoryBlokAsset;
  // eslint-disable-next-line camelcase
  header_navi: INavigationItem[];
}
