import Image from "next/image";
import gdgConnect from "../public/gdgConnect.png";
import iconConnect from "../public/icon_conecta.svg";
import iconLearn from "../public/icon_aprende.svg";
import iconGrow from "../public/icon_crece.svg";

function Aboutus() {
  return (
    <div>
      <div>
        <div className="p-4">
          <h1 className="text-blue-500 text-3xl">¿Qué es GDG?</h1>
          <div className="p-2 text-justify">
            Los Google Developer Groups (GDGs) son entidades sin ánimo de lucro
            creadas con el objetivo de mejorar la comunidad de entusiastas
            tecnológicos y aumentar el conocimiento y las relaciones entre las
            personas que se dedican a esta área.
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-blue-500 text-xl">¿Qué hacemos?</h2>
          <div className="p-2 text-justify">
            Albergamos una variedad de actividades técnicas para
            desarrolladores, desde solo unas pocas personas que se reúnen para
            ver nuestros últimos videos, grandes reuniones con demostraciones y
            charlas tecnológicas, o hackathons.
          </div>
          <Image src={gdgConnect} />
        </div>
      </div>
      <div className="bg-gray-100">
        <iframe
          src="https://www.youtube.com/embed/V6s5kjSoqzw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="hidden"
        ></iframe>
        <div>
          <div className="p-6">
            <div className="flex">
              <Image src={iconConnect} width={70} />
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
              <Image src={iconLearn} width={195} />
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
              <Image src={iconGrow} width={195} />
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
      <div className="p-4">
        <h1 className="text-blue-500 text-3xl mb-4">Una gran comunidad</h1>
        <div className="bg-green-400 p-4 rounded-xl mx-8">
          <div className="flex ">
            <h2 className="text-3xl">+900</h2>
            <div className="ml-2 self-center"> miembros</div>
          </div>
          <div>Una gran comunidad</div>
        </div>
        <div className="bg-blue-400 p-4 rounded-xl mt-4 mx-8">
          <div className="flex ">
            <h2 className="text-3xl">+400</h2>
            <div className="ml-2 self-center"> asistentes</div>
          </div>
          <div>Orgullosos de nuestros DevFests</div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
