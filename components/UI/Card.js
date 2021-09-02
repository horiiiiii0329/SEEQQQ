import Image from "next/image";
import { StarIcon, HeartIcon } from "@heroicons/react/solid";
import yen from "./coffee.jpg";

function Card() {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={yen}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>渋谷</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">カフェホッパー</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">
          渋谷で楽しいカフェです
        </p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            24
          </p>

          <div>
            <p className="text-lg lg;text-2xl font-semibold pb-2">1300/day</p>
            <p className="text-right font-extralight">#cafe #chill</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
