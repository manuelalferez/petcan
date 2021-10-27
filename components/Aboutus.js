import data from "/data/aboutus";
function Aboutus() {
  return (
    <div id="aboutus">
      <div className="lg:flex xl:justify-center">
        <div className="lg:w-2/3 xl:w-1/3">
          <div className="p-4 md:p-6">
            <h1 className="text-3xl md:text-4xl md:pl-4">Acerca de</h1>
            <div className="p-2 text-justify md:pl-4">{data.whatis}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
