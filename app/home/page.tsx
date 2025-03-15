"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/lib/components/navbar";
import Slidebar from "@/app/lib/components/slidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "@/app/lib/components/sidebar.module.css";
import Loader from "../lib/components/loader";
import { GetMostPopularVideosData } from "../api/youtubeAPI/initVideos";
import SearchBar, { SearchBox } from "../lib/components/searchBar";
import { formatDistanceToNow } from "date-fns";
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
  data?: VideoData;
}
const Home = () => {
  const [isMiniSidebarVisible, setSidebarVisible] = useState(false);
  const [videos, SetVideosData] = useState<VideoData | null>();
  const [searchValue, setSearchValue] = useState(""); 
  const [loading, setLoading] = useState(true);
  const session = useSession();
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  const handleSearch = (value: string):string => {
     setSearchValue(value);
     return value
  };
  if (session.status == "authenticated" && session.data.user !== null) {
    console.log(session.data.expires)
    return (
      <>
        <Navbar toggleSidebar={toggleSidebar}>
          <SearchBox onSearch={handleSearch}/>
        </Navbar>
        <div className="flex flex-row justify-center">
          {!isDesktop && <Slidebar isMiniSidebarVisible={isMiniSidebarVisible} />}
          <div
            className={`${styles.sidebar} ${
              isMiniSidebarVisible ? styles.silder : styles.visible
            } `}
          >
            <section className="mt-36 md:ml-12 md:mr-16 mb-36 mx-2">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             { videos && !loading  && searchValue.trim()=="" ? <HomeVideosPage data={videos}/> : <SearchBar searchValue={searchValue} />}
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
};

const HomeVideosPage = ({ data}: Props) => {
  if (data && data?.items) {
    console.log(data)
    return (
      <>
        {data.items.map((video) => (
          <div key={video?.id}>
            <div className="row-span-12">
              <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-max-w-sm bg-transparent bg-zinc-900 flex flex-col">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
                    title={video.snippet.title}
                    allowFullScreen 
                  >
                  </iframe>
                  <div className="m-4 flex justify-center text-start mb-2 flex-col">
                      <div className="font-medium text-base line-clamp-2 text-ellipsis">
                        {video.snippet.title}
                      </div>
                      <p className="text-sm font-normal mt-3 text-gray-300 flex justify-between">
                        {video.snippet.channelTitle}
                       <span className="px-4">{formatDistanceToNow(new Date(video.snippet.publishedAt))} ago</span>
                      </p>
                      <p className="text-xs font-normal text-gray-300 flex justify-between mt-2">
                        <span className="px-4"></span>
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

export default Home;
