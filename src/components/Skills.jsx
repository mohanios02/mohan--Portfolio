export default function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Node.js", level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-6">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-lg shadow-sm text-center">
                <div className="text-primary text-4xl font-bold mb-2">95%</div>
                <h4 className="font-semibold text-gray-800">Communication</h4>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg shadow-sm text-center">
                <div className="text-primary text-4xl font-bold mb-2">90%</div>
                <h4 className="font-semibold text-gray-800">Team Work</h4>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg shadow-sm text-center">
                <div className="text-primary text-4xl font-bold mb-2">85%</div>
                <h4 className="font-semibold text-gray-800">Project Management</h4>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg shadow-sm text-center">
                <div className="text-primary text-4xl font-bold mb-2">80%</div>
                <h4 className="font-semibold text-gray-800">Creativity</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}