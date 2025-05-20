import { UserIcon } from '@heroicons/react/24/outline';

export default function IntroduceSection() {
  return (
    <section className="backdrop-blur-xl bg-white/50 shadow-2xl rounded-3xl p-10 w-[800px] mx-auto mt-10 border border-white/30">
      <div className="font-extrabold text-2xl md:text-3xl mb-4 text-blue-900 tracking-tight flex items-center gap-2">
        <UserIcon className="w-7 h-7 text-blue-400" />Introduce
      </div>
      <div className="rounded-xl p-5 text-blue-900/90 bg-white/30 text-lg leading-relaxed">
        안녕하세요! 저는 3년차 개발자 타이몬입니다. 개발뿐만 아니라 디자인에도 깊은 관심을 가지고 있어, 더 아름답고 즐거운 경험을 만드는 데 열정을 쏟고 있습니다. 늘 새로운 시도를 즐기며, 유쾌하고 재밌는 사람이 되기 위해 노력합니다.
      </div>
    </section>
  );
} 