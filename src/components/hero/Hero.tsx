import React from "react";

const Hero = () => {
  return (
    <div
      className="hero flex items-center justify-center h-screen text-white"
      style={{ position: "relative" }}
    >
      {/* Container for Content */}
      <div className="container flex flex-col md:flex-row items-center justify-between max-w-6xl px-8">
        {/* Text Section */}
        <section className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Mercury Layer</h1>
          <h3 className="text-lg font-medium mb-6">
            Blinded signing service: enabling multiparty computation statechains
          </h3>
          <button
            className="bg-white text-[#0B0742] px-6 py-2 rounded-md shadow-md font-semibold hover:bg-gray-200 transition"
            onClick={() => (window.location.href = "https://api.mercurylayer.com")}
          >
            Status
          </button>
        </section>

        {/* Video Section */}
        <div className="md:w-1/2 flex justify-center">
          <video
            className="hero-video rounded-xl"
            style={{ maxWidth: "80%" }}
            muted
            playsInline
            autoPlay
            loop
          >
            <source src="mercury-loop-820px-q35.webm" type="video/webm" />
            <source src="mercury-loop-820px-q35.mp4" type="video/mp4" />
            <source src="mercury-loop-820px-q35.ogv" type="video/ogg" />
            Sorry, your browser doesn&#39;t support embedded videos.
          </video>
        </div>
      </div>

      {/* Explore More Section */}
      <div
        className="absolute bottom-10 text-center cursor-pointer"
      >
        <a href="#overview">
        Explore More ⇩</a>
      </div>
    </div>
  );
};

export default Hero;
