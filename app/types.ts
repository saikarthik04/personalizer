// types.ts

import { DateTime } from "next-auth/providers/kakao";

export type VideoData = {
  kind: string;
  etag: string;
  items: Array<{
    kind: string;
    etag: string;
    id: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: { url: string };
        medium: { url: string };
        high: { url: string };
        standard: { url: string };
        maxres: { url: string };
      };
      channelTitle: string;
      categoryId: string;
      liveBroadcastContent: string;
      defaultLanguage: string;
      localized: {
        title: string;
        description: string;
      };
    };
    contentDetails: {
      caption: string;
      contentRating: any;
      definition: string;
      dimension: string;
      duration: string;
      licensedContent: boolean;
      projection: string;
    };
  }>;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};


export type searchData = {
kind: string,
etag: string,
nextPageToken: string,
regionCode: string,
pageInfo: {
  totalResults: number,
  resultsPerPage: number
},
items:Array<
  {
    kind:string,
    etag: string,
    id: {
      kind: string,
      videoId: string
    },
    snippet: {
      publishedAt: string,
      channelId: string,
      title: string,
      description: string,
      thumbnails : {
        default: {
          url: string,
          width: number,
          height: number,
        },
        medium: {
          url: string,
          width: number,
          height: number
        },
        high: {
          url:string,
          width: number,
          height: number
        }
      },
      channelTitle: string,
      liveBroadcastContent: string,
      publishTime: DateTime,
    }
  }>
}


