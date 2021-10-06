import Image from "next/image";
import data from "../data/FooterData";

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
    <div className="flex justify-center	 h-48 border-t">
      <div className="flex flex-col w-54 p-6">{listAbout}</div>
      <div className="flex flex-col w-54 p-6">{listResources}</div>
    </div>
  );
}

export default Footer;
