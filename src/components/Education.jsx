import React from "react";

export default function Education() {
  // Matric Results
  const matric = [
    { subject: 'English Home Language', result: '67%' },
    { subject: 'IsiZulu First Additional Language', result: '73%' },
    { subject: 'Mathematics', result: '73%' },
    { subject: 'Life Orientation', result: '75%' },
    { subject: 'Life Sciences', result: '68%' },
    { subject: 'Physical Sciences', result: '55%' },
    { subject: 'Accounting', result: '82%' }
  ];

  // University Results
  const university = [
    { year: '2021', module: 'Mathematics 114', result: '60%' },
    { year: '2021', module: 'Mathematics 144', result: '50%' },
    { year: '2021', module: 'Biology 124', result: '67%' },
    { year: '2021', module: 'Science in Context 178', result: '67%' },
    { year: '2021', module: 'Chemistry 124', result: '50%' },
    { year: '2021', module: 'Chemistry 144', result: '56%' },
    { year: '2022', module: 'Biochemistry 244', result: '64%' },
    { year: '2022', module: 'Biometry 212', result: '57%' },
    { year: '2022', module: 'Computer Science 214', result: '56%' },
    { year: '2022', module: 'Applied Mathematics 144', result: '62%' },
    { year: '2023', module: 'Biochemistry 214', result: '65%' },
    { year: '2023', module: 'Computer Science 114', result: '68%' },
    { year: '2023', module: 'Applied Mathematics 244', result: '51%' },
    { year: '2024', module: 'Biometry 242', result: '93% (Distinction)' },
    { year: '2024', module: 'Physics 114', result: '87% (Distinction)' },
    { year: '2024', module: 'Physiology 214', result: '76% (Distinction)' },
    { year: '2024', module: 'Physiology 244', result: '72%' },
    { year: '2024', module: 'Applied Mathematics 324', result: '70%' },
    { year: '2024', module: 'Applied Mathematics 354', result: '51%' },
    { year: '2024', module: 'Mathematics 214', result: '50%' }
  ];

  return (
    <section id="education" className="py-16 px-6 md:px-20 bg-[#f9f9ff]">
      <h2 className="text-3xl font-bold text-purple-700 mb-10">🎓 Education</h2>

      {/* Matric Results */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">I attennded St Dominics Catholic School for Girls Boksburg</h3>
         <h3 className="text-2xl font-semibold mb-4">From 2016 to 2020</h3>
        <h3 className="text-2xl font-semibold mb-4">Matric Results (2020)</h3>
        <table className="w-full border-collapse text-left shadow-md">
          <thead className="bg-purple-100 text-purple-700">
            <tr>
              <th className="p-3 border">Subject</th>
              <th className="p-3 border">Result</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {matric.map((item, index) => (
              <tr key={index} className="hover:bg-purple-50">
                <td className="p-3 border">{item.subject}</td>
                <td className="p-3 border">{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* University Results */}
      <div>
         <h3 className="text-2xl font-semibold mb-4">Im Currently studying at Stelenbosch University</h3>
          <h3 className="text-2xl font-semibold mb-4">I firstly was enrolled in BSc Biomedical Mathematical Sciences however I have recently changed my Degree to BSc Mathematics (Applied Mathematics)</h3>
        <h3 className="text-2xl font-semibold mb-4">University Results (2021–2024)</h3>
        <table className="w-full border-collapse text-left shadow-md">
          <thead className="bg-purple-100 text-purple-700">
            <tr>
              <th className="p-3 border">Year</th>
              <th className="p-3 border">Module</th>
              <th className="p-3 border">Result</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {university.map((item, index) => (
              <tr key={index} className="hover:bg-purple-50">
                <td className="p-3 border">{item.year}</td>
                <td className="p-3 border">{item.module}</td>
                <td className="p-3 border">{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
