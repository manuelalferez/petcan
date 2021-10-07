import data from "../data/socialData";

function Social() {
  const list = [];

  for (const item of data) {
    list.push(
      <a
        href={item.url}
        className="p-2 hover:bg-gray-100 rounded-full"
        target="_blank"
        title={item.title}
      >
        <img src={item.image_path} width="30" height="30" />
      </a>
    );
  }

  return (
    <div className="p-4">
      {" "}
      <h1 className="text-xl mb-2 text-center">Síguenos en redes sociales</h1>
      <div className="flex justify-around mt-8 w-48 mx-auto md:w-60 lg:w-64">
        {list}
      </div>
    </div>
  );
}

export default Social;
