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
      <div className="absolute left-56 top-0">
        <Image src={Blob2} height="1200px" />
      </div>
      <div className="absolute bottom-[-1600px] left-0 ">
        <Image src={Blob3} />
      </div>
    </div>
  );
}

export default Blobs;
