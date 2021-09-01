import Blob1 from "./UI/Vector 1.svg";
import Blob2 from "./UI/Vector 2.svg";
import Blob3 from "./UI/Vector 3.svg";
import Image from "next/image";

function Blobs() {
  return (
    <div className="z-0">
      <div className="absolute top-0 right-0 ">
        <Image src={Blob1} />
      </div>
      <div className="absolute left-[20%] top-[30%]">
        <Image src={Blob2} />
      </div>
      <div className="absolute bottom-[-1000px] left-0 ">
        <Image src={Blob3} />
      </div>
    </div>
  );
}

export default Blobs;
