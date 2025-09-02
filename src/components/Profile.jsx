export default function Profile() {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-4">
      {/* 🧑 Profile Picture Placeholder */}
      <div className="w-32 h-32 bg-gray-300 rounded-full shadow-md" />

      {/* 🏷️ Name + Role */}
      <div>
        <h1 className="text-xl font-bold text-gray-800">Mutshidzi Madzivhandila</h1>
        <p className="text-sm text-gray-500">BSc Mathematics Focal Area: Applied Mathematics</p>
      </div>

      {/* 🎓 University Info */}
      <div className="text-xs text-gray-400">
        <p>Stellenbosch University</p>
        <p>Student Number: 24999709</p>
        <p>Graduation: Dec 2026</p>
      </div>

      {/* 🔗 Socials (optional) */}
      <div className="flex space-x-4 pt-2">
        <a href="#" className="text-blue-500 hover:underline text-sm">GitHub</a>
        <a href="#" className="text-blue-500 hover:underline text-sm">LinkedIn</a>
      </div>
    </div>
  );
}
