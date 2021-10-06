import Image from "next/image";
import data from "../data/FooterData";
import Social from "./Social";

function Footer() {
  let listAbout = [];
  listAbout.push(<h2 className="text-xl mb-2">Acerca de</h2>);
  for (let item of data["Acerca de"]) {
    listAbout.push(
      <a href={item.url} className="text-sm pb-1">
        {item.title}
      </a>
    );
  }
  let listResources = [];
  listResources.push(<h2 className="text-xl mb-2">Recursos</h2>);
  for (let item of data["Recursos"]) {
    listResources.push(
      <a href={item.url} className="text-sm pb-1">
        {item.title}
      </a>
    );
  }
  return (
    <div className="h-56 pb-6">
      <Social />
      <div className="flex justify-center">
        <div className="flex flex-col w-54 p-6">{listAbout}</div>
        <div className="flex flex-col w-54 p-6">{listResources}</div>
      </div>
      <div className="flex justify-center text-gray-600 py-6">
        Creado con amor por GDG Jaén
      </div>
    </div>
  );
}

export default Footer;
