import React from "react";

function StatsSection() {
  const stats = [
    { value: "72", label: "Launched projects & startups" },
    { value: "€3,000,000", label: "Total Sales" },
    { value: "€650,000", label: "Total Raised Investments" },
    { value: "€27,000", label: "Sales/student (average)" },
    { value: "20", label: "New ideas in progress at the moment" },
    { value: "9", label: "MVPs in progress" },
    { value: "20", label: "Growing Sales" },
    { value: "17", label: "Profitable startups" },
  ];

  return (
    <section className="bg-teal-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-1 bg-white mx-auto mb-4"></div>
        <p className="text-lg mb-6">
          Data collected from January 2020 – December 2020
        </p>
      </div>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-6 rounded-md shadow-md text-center"
          >
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
