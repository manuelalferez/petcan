import data from "/data/contact";

function Contact() {
  return (
    <div className="p-4 md:p-6" id="contact">
      <h1 className="text-3xl md:text-4xl md:pl-4">Contacto</h1>
      <div className="pt-4 flex items-center flex-col md:mx-32 border-2 mt-2 rounded-xl border-gray-800">
        <div className="flex	p-2">
          <img src={data.phoneImageURL} />
          <h2 className="pl-2 text-2xl">{data.phoneNumber}</h2>
        </div>
        <div className="flex mt-2 p-2">
          <img src={data.emailImageURL} />
          <h2 className="pl-2 text-2xl ">{data.email}</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
