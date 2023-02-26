import axios from 'axios';
import { LegacyArticle, MappedArticle } from '../models/article';

const searchOptions = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news/search',
  params: {
    q: '',
    count: '12',
    freshness: 'Day',
    textFormat: 'Raw',
    safeSearch: 'Off'
  },
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '5cb2d471f1msh9779a68ae4ae678p11966fjsnec2ae2b172b2',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'Accept-Language': 'FR',
  }
};

type FormatRawArticle = (rawArticle: LegacyArticle) => MappedArticle;
const formatRawArticle: FormatRawArticle = (rawArticle) => {
    let image;
    if (rawArticle.image && rawArticle.image.thumbnail) {
        image = {
            contentUrl: rawArticle.image?.thumbnail?.contentUrl,
            width: rawArticle.image?.thumbnail?.width,
            height: rawArticle.image?.thumbnail?.height,
        }
    }

    return {
        title: rawArticle.name,
        description: rawArticle.description,
        datePublished: rawArticle.datePublished,
        url: rawArticle.url,
        category: rawArticle.url,
        image
    }
}

// returns articles with schema adapted to UI
export const getArticlesFromExt = async (search: string): Promise<MappedArticle[]> => {
    try {
        searchOptions.params.q = search;
        const response = await axios.request(searchOptions);
        if (response.data.value && response.data.value.length > 0) {
            const rawInfo = response.data.value;
            return rawInfo.map((article: LegacyArticle) => {
                return formatRawArticle(article);
            });
        }
        return [];
    } catch(error) {
        throw new Error('CACA')
    };

}
