import img from "./UI/hero-img.svg";
import Image from "next/image";

function Heroes() {
  return (
    <div className="grid grid-cols-2 justify-between">
      <div className="pt-8 ">
        <h1 className="text-4xl font-bold leading-relaxed">
          いつものデートプラン困っていませんか？SEEQではたくさんのアイディアが待っています。
        </h1>
        <p className="pt-4">
          初めてデートをする人、いつもとは違う刺激を求めているカップル、旅先で最高な体験をしたいご夫婦も、ここで新しいアイディアを得てもっと幸せな時間にしましょう。あなたの何気ないデートプランは誰かの幸せにつながるかもしれません。そのプラン、シェアしてみましょう！
        </p>
      </div>
      <div className="w-[456px] h-[466px] relative justify-self-end">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Heroes;
