import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="relative text-white py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/images/A_visually_appealing_background_for_a_website_foot.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Section */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl pt-8 sm:text-7xl font-bold drop-shadow-lg text-blue-200 animate-bounce">
          Amatip Digital Box
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-100 animate-slide-in">
          <span className="block bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent font-semibold text-2xl sm:text-3xl">
            Your Digital Transformation
          </span>
          <span className="block mt-8 text-gray-200 font-light">
            Tools to build, grow, and thrive.
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out">
            Get Started
          </button>

          <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out">
            Book Consultation
          </button>
        </div>
      </div>

      {/* Scattered Images */}
      <div className="absolute inset-0 hidden sm:block">
        {/* Top Left */}
        <div className="absolute top-5 left-5 rotate-[-5deg] shadow-md animate-float">
          <Image
            src="/images/converted_image.jpg"
            alt="Highlight 1"
            width={150}
            height={150}
          />
        </div>
        <div className="absolute top-24 left-40 rotate-[10deg] shadow-md animate-float delay-1s">
          <Image
            src="/images/converted_image_2.jpg"
            alt="Highlight 2"
            width={200}
            height={200}
          />
        </div>

        {/* Top Right */}
        <div className="absolute top-10 right-20 rotate-[15deg] shadow-md animate-float">
          <Image
            src="/images/converted_image_3.jpg"
            alt="Highlight 3"
            width={150}
            height={150}
          />
        </div>
        <div className="absolute top-40 right-10 rotate-[-10deg] shadow-md animate-float delay-2s">
          <Image
            src="/images/converted_image_4.jpg"
            alt="Highlight 4"
            width={200}
            height={200}
          />
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-20 left-10 rotate-[-15deg] shadow-md animate-float">
          <Image
            src="/images/converted_image_8.jpg"
            alt="Highlight 5"
            width={250}
            height={250}
          />
        </div>
        <div className="absolute bottom-10 left-40 rotate-[5deg] shadow-md animate-float delay-3s">
          <Image
            src="/images/converted_image_9.jpg"
            alt="Highlight 6"
            width={200}
            height={200}
          />
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-20 right-20 rotate-[5deg] shadow-md animate-float">
          <Image
            src="/images/converted_image_10.jpg"
            alt="Highlight 7"
            width={250}
            height={250}
          />
        </div>
        <div className="absolute bottom-10 right-40 rotate-[-10deg] shadow-md animate-float delay-4s">
          <Image
            src="/images/converted_new_image_4 (2).jpg"
            alt="Highlight 8"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
