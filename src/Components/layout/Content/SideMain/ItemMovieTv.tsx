"use client";
import CardImgSide from "./Util/CardImgSide";
import CardContentSide from "./Util/CardContentSide";
import { ItemCardProps } from "@/Types/Types";

export default function ItemMovieTv({ item, listGenre, type }: ItemCardProps) {

  return (
    <div className="flex md:w-full flex-col sm:flex-row relative justify-start h-auto md:h-[400px] p-4 bg-[#242424] mb-8">
      <CardImgSide item={item} />
      <CardContentSide item={item} listGenre={listGenre} type={type} />
    </div>
  );
}
