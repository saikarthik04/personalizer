import { IconType } from 'react-icons';
import { FcSportsMode } from 'react-icons/fc';
import { IoAdd } from 'react-icons/io5';
import { MdSports } from 'react-icons/md';
import { SiApplenews } from 'react-icons/si';
import { SlGameController, SlFilm, SlGraduation, SlMusicTone,  } from 'react-icons/sl';
export let constants = {
  YOUTUBE_API_BASE_URL: "https://www.googleapis.com/youtube/v3",
};

export let categoryItems:{
  categoryId:number;
  categoryName:string;
  categoryValue:string;
  icon:IconType;
  iconColor:string;
}[]=[
  {
    categoryId:1,
    categoryName:"gaming",
    categoryValue:"gaming",
    icon:SlGameController,
    iconColor:"text-red-500"
  },
  {
    categoryId:2,
    categoryName:"movies",
    categoryValue:"movies",
    icon:SlFilm,
    iconColor:"text-pink-500"
  },
  {
    categoryId:3,
    categoryName:"education",
    categoryValue:"education",
    icon:SlGraduation,
    iconColor:"text-yellow-400",
  },
  {
    categoryId:4,
    categoryName:"news",
    categoryValue:"news",
    icon:SiApplenews,
    iconColor:"text-green-400",
  },
  {
    categoryId:5,
    categoryName:"music",
    categoryValue:"music",
    icon:SlMusicTone,
    iconColor:"text-lime-400",
  },
  {
    categoryId:6,
    categoryName:"sports",
    categoryValue:"sports",
    icon:FcSportsMode,
    iconColor:"text-amber-400",
  },
  {
    categoryId:0,
    categoryName:"new",
    categoryValue:"new",
    icon:IoAdd,
    iconColor:"",
  },
]