import React from "react";

const OpenDoorsBanner = () => {
  return (
    <div className="bg-[#00007A] text-white py-16 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover the university and the students at our
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
            Open Doors events
            <div className="absolute left-1/2 -translate-x-1/2 w-40 h-[2px] bg-white mt-2"></div>
            <div className="absolute left-1/2 -translate-x-1/2 w-28 h-[2px] bg-white mt-4"></div>
          </h2>
        </div>

        <button className="mt-8 bg-white text-[#00007A] font-semibold py-3 px-8 rounded-full hover:scale-105 transition-all">
          Register now
        </button>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/your-number-here"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M.057 24l1.687-6.163a11.93 11.93 0 0 1-1.62-6.003C.122 5.373 5.495 0 12.061 0c3.221 0 6.241 1.253 8.495 3.507a11.918 11.918 0 0 1 3.503 8.491c-.003 6.566-5.376 11.939-11.942 11.939a11.955 11.955 0 0 1-5.985-1.598L.057 24zm6.597-3.807c1.742 1.037 3.309 1.661 5.408 1.661 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.418-9.89-9.881-9.893-5.452 0-9.887 4.434-9.889 9.884a9.88 9.88 0 0 0 1.644 5.412l-.999 3.648 3.828-.911zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.201-.242-.58-.487-.502-.669-.51-.173-.007-.372-.009-.57-.009-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        Contact us
      </a>
    </div>
  );
};

export default OpenDoorsBanner;
