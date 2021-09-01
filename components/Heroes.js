import img from "./UI/hero-img.svg";
import Image from "next/image";

function Heroes() {
  return (
    <div className="grid grid-cols-2 ">
      <div className="pt-12 ">
        <h1 className="text-4xl font-bold leading-relaxed">
          いつものデートプラン困っていませんか？SEEQではたくさんのアイディアが待っています。
        </h1>
        <p className="pt-4">
          初めてデートをする人、いつもとは違う刺激を求めているカップル、旅先で最高な体験をしたいご夫婦も、ここで新しいアイディアを得てもっと幸せな時間にしましょう。あなたの何気ないデートプランは誰かの幸せにつながるかもしれません。そのプラン、シェアしてみましょう！
        </p>
      </div>
      <div className="justify-self-end">
        <Image src={img} />
      </div>
    </div>
  );
}

export default Heroes;
