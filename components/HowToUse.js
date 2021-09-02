import idea from "./UI/Business Plan.svg";
import Image from "next/image";

function HowToUse() {
  return (
    <section className="pt-32">
      <h3 className="text-3xl font-bold text-center tracking-widest">
        SEEQの仕組み
      </h3>
      <p className="text-center pt-4 leading-loose text-lg">
        いろいろな人のプランを見てあなたの大事な人と幸せな時間を作るきかっけをえましょう。
        <br />
        アカウントは無料で作成できます。
      </p>
      <div className="grid grid-cols-3 gap-x-2">
        <div>
          <Image src={idea} width="400px" height="380px" />
          <h3 className="text-2xl font-bold text-center pb-3 text-[#1D3557]">
            アカウントを作成する
          </h3>
          <p className="text-xl text-center">
            いくつかの簡単なステップでアカウント作成できます。
          </p>
        </div>
        <div>
          <Image src={idea} width="400px" height="380px" />
          <h3 className="text-2xl font-bold text-center pb-3 text-[#1D3557]">
            アカウントを作成する
          </h3>
          <p className="text-xl text-center">
            いくつかの簡単なステップでアカウント作成できます。
          </p>
        </div>
        <div>
          <Image src={idea} width="400px" height="380px" />
          <h3 className="text-2xl font-bold text-center pb-3 text-[#1D3557]">
            アカウントを作成する
          </h3>
          <p className="text-xl text-center">
            いくつかの簡単なステップでアカウント作成できます。
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowToUse;
