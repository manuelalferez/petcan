import Social from "./Social";

function Footer() {
  return (
    <div className="h-56 border-t">
      <div className="pb-6 lg:flex lg:justify-around lg:items-center">
        <Social />
      </div>
      <a
        href="https://manuelalferez.com"
        className="flex justify-center text-gray-700 py-6 hover:text-blue-500"
        target="_blank"
      >
        Creado con amor por Manuel Alférez
      </a>
    </div>
  );
}

export default Footer;
