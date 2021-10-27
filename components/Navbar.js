import data from "/data/navbar";
function Navbar() {
  return (
    <div className="h-16 fixed top-0 z-20 shadow-md bg-white w-screen flex place-items-center p-2 md:justify-between">
      <a className="mx-auto md:ml-5" href="#">
        <img src={data.logoURL} className="w-40 ml-6 md:ml-2 " />
      </a>
      <div className="hidden text-sm md:inline mr-4 text-gray-700">
        <a href="#" className="hover:bg-gray-100 p-3 mr-2 w-30">
          {data.buttons.home}
        </a>
        <a href="#aboutus" className="hover:bg-gray-100 p-3 mr-2 w-25">
          {data.buttons.aboutUs}
        </a>
        <a href="#pricing" className="hover:bg-gray-100 p-3 mr-2 w-25">
          {data.buttons.pricing}
        </a>
        <a href="#contact" className="hover:bg-gray-100 p-3 mr-2 w-25">
          {data.buttons.contact}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
