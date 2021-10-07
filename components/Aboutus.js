import data from "/data/aboutus";
function Aboutus() {
  return (
    <div id="aboutus">
      <div className="lg:flex xl:justify-center">
        <div className="lg:w-2/3 xl:w-1/3">
          <div className="p-4 md:p-6">
            <h1 className="text-blue-500 text-3xl md:text-4xl md:pl-4">
              ¿Qué es GDG?
            </h1>
            <div className="p-2 text-justify md:pl-4">{data.whatis}</div>
          </div>
          <div className="p-4 md:p-6">
            <h2 className="text-blue-500 text-xl md:text-2xl md:pl-4">
              ¿Qué hacemos?
            </h2>
            <div className="p-2 text-justify md:pl-4">{data.whatWeDo}</div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={data.whatIsImageURL} className="lg:p-10" />
        </div>
      </div>
      <div className="bg-gray-100 md:flex md:items-center	md:p-6 lg:h-screen">
        <iframe
          src="https://www.youtube.com/embed/V6s5kjSoqzw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="hidden md:inline md:h-60 md:w-96 lg:h-4/6 lg:w-full"
        ></iframe>
        <div className="pt-6">
          {(() => {
            let benefitsList = [];
            data.benefits.map((benefit) => {
              benefitsList.push(
                <div className="p-6 pt-0">
                  <div className="flex">
                    <img
                      src={benefit.imageURL}
                      className="w-10 md:w-12 lg:w-14"
                    />
                    <div className="pl-4">
                      <h2 className="text-blue-500 text-2xl">
                        {benefit.title}
                      </h2>
                      <p className="text-justify">{benefit.text}</p>
                    </div>
                  </div>
                </div>
              );
            });

            return benefitsList;
          })()}
        </div>
      </div>
      <div className="p-4 lg:p-6">
        <h1 className="text-blue-500 text-3xl mb-4  md:text-4xl md:pl-4">
          Una gran comunidad
        </h1>

        <div className="md:flex md:justify-center md:items-center">
          <div>
            {(() => {
              let statisticsList = [];
              data.statistics.map((item) => {
                statisticsList.push(
                  <div className="bg-green-400 p-4 rounded-xl m-8">
                    <div className="flex ">
                      <h2 className="text-3xl lg:text-5xl">{item.number}</h2>
                      <div className="ml-2 self-center lg:text-xl">
                        {" "}
                        {item.populationDesignation}
                      </div>
                    </div>
                    <div className="lg:text-2xl lg:pt-2">{item.text}</div>
                  </div>
                );
              });

              return statisticsList;
            })()}
          </div>
          <div className="hidden md:inline md:p-6">
            <img src={data.eventImageURL} className="w-92" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
