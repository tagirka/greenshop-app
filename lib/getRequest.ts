import { api } from "./api/point.api";
import * as qs from "qs";
import { AxiosRequestConfig } from "axios";

export interface RequestType {
  url: string;
  config: AxiosRequestConfig;
}

export const getRequest = (
  url: string,
  selected: (string | null)[],
  _page: string,
  _limit: string
): RequestType => {
  const q = selected.filter((s) => !!s);

  return !q.length
    ? {
        url,
        config: { params: { _page, _limit } },
      }
    : {
        url: api.paths.getSearch,
        config: {
          params: {
            q,
            _page,
            _limit,
          },
          paramsSerializer: (params: any) =>
            qs.stringify(params, { arrayFormat: "repeat" }),
        },
      };
};
