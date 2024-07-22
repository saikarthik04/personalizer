"use client"
import React from "react";
import Navbar from "../../components/navbar";
import Slidebar from "../../components/slidebar";
import Image from "next/image";
import { checkSession } from "@/auth/getsession";
const Home = async () => {
  const session = await checkSession();
    const handleMouseEnter = (event:any) => {
        event.target.play();
      };
    
      const handleMouseLeave = (event:any) => {
        event.target.pause();
      };

    if (session) {
    return (
      <>
        <div className=" border-b-2 border-white z-10 border-solid navbar-sticky">
          <Navbar />
        </div>
        <div className="flex flex-row">
        <Slidebar/>
        <section className="h-screen  homeScreen mt-36 ">
          <div className="grid grid-cols-3 gap-8">
            <div className="row-span-12">
              <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg- max-w-sm bg-transparent bg-zinc-800">
                  <a href="#!">
                    <video
                      width="320"
                      height="240"
                      controls
                      className="w-full rounded-t-lg"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        type="video/mp4"
                      />
                      <source src="movie.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                  </a>
                  <div className="p-4 flex justify-center">
                    <a href="" className="mr-4">
                      <Image
                        src="https://cdn.pixabay.com/photo/2021/07/13/09/12/lion-logo-6462988_1280.png"
                        alt="channel_logo" width={64} height={40}
                        className="bg-white h-10 w-16 rounded-full"
                      ></Image>
                      </a>
                    <span className="text-base text-start mb-2 flex flex-col">
                      Boost Your Angular Skills: Handling Boolean Variables
                      Efficiently
                      <p className="text-sm font-normal mt-3 text-gray-300 flex justify-between">Mr Beast <span className="px-4">2.5M subscribers</span></p>
                      <p className="text-xs font-normal text-gray-300 flex justify-between mt-2">269k views<span className="px-4">2 months ago</span></p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-12">
              <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg- max-w-sm bg-transparent bg-zinc-800">
                  <a href="#!">
                    <video
                      width="320"
                      height="240"
                      controls
                      className="w-full rounded-t-lg"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        type="video/mp4"
                      />
                      <source src="movie.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                  </a>
                  <div className="p-4 flex justify-center">
                    <a href="" className="mr-4">
                      <Image
                        src="https://cdn.pixabay.com/photo/2021/07/13/09/12/lion-logo-6462988_1280.png"
                        alt="channel_logo" width={64} height={40}
                        className="bg-white h-10 w-16 rounded-full"
                      ></Image>
                      </a>
                    <span className="text-base text-start mb-2 flex flex-col">
                      Boost Your Angular Skills: Handling Boolean Variables
                      Efficiently
                      <p className="text-sm font-normal mt-3 text-gray-300 flex justify-between">Mr Beast <span className="px-4">2.5M subscribers</span></p>
                      <p className="text-xs font-normal text-gray-300 flex justify-between mt-2">269k views<span className="px-4">2 months ago</span></p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-12">
              <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg- max-w-sm bg-transparent bg-zinc-800">
                  <a href="#!">
                    <video
                      width="320"
                      height="240"
                      controls
                      className="w-full rounded-t-lg"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        type="video/mp4"
                      />
                      <source src="movie.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                  </a>
                  <div className="p-4 flex justify-center">
                    <a href="" className="mr-4">
                      <Image
                        src="https://cdn.pixabay.com/photo/2021/07/13/09/12/lion-logo-6462988_1280.png"
                        alt="channel_logo" width={64} height={40}
                        className="bg-white h-10 w-16 rounded-full"
                      ></Image>
                      </a>
                    <span className="text-base text-start mb-2 flex flex-col">
                      Boost Your Angular Skills: Handling Boolean Variables
                      Efficiently
                      <p className="text-sm font-normal mt-3 text-gray-300 flex justify-between">Mr Beast <span className="px-4">2.5M subscribers</span></p>
                      <p className="text-xs font-normal text-gray-300 flex justify-between mt-2">269k views<span className="px-4">2 months ago</span></p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-12">
              <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg- max-w-sm bg-transparent bg-zinc-800">
                  <a href="#!">
                    <video
                      width="320"
                      height="240"
                      controls
                      className="w-full rounded-t-lg"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        type="video/mp4"
                      />
                      <source src="movie.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                  </a>
                  <div className="p-4 flex justify-center">
                    <a href="" className="mr-4">
                      <Image
                        src="https://cdn.pixabay.com/photo/2021/07/13/09/12/lion-logo-6462988_1280.png"
                        alt="channel_logo" width={64} height={40}
                        className="bg-white h-10 w-16 rounded-full"
                      ></Image>
                      </a>
                    <span className="text-base text-start mb-2 flex flex-col">
                      Boost Your Angular Skills: Handling Boolean Variables
                      Efficiently
                      <p className="text-sm font-normal mt-3 text-gray-300 flex justify-between">Mr Beast <span className="px-4">2.5M subscribers</span></p>
                      <p className="text-xs font-normal text-gray-300 flex justify-between mt-2">269k views<span className="px-4">2 months ago</span></p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-12">
              <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg- max-w-sm bg-transparent bg-zinc-800">
                  <a href="#!">
                    <video
                      width="320"
                      height="240"
                      controls
                      className="w-full rounded-t-lg"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        type="video/mp4"
                      />
                      <source src="movie.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                  </a>
                  <div className="p-4 flex justify-center">
                    <a href="" className="mr-4">
                      <Image
                        src="https://cdn.pixabay.com/photo/2021/07/13/09/12/lion-logo-6462988_1280.png"
                        alt="channel_logo" width={64} height={40}
                        className="bg-white h-10 w-16 rounded-full"
                      ></Image>
                      </a>
                    <span className="text-base text-start mb-2 flex flex-col">
                      Boost Your Angular Skills: Handling Boolean Variables
                      Efficiently
                      <p className="text-sm font-normal mt-3 text-gray-300 flex justify-between">Mr Beast <span className="px-4">2.5M subscribers</span></p>
                      <p className="text-xs font-normal text-gray-300 flex justify-between mt-2">269k views<span className="px-4">2 months ago</span></p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-12">
              <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg- max-w-sm bg-transparent bg-zinc-800">
                  <a href="#!">
                    <video
                      width="320"
                      height="240"
                      controls
                      className="w-full rounded-t-lg"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        type="video/mp4"
                      />
                      <source src="movie.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                  </a>
                  <div className="p-4 flex justify-center">
                    <a href="" className="mr-4">
                      <Image
                        src="https://cdn.pixabay.com/photo/2021/07/13/09/12/lion-logo-6462988_1280.png"
                        alt="channel_logo" width={64} height={40}
                        className="bg-white h-10 w-16 rounded-full"
                      ></Image>
                      </a>
                    <span className="text-base text-start mb-2 flex flex-col">
                      Boost Your Angular Skills: Handling Boolean Variables
                      Efficiently
                      <p className="text-sm font-normal mt-3 text-gray-300 flex justify-between">Mr Beast <span className="px-4">2.5M subscribers</span></p>
                      <p className="text-xs font-normal text-gray-300 flex justify-between mt-2">269k views<span className="px-4">2 months ago</span></p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg- max-w-sm bg-transparent bg-zinc-800">
                  <a href="#!">
                    <video
                      width="320"
                      height="240"
                      controls
                      className="w-full rounded-t-lg"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <source
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                        type="video/mp4"
                      />
                      <source src="movie.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                  </a>
                  <div className="p-4 flex justify-center">
                    <a href="" className="mr-4">
                      <Image
                        src="https://cdn.pixabay.com/photo/2021/07/13/09/12/lion-logo-6462988_1280.png"
                        alt="channel_logo" width={64} height={40}
                        className="bg-white h-10 w-16 rounded-full"
                      ></Image>
                      </a>
                    <span className="text-base text-start mb-2 flex flex-col">
                      Boost Your Angular Skills: Handling Boolean Variables
                      Efficiently
                      <p className="text-sm font-normal mt-3 text-gray-300 flex justify-between">Mr Beast <span className="px-4">2.5M subscribers</span></p>
                      <p className="text-xs font-normal text-gray-300 flex justify-between mt-2">269k views<span className="px-4">2 months ago</span></p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </>
    );
  }

};

export default Home;
