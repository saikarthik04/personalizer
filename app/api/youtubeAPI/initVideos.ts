"use server"
import { constants } from "@/app/constants";
import { VideoData } from "@/app/types";
export async function GetMostPopularVideosData(): Promise<VideoData | null> {
  try {
    let videosURL = constants.YOUTUBE_API_BASE_URL + "/videos";
    const params = new URLSearchParams({
      part: "snippet,contentDetails",
      chart: "mostPopular",
      maxResults: "21",
      regionCode: "in",
      key:
        process.env.YOUTUBE_API_KEY != undefined
          ? (process.env.YOUTUBE_API_KEY as string)
          : "",
    });
    let videosData = await fetch(`${videosURL}?${params.toString()}`, {
      cache: "no-store",
    });
    const data = await videosData.json();
    return data as VideoData;
  } catch (error) {
    console.log("unable to fetch", error);
    return null;
  }
}
