import Image from "next/image";

import muscle from "public/Muscle Tank (T Shirts) 75.png";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className="flex flex-row justify-between items-start">
        <div>
          <Image src={muscle} alt="muscle" width={100} height={100} />
          <Image src={muscle} alt="muscle" width={100} height={100} className="p-4"/>
          <Image src={muscle} alt="muscle" width={100} height={100} className="p-4"/>
        </div>
        <Image src={muscle} alt="muscle" />
      </div>
    </div>
  );
};

export default page;
