import Image from "next/image";
import menuIcon from "../public/menuIcon.png";
import gdgLogo from "../public/gdgLogo.png";

function Navbar() {
  return (
    <div className="h-16 shadow-md w-screen flex place-items-center p-2 md:justify-between">
      <button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-200 focus:outline-none md:hidden">
        <Image src={menuIcon} alt="Menu" height="25" width="25" />
      </button>
      <a className="ml-5 flex place-items-center" href="#">
        <Image src={gdgLogo} />
      </a>
      <div className="hidden text-sm md:inline mr-4 text-gray-700">
        <a href="#" className="hover:bg-gray-100 p-3 mr-2 w-30">
          Inicio
        </a>
        <a href="#" className="hover:bg-gray-100 p-3 mr-2 w-25">
          Acerca de
        </a>
        <a href="#" className="hover:bg-gray-100 p-3 mr-2 w-25">
          Equipo
        </a>
      </div>
    </div>
  );
}

export default Navbar;
