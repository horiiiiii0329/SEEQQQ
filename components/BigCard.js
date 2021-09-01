import Image from "next/image";
import biycle from "./UI/bicycle.svg";
import tree from "./UI/tree.svg";
import map from "./UI/map.svg";
import { ArrowRightIcon } from "@heroicons/react/solid";

function BigCard() {
  return (
    <div className="grid grid-cols-3 items-center pt-10">
      <div>
        <div>
          <Image src={biycle} />
        </div>
        <div className="flex text-[#1D3557] space-x-3 items-center p-2">
          <h2 className="font-bold text-lg">とりあえず見てみる！</h2>
          <ArrowRightIcon className="h-7 w-7" />
        </div>
      </div>

      <div>
        <div>
          <Image src={tree} />
        </div>
        <div className="flex text-[#1D3557] space-x-3 items-center p-2">
          <h2 className="font-bold text-lg">予算から探す！</h2>
          <ArrowRightIcon className="h-7 w-7" />
        </div>
      </div>
      <div>
        <div>
          <Image src={map} />
        </div>
        <div className="flex text-[#1D3557] space-x-3 items-center p-2">
          <h2 className="font-bold text-lg">場所から見る！</h2>
          <ArrowRightIcon className="h-7 w-7" />
        </div>
      </div>
    </div>
  );
}

export default BigCard;
