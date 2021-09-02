import Image from "next/image";
import yen from "./coffee.jpg";

function MediumCard() {
  return (
    <div className="relative py-12 cursor-pointer">
      <div className="relative h-36 ">
        <Image
          src={yen}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
        ss
      </div>
      <div className="py-2">
        <p className="text-gray-400 font-light">渋谷区</p>
        <h3 className="text-lg  font-semibold mb-1 w-64">
          隠れ家カフェを見つけてみませんか？
        </h3>
        <p className="line-clamp-3 my-2 ">
          いつも渋谷で生きなれているあなたへ。いつも大変忙しいと思いますが、この度は一読ありがとうございます。
        </p>
        <p className="text-[#1D3557] ">#節約</p>
        <p className="text-gray-400 pt-2">予算：３０００円</p>
        <p className="text-gray-400">時間：半日</p>
      </div>
    </div>
  );
}

export default MediumCard;
