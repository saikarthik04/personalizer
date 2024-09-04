
"use server";
import { constants } from "@/app/constants";
import { searchData } from "@/app/types";
export async function GetSearchResults(searchQuery:string): Promise<searchData | null> {
  try {
    let videosURL = constants.YOUTUBE_API_BASE_URL + "/search";
    const params = new URLSearchParams({
      part: "snippet",
      chart: "mostPopular",
      maxResults: "21",
      order: "relevance",
      q:searchQuery,
      relevanceLanguage: "en",
      safeSearch:"moderate",
      type:"video",
      videoCaption:"closedCaption",
      videoType:"any",
      key:
        process.env.YOUTUBE_API_KEY != undefined
          ? (process.env.YOUTUBE_API_KEY as string)
          : "",
    });
    let searchData = await fetch(`${videosURL}?${params.toString()}`, {
      cache: "no-store",
    });
    const data = await searchData.json();
    return data as searchData;
  } catch (error) {
    console.log("unable to fetch", error);
    return null;
  }
}
