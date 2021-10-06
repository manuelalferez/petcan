import Image from "next/image";
import data from "../data/SocialData";

function Social() {
  const list = [];

  for (const item of data) {
    list.push(
      <a href={item.url} className="text-white hover:text-blue-200">
        <Image src={item.image_path} width="30" height="30" />
      </a>
    );
  }

  return (
    <div className="p-4 bg-blue-500	text-white">
      {" "}
      <h1 className="text-blue-500 text-3xl text-white text-center">
        Síguenos en redes sociales
      </h1>
      <div className="flex justify-around mt-8 w-48 mx-auto">{list}</div>
    </div>
  );
}

export default Social;
