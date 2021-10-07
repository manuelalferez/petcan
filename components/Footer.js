import data from "/data/footer";
import Social from "./Social";

function Footer() {
  let listAbout = [];
  listAbout.push(<h2 className="text-xl mb-2">Acerca de</h2>);
  for (let item of data["Acerca de"]) {
    listAbout.push(
      <a
        href={item.url}
        className="text-sm pb-1 hover:text-blue-500"
        target="_blank"
      >
        {item.title}
      </a>
    );
  }
  let listResources = [];
  listResources.push(<h2 className="text-xl mb-2">Recursos</h2>);
  for (let item of data["Recursos"]) {
    listResources.push(
      <a
        href={item.url}
        className="text-sm pb-1 hover:text-blue-500"
        target="_blank"
      >
        {item.title}
      </a>
    );
  }
  return (
    <div className="h-56 border-t">
      <div className="pb-6 lg:flex lg:justify-around lg:items-center">
        <Social />
        <div className="flex justify-center">
          <div className="flex flex-col w-54 p-6">{listAbout}</div>
          <div className="flex flex-col w-54 p-6">{listResources}</div>
        </div>
      </div>
      <a
        href="https://github.com/GDGJaen/website"
        className="flex justify-center text-gray-700 py-6 hover:text-blue-500"
        target="_blank"
      >
        Creado con amor por GDG Jaén
      </a>
    </div>
  );
}

export default Footer;
