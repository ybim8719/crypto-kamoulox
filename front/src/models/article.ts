export type ArticleModel = {
    description: string;
    title: string;
    datePublished: string;
    url: string;
    category: string;
    image?: {
      contentUrl: string;
      width: number;
      height: number;
  }
}