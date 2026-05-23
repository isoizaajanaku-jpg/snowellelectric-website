import {} from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-gray-100">
      {/*HERO IMAGE*/}
      <div className="relative h-[60vh]">
        <img
          src="/images/snowell-hero.jpg"
          alt="Snowell Electric"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-yellow-400 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            About Snowell Electric
          </h1>
        </div>
      </div>

      {/*WHO WE ARE */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center py-20 px-6">
        {/* TEXT LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>

          <p className="text-gray-600 leading-7">
            Snowell Electric is a trusted supplier of high-quality electrical
            appliances and accessories in Lagos, Nigeria. We provide reliable
            solutions for homes, offices, and industrial needs.
            <br />
            <br />
            Our mission is to deliver affordable, durable, and efficient
            electrical products that improve everyday living.
          </p>
        </div>

        {/* IMAGE RIGHT */}
        <div>
          <img
            src="wires.jpg"
            alt="Store"
            className="rounded-2xl shadow-lg w-full h-87.5 object-cover"
          />
        </div>
      </div>

      {/*WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-center text-3xl font-bold mb-10">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2">Quality Products</h3>
            <p className="text-gray-600">
              We sell only tested and reliable electrical items.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2">Affordable Prices</h3>
            <p className="text-gray-600">
              Best value for money without compromising quality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-xl mb-2">Trusted Support</h3>
            <p className="text-gray-600">
              We are always available to help our customers.
            </p>
          </div>
        </div>
      </div>

      {/*SHOP NOW CTA*/}
      <div className="text-center pb-20">
        <Link
          to="/products"
          className="bg-yellow-400 hover:bg-black  text-white px-8 py-4 rounded-xl font-semibold shadow-md transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default About;
