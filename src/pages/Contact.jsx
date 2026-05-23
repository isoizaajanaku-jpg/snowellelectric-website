import {} from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* CONTACT INFO */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-yellow-500">
              Get In Touch
            </h2>

            <p className="text-gray-600 mb-4 text-lg">Address:</p>

            <p className="text-gray-800 mb-8">
              12 Admiralty Way, Lekki, Lagos, Nigeria
            </p>

            <p className="text-gray-600 mb-4 text-lg">Email:</p>

            <a
              href="mailto:snowellelectric@gmail.com"
              className="text-blue-500 underline text-lg"
            >
              snowellelectric@gmail.com
            </a>
          </div>

          {/* GOOGLE MAP */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
