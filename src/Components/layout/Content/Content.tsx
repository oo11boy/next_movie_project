import React from "react";

import SideBar from "./SideBar/SideBar";
import SideMain from "./SideMain";
import { IResultApi } from "@/Types/GetMovieTvTypes";


export default function Content({data ,type}:{data:IResultApi,type:"movie" | "tv" }) {

  return (
    <div className="global-w flex flex-col-reverse lg:flex-row gap-4 justify-between">
      <SideBar />

      <SideMain  data={data} type={type}/>
    </div>
  );
}
