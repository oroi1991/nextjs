import { CodeBracketIcon } from '@heroicons/react/24/outline';

const skills = [
  'JS', 'TS', 'React', 'Tailwindcss', 'Premierepro'
];

export default function TechSkillSection() {
  return (
    <section className="backdrop-blur-xl bg-white/50 shadow-2xl rounded-3xl p-10 w-[800px] mx-auto mt-10 border border-white/30">
      <div className="font-extrabold text-2xl md:text-3xl mb-4 text-blue-900 tracking-tight flex items-center gap-2">
        <CodeBracketIcon className="w-7 h-7 text-blue-400" />Tech Skill
      </div>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="w-32 text-center px-5 py-2 rounded-full border border-white/40 bg-white/40 text-blue-900/90 font-semibold text-base shadow-sm hover:bg-blue-100/40 transition backdrop-blur"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
} 