function Aboutus() {
  return (
    <div id="aboutus">
      <div className="lg:flex xl:justify-center">
        <div className="lg:w-2/3 xl:w-1/3">
          <div className="p-4 md:p-6">
            <h1 className="text-blue-500 text-3xl md:text-4xl md:pl-4">
              ¿Qué es GDG?
            </h1>
            <div className="p-2 text-justify md:pl-4">
              Los Google Developer Groups (GDGs) son entidades sin ánimo de
              lucro creadas con el objetivo de mejorar la comunidad de
              entusiastas tecnológicos y aumentar el conocimiento y las
              relaciones entre las personas que se dedican a esta área.
            </div>
          </div>
          <div className="p-4 md:p-6">
            <h2 className="text-blue-500 text-xl md:text-2xl md:pl-4">
              ¿Qué hacemos?
            </h2>
            <div className="p-2 text-justify md:pl-4">
              Albergamos una variedad de actividades técnicas para
              desarrolladores, desde solo unas pocas personas que se reúnen para
              ver nuestros últimos videos, grandes reuniones con demostraciones
              y charlas tecnológicas, o hackathons.
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://ik.imagekit.io/gdgjaen/images/connect_zl3TNWuwg.png?updatedAt=1633596179893"
            className="lg:p-10"
          />
        </div>
      </div>
      <div className="bg-gray-100 md:flex md:items-center	md:p-6">
        <iframe
          src="https://www.youtube.com/embed/V6s5kjSoqzw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="hidden md:inline md:h-60 md:w-96 lg:h-72 lg:w-full"
        ></iframe>
        <div>
          <div className="p-6">
            <div className="flex">
              <img
                src="https://ik.imagekit.io/gdgjaen/images/icon_conecta_Z58-ROI1u.svg?updatedAt=1633596205922"
                className="w-10 md:w-12 lg:w-14"
              />
              <div className="pl-4">
                <h2 className="text-blue-500 text-2xl">Conecta</h2>
                <p className="text-justify">
                  Todos son bienvenidos, sin importar la disciplina de la que
                  vengas.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex">
              <img
                src="https://ik.imagekit.io/gdgjaen/images/icon_aprende_LgN3iMGyz.svg?updatedAt=1633596205727"
                className="w-10 md:w-12 lg:w-14"
              />
              <div className="pl-4">
                <h2 className="text-blue-500 text-2xl">Aprende</h2>
                <p className="text-justify">
                  Aprende sobre una variedad de temas técnicos y obtiene nuevas
                  habilidades a través de talleres prácticos, capacitación,
                  eventos, charlas y reuniones, tanto en línea como en persona.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="flex">
              <img
                src="https://ik.imagekit.io/gdgjaen/images/icon_crece_Iwuva8-kV.svg?updatedAt=1633596206220"
                className="w-10 md:w-12 lg:w-14"
              />
              <div className="pl-4">
                <h2 className="text-blue-500 text-2xl">Crece</h2>
                <p className="text-justify">
                  Aplica tuz conocimientos y conexiones para crear excelentes
                  productos y avanzar en rus habilidades, carrera y red. Da de
                  vuelta a tu comunidad ayudando a otros a aprender también.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-6">
        <h1 className="text-blue-500 text-3xl mb-4  md:text-4xl md:pl-4">
          Una gran comunidad
        </h1>
        <div className="md:flex md:justify-center md:items-center">
          <div>
            <div className="bg-green-400 p-4 rounded-xl mx-8">
              <div className="flex ">
                <h2 className="text-3xl lg:text-5xl">+900</h2>
                <div className="ml-2 self-center lg:text-xl"> miembros</div>
              </div>
              <div className="lg:text-2xl lg:pt-2">Una gran comunidad</div>
            </div>
            <div className="bg-blue-400 p-4 rounded-xl mt-4 mx-8">
              <div className="flex ">
                <h2 className="text-3xl lg:text-5xl">+400</h2>
                <div className="ml-2 self-center lg:text-xl"> asistentes</div>
              </div>
              <div className="lg:text-2xl lg:pt-2">
                Orgullosos de nuestros DevFests
              </div>
            </div>
          </div>
          <div className="hidden md:inline md:p-6">
            <img
              src="https://ik.imagekit.io/gdgjaen/images/eventPeople_GlU-0ht1D.jpeg?updatedAt=1633596180152"
              className="w-92"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
