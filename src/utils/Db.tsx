import { IconType } from 'react-icons';
import {  FaFilm, FaTv, FaList } from 'react-icons/fa';
import { IoCloudDownloadOutline, IoHomeOutline } from "react-icons/io5";


export interface MenuItems{
  id:number;
  title:string;
  icon:React.ReactNode;
  link:string;
  img:string;
  submenu:SubMenuItem[]
}
export interface SubMenuItem {
  id: number;
  title: string;
}

export const MenuItems = [
  { id: 1, title: "home", icon:<IoHomeOutline />, link: "#" },
  {
    id: 2,
    title: "submenu",
    icon: <FaList />,
    link: "#",
    img: "https://digimoviez.com/wp-content/uploads/2021/05/09994db832d.png",
    submenu: [
      { id: 1, title: "250 Top Movies of All Time" },
      { id: 2, title: "Latest Movie Releases" },
      { id: 3, title: "Best Indian Movies 2023" },
      { id: 4, title: "Popular TV Series to Watch Now" },
      { id: 5, title: "Classic Movies You Must See" },
      { id: 6, title: "Bollywood Blockbusters" },
      { id: 7, title: "Hollywood's Greatest Hits" },
      { id: 8, title: "Top Rated Netflix Series" },
      { id: 9, title: "Action-Packed Movies" },
      { id: 10, title: "Romantic Comedies to Binge Watch" },
    ],
  },
  { id: 3, title: "Movies", icon: <FaFilm />, link: "../movies" },
  { id: 4, title: "Series", icon: <FaTv />, link: "../series" },
  { id: 5, title: "Application", icon: <IoCloudDownloadOutline />, link: "#download" },
];