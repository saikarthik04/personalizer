"use client";
import React, { Suspense, useEffect, useState } from "react";
import Navbar from "@/app/lib/components/navbar";
import Slidebar from "@/app/lib/components/slidebar";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "@/app/lib/components/sidebar.module.css";
import Loader from "../lib/components/loader";
import { GetMostPopularVideosData } from "../api/youtubeAPI/initVideos";

type VideoData = {
  kind: string;
  etag: string;
  items: Array<any>;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};

interface Props {
  data: VideoData;
}

const Home = () => {
  const [isMiniSidebarVisible, setSidebarVisible] = useState(false);
  const [videos, SetVideosData] = useState<VideoData | null>();
  const [loading, setLoading] = useState(true);
  const session = useSession();
  const router = useRouter();
  console.log(session, "home");
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, [session.status, router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetMostPopularVideosData();
        SetVideosData(data);
      } catch (error) {
        console.error("Error fetching video data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (session.status === "loading") {
    return <Loader />;
  }

  const toggleSidebar = () => {
    setSidebarVisible(!isMiniSidebarVisible);
  };

  if (session.status == "authenticated" && session.data.user !== null) {
    return (
      <>
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-row justify-center">
          <Slidebar isMiniSidebarVisible={isMiniSidebarVisible} />
          <div
            className={`${styles.sidebar} ${
              isMiniSidebarVisible ? styles.silder : styles.visible
            } `}
          >
            <section className="mt-36 md:ml-20 mb-36">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
                {videos && !loading ? <HomeVideosPage data={videos} /> : ""}
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
};

export default Home;

const HomeVideosPage = ({ data }: Props) => {
  const handleMouseEnter = (event: any) => {
    event.target.play();
  };

  const handleMouseLeave = (event: any) => {
    event.target.pause();
  };
  if (data && data?.items) {
    return (
      <>
        {data.items.map((video) => (
          <div key={video?.id}>
            <div className="row-span-12">
              <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg- max-w-sm bg-transparent bg-zinc-900">
                  <iframe
                    width="384"
                    height="240"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.snippet.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen 
                    allowTransparency
                  >
                    {/* <img    
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className="w-full rounded-t-lg opacity-100 hover:opacity-0" 
                  /> */}
                  </iframe>
                  <div className="m-4 flex justify-center text-start mb-2 flex-col">
                    {/* <a href="" className="mr-4">
                      <Image
                        src="https://cdn.pixabay.com/photo/2021/07/13/09/12/lion-logo-6462988_1280.png"
                        alt={video.snippet.channelId} width={64} height={40}
                        className="bg-white h-10 w-16 rounded-full"
                      ></Image>
                      </a> */}
                      <div className="font-medium text-base line-clamp-2 text-ellipsis">
                        {video.snippet.title}
                      </div>
                      <p className="text-sm font-normal mt-3 text-gray-300 flex justify-between">
                        {video.snippet.channelTitle}
                        <span className="px-4">2.5M subscribers</span>
                      </p>
                      <p className="text-xs font-normal text-gray-300 flex justify-between mt-2">
                        269k views<span className="px-4">2 months ago</span>
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
};
