export default function SkillsSection() {
  const skills = [
    {
      category: 'Frontend',
      technologies: 'React, Next.js, TypeScript'
    },
    {
      category: 'Backend',
      technologies: 'Node.js, Express'
    },
    {
      category: 'Database',
      technologies: 'MongoDB, MySQL'
    },
    {
      category: 'Tools',
      technologies: 'Git, Docker, AWS'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md text-center">
              <h3 className="font-bold mb-2">{skill.category}</h3>
              <p className="text-gray-600">{skill.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 