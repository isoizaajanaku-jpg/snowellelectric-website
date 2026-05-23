import { useEffect, useState } from "react";

const Home = () => {
  const images = ["electric2.jpg", "breaker.jpg", "lighting.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slider);
  });
  return (
    <section>
      {/* HERO */}
      <div className="relative h-[90vh]">
        <img
          src={images[currentImage]}
          alt="Electrical Products"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6">
              Welcome to Snowell Electric
            </h1>

            <p className="text-white text-lg md:text-2xl max-w-3xl mx-auto">
              We provide high quality electrical products for homes, industries,
              and businesses.
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="wires.jpg"
            alt="Electrical"
            className="rounded-2xl shadow-xl hover:scale-105 transition duration-500"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              About Snowell
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              Snowell Electric is a trusted electrical company that provides
              durable electrical materials and modern energy solutions for
              customers.
            </p>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-500">
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">
              Electrical Wires
            </h3>

            <p className="text-gray-600">
              Durable and safe electrical wires for homes and offices.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-500">
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">
              Lighting Systems
            </h3>

            <p className="text-gray-600">
              Modern lighting systems with energy-saving technology.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-500">
            <h3 className="text-2xl font-bold mb-4 text-yellow-500">
              Circuit Protection
            </h3>

            <p className="text-gray-600">
              Quality breakers and protection devices for safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
