export interface IData {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ISourse;
  title: string;
  url: string;
  urlToImage: string;
}

export interface ISourse {
  id: string;
  name: string;
}

export interface IFetchSourceData {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface IFetchSource {
  status: string;
  sources: IFetchSourceData[];
}

export interface IFetchArticles {
  articles: IData[];
  totalResults: number;
  status: string;
}
export type OptionsKeyType = {
  apiKey: string;
}

export type OptionsSource = {
  sources : string;
}
export type CallType<T> = (data: T) => void;

export type PickData = Pick<IFetchSourceData, 'id' | 'name'>;
