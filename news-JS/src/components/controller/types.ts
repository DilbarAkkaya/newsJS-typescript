export interface IData {
  author: string,
  content: string,
  description: string,
  publishedAt: string,
  source: ISourse,
  title: string,
  url: string,
  urlToImage: string,
}

interface ISourse {
  id: string,
  name: string,
}