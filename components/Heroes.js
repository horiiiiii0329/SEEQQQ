import Blob1 from "./UI/Vector 1.svg";
import Blob2 from "./UI/Vector 2.svg";
import Blob3 from "./UI/Vector 3.svg";
import Image from "next/image";

function Heroes() {
  return (
    <>
      <Image src={Blob1} className="absolute" />
      <Image src={Blob2} className="absolute" />
      <Image src={Blob3} className="absolute" />
    </>
  );
}

export default Heroes;
