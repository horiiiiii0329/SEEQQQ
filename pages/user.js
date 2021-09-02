import Header from "../components/Header";
import {
  UserCircleIcon,
  HeartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import Footer from "../components/Footer";
import Card from "../components/UI/Card";

function user() {
  return (
    <div>
      <Header />
      <hr className="mt-6" />
      <main className="max-w-7xl mx-auto px-4 z-20">
        <section className=" flex flex-wrap items-center pt-24 space-x-12">
          <div>
            <UserCircleIcon className="text-gray-300" width="400px" />
          </div>
          <div>
            <h2 className="text-4xl font-semibold mb-4">山田 さん</h2>
            <p className="flex items-center">
              <HeartIcon className="text-red-400 mr-4" width="25" height="25" />
              300
            </p>
            <p className="text-gray-400 py-2">2020年からメンバー</p>
            <p className="flex items-center text-gray-400 ">
              <LocationMarkerIcon className="text-gray-200 mr-4" width="25" />
              東京
            </p>
          </div>
        </section>
        <section className="border-t flex justify-between space-x-3">
          <div className="flex space-x-4">
            <p className="bg-[#1d3557] py-2 px-4 rounded-full text-white my-10">
              過去に投稿したもの
            </p>
            <p className="bg-[#1d3557] py-2 px-4 rounded-full text-white my-10">
              保存したもの
            </p>
          </div>

          <p className="bg-[#FE4A49] py-2 px-14 rounded-full text-white my-10">
            投稿する
          </p>
        </section>
        <section>
          <Card />
          <Card />

          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default user;
