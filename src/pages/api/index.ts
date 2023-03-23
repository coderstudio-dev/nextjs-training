import axios, { type AxiosResponse } from 'axios';

import { type IArticleData } from '../../types';

interface BaseApi {
  getArticles: () => Promise<IArticleData[]>;
}

export const BASE_URL = 'https://dev.to/api/articles';

const isMockedEnvironment =
  !!process.env.STORYBOOK || process.env.NODE_ENV === 'test';

const apiCache = new Map();

const apiGet = async <T>(url: string): Promise<AxiosResponse<T>> => {
  // do not cache when testing to avoid flakyness
  if (!isMockedEnvironment && apiCache.has(url)) {
    console.log(apiCache.get(url));
    return apiCache.get(url);
  }

  const response = await axios.get<T>(url);

  if (!isMockedEnvironment) {
    apiCache.set(url, response);
  }

  return response;
};

class ArticlesApi implements BaseApi {
  async getArticles() {
    const { data: articles } = await apiGet<IArticleData[]>(BASE_URL);

    return articles;
  }
}

export const api = new ArticlesApi();
