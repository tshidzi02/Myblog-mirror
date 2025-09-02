import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Technical Support Intern – FAMSA",
      year: "2021",
      description:
        "Assisted staff with technology-related issues and upgraded internal systems to improve performance and reliability."
    },
    {
      title: "Web Development Intern – Masiphumelele Library",
      year: "2022",
      description:
        "Built a local library website using HTML, CSS, and basic JavaScript. Helped digitize resources and improve community access."
    },
    {
      title: "Volunteering – Animal Welfare Shelter",
      year: "2023",
      description:
        "Organized a donation drive and set up social media pages to raise awareness for abandoned animals and increase adoptions."
    }
  ];

  return (
    <section id="experience" className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-purple-700 mb-10">💼 Experience</h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
            <p className="text-sm text-purple-600 font-medium mb-2">{exp.year}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
