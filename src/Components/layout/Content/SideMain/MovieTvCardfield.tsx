import React, { ReactNode } from "react";

type MovieTvCardfield={
    icon:ReactNode;
    title:String;
    content:any;
}
export default function MovieTvCardfield({ icon, title, content }:MovieTvCardfield) {
  return (
    <div className="flex flex-row gap-2 items-center mt-4">
      <span className="text-[orange]">{icon}</span>
      <span>{title}:</span>
      <span className="line-clamp-1  overflow-hidden text-ellipsis">
      {content}
      </span>
     
    </div>
  );
}
