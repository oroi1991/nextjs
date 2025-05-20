import Image from 'next/image';
import { UserIcon, EnvelopeIcon, DevicePhoneMobileIcon, LinkIcon } from '@heroicons/react/24/outline';

const sectionTitleClass = "font-extrabold text-2xl md:text-3xl mb-2 text-blue-900 tracking-tight flex items-center gap-2";

export default function ProfileSection() {
  return (
    <section className="backdrop-blur-xl bg-white/50 shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center w-[800px] mx-auto mt-16 border border-white/30">
      {/* 프로필 사진 */}
      <div className="flex-shrink-0">
        <div className="w-40 h-40 rounded-full bg-neutral-200 flex items-center justify-center overflow-hidden border border-white/40 shadow-md">
          <Image 
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=320&h=320&facepad=2&q=80"
            alt="재밌게 생긴 남자 프로필"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      {/* 정보 */}
      <div className="flex-1 w-full">
        <div className="mb-6">
          <div className={sectionTitleClass}><UserIcon className="w-7 h-7 text-blue-400" />_I AM</div>
          <div className="mb-1 text-lg text-blue-900/90">이름 : 바이브</div>
          <div className="mb-1 text-lg text-blue-900/90">포지션 : 개발자</div>
        </div>
        <div className="mb-6">
          <div className={sectionTitleClass}><EnvelopeIcon className="w-7 h-7 text-blue-400" />_Contact</div>
          <div className="text-blue-900/80 flex items-center gap-2">이메일 : vibe@gmail.com</div>
          <div className="text-blue-900/80 flex items-center gap-2">핸드폰 : 010-4321-5678</div>
        </div>
        <div>
          <div className={sectionTitleClass}><LinkIcon className="w-7 h-7 text-blue-400" />_Channel</div>
          <div className="flex flex-col gap-3 mt-2">
            <input type="text" className="border border-white/40 bg-white/40 placeholder:text-blue-900/40 rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-200 transition shadow-sm" placeholder="SNS 주소" />
            <input type="text" className="border border-white/40 bg-white/40 placeholder:text-blue-900/40 rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-200 transition shadow-sm" placeholder="GitHub 주소" />
          </div>
        </div>
      </div>
    </section>
  );
} 