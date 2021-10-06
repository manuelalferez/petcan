import Image from "next/image";
import data from "../data/SocialData";

function Social() {
  const list = [];

  for (const item of data) {
    list.push(
      <a
        href={item.url}
        className="hover:text-blue-200"
        target="_blank"
        title={item.title}
      >
        <Image src={item.image_path} width="30" height="30" />
      </a>
    );
  }

  return (
    <div className="p-4 border-t">
      {" "}
      <h1 className="text-xl mb-2 text-center">Síguenos en redes sociales</h1>
      <div className="flex justify-around mt-8 w-48 mx-auto md:w-60 lg:w-64">
        {list}
      </div>
    </div>
  );
}

export default Social;
