function Hero() {
  return (
    <div className="bg-hero-pattern h-screen object-cover w-full bg-no-repeat relative">
      <div className="absolute text-center top-1/2 w-4/6 -translate-y-2/4 translate-x-1/4">
        <h1 className="text-white text-3xl md:text-5xl  ">
          <span className="font-semibold">Únete</span> a nuestra comunida y
          aprende cosas
        </h1>
      </div>
    </div>
  );
}

export default Hero;
