export type MappedArticle = {
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

export type LegacyArticle = {
    _type: string;
    name: string;
    url: string;
    image?: {
      _type: string;
      thumbnail: {
        _type: string;
        contentUrl: string;
        width: number;
        height: number;
      }
    },
    description: string;
    provider?: any;
    datePublished: string;
    // exemple : '2023-01-11T13:39:00.0000000Z',
    category: string;
}
