import { useCallback, useEffect, useState, type SetStateAction } from 'react';
import { type IArticleData } from '../../types';

import { api } from './index';

export const useArticles = () => {
  const [status, setStatus] = useState('idle');
  const [articles, setArticles] = useState<IArticleData[]>([]);
  const [retry, setRetry] = useState(false);

  type ISTATUS = {
    status: number;
  };

  type IERROR = {
    response: ISTATUS;
  };

  const retryRequest = useCallback(() => {
    setRetry((prev) => !prev);
  }, [setRetry]);

  useEffect(() => {
    setStatus('loading');

    api
      .getArticles()
      .then((res) => {
        setStatus('success');
        setArticles(res);
      })
      .catch((error: IERROR) => {
        const statusCode: number = error?.response?.status || 500;
        const test: SetStateAction<string> =
          statusCode.toString() as SetStateAction<string>;
        setStatus(test);
      });
  }, [retry]);

  return {
    status,
    articles,
    retryRequest,
  };
};
