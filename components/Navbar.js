function Navbar() {
  return (
    <div className="h-16 fixed top-0 z-10 shadow-md bg-white w-screen flex place-items-center p-2 md:justify-between">
      <button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-200 focus:outline-none md:hidden">
        <img
          src="https://ik.imagekit.io/gdgjaen/icons/menu_PidCGb5xV.png?updatedAt=1633596157238"
          alt="Menu"
          height="25"
          width="25"
        />
      </button>
      <a className="ml-5 flex place-items-center" href="#">
        <img src="https://ik.imagekit.io/gdgjaen/images/gdgLogo_OI5enDkX1.png?updatedAt=1633596180362" />
      </a>
      <div className="hidden text-sm md:inline mr-4 text-gray-700">
        <a href="#" className="hover:bg-gray-100 p-3 mr-2 w-30">
          Inicio
        </a>
        <a href="#aboutus" className="hover:bg-gray-100 p-3 mr-2 w-25">
          Acerca de
        </a>
        <a href="#team" className="hover:bg-gray-100 p-3 mr-2 w-25">
          Equipo
        </a>
      </div>
    </div>
  );
}

export default Navbar;
