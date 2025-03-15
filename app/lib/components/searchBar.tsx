import { GetSearchResults } from "@/app/api/youtubeAPI/searchData";
import { searchData } from "@/app/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { formatDistanceToNow } from "date-fns";

interface SearchProps {
  searchValue: string;
}

interface SearchBoxProps {
  onSearch: (value: string) => void;
}
interface SearchResultsProps {
  searchResults: searchData;
}
const SearchBar = ({ searchValue }: SearchProps) => {
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<searchData | null>();
  useEffect(() => {
    const getsearchResults = async () => {
      setLoading(true);
      try {
        if (searchValue) {
          const results = await GetSearchResults(searchValue);
          setSearchResults(results);
        }
      } catch (error) {
        console.error("Error fetching video data:", error);
        setSearchResults(null);
      } finally {
        setLoading(false);
      }
    };
    getsearchResults();
  }, [searchValue]);
  if (loading) {
    return <div className="text-center text-2xl">Loading...</div>;
  }
  return (
    <>
      {searchResults ? (
        <SearchComponent searchResults={searchResults} />
      ) : (
        <>not reachable</>
      )}
    </>
  );
};

const SearchComponent = ({ searchResults }: SearchResultsProps) => {
  console.log(searchResults);
  return (
    <>
      {searchResults && searchResults.items
        ? searchResults.items.map((item) => (
            <div className="row-span-12" key={item.etag}>
              <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg- max-w-sm bg-transparent bg-zinc-900">
                  <iframe
                    width="384"
                    height="240"
                    src={`https://www.youtube.com/embed/${item.id.videoId}?enablejsapi=1`}
                    title={item.snippet.title}
                    allowFullScreen
                  ></iframe>
                  <div className="m-4 flex justify-center text-start mb-2 flex-col">
                    <div className="font-medium text-base line-clamp-2 text-ellipsis">
                      {item.snippet.title}
                    </div>
                    <p className="text-sm font-normal mt-3 text-gray-300 flex justify-between">
                      {item.snippet.channelTitle}
                      {/* <span className="px-4">Subscribers count not available</span> */}
                      <span className="px-4">{formatDistanceToNow(new Date(item.snippet.publishedAt))} ago</span>
                    </p>
                    {/* <p className="text-xs font-normal text-gray-300 flex justify-between mt-2">
                      <span className="px-4">{formatDistanceToNow(new Date(item.snippet.publishedAt))} ago</span>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          ))
        : ""}
    </>
  );
};

export const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [inputValue, SetinputValue] = useState("");
  const [isSearchOpen, SetIsSearchopen] = useState(false);
  const handleInputChange = (event: any) => {
    SetinputValue(event.target.value);
  };
  const searchFunc = () => {
    onSearch(inputValue);
    SetIsSearchopen(!isSearchOpen);
  };
  const handleSearchIcon = () => {
    SetIsSearchopen(!isSearchOpen);
  };
  const handlekeydown = (event: any) => {
    if (event.key === "Enter") {
      searchFunc();
    } 
  }
  return (
    <>
    { isSearchOpen ? "":
    <>
      <motion.div className="mt-2"  animate={{ x: [100, 0] }}>
      <CiSearch onClick={handleSearchIcon} />
      </motion.div>
      </>
      }
      {isSearchOpen ? (
        <>
            <section className="md:hidden fixed bg-temp-clr ml-5">
            <input
              type="search"
              className="w-72 h-10 bg-transparent border border-gray-400 text-white text-xs rounded-s-full outline-0 pl-4 appearance-none"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handlekeydown}
            ></input>
            <button className="p-4 " onClick={searchFunc}>
              <CiSearch />
            </button>
            </section>
            <section className="w-96 h-10 lg:flex flex-row items-center rounded-3xl outline outline-1 hidden">
            <input
              type="search"
              className="w-80 h-10 bg-transparent border border-gray-400 text-white text-xs rounded-s-full outline-0 pl-4 appearance-none"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handlekeydown}
            ></input>
            <button className="p-4 " onClick={searchFunc}>
              <CiSearch />
            </button>
            </section>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchBar;
