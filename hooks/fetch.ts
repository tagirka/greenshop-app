import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url: string): any => {
  const baseURL = "http://localhost:3000/";
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [option, setOption] = useState({});

  const doFetch = useCallback((options = {}) => {
    setOption(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const requestOption = {
      ...option,
      ...{
        headers: {
          Authorization: `Token`,
        },
      },
    };

    const request = async () => {
      await axios(baseURL + url, requestOption)
        .then((res: any) => {
          setIsLoading(false);
          setResponse(res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.response.data);
        });
    };

    request();
  }, [isLoading, option, url]);

  return [{ response, error, isLoading }, doFetch];
};
