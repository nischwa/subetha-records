export interface IStoryBlokAsset {
  alt: string;
  copyright: string;
  fieldtype: string;
  filename: string;
  focus: string;
  id: string;
  // eslint-disable-next-line camelcase
  is_external_url: boolean;
  name: string;
  title: string;
}

export interface IStoryBlokLink {
  // eslint-disable-next-line camelcase
  cached_url: string;
  fieldtype: string;
  id: string;
  linktype: string;
  url: string;
}
