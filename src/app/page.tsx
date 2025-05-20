import ProfileSection from '@/components/ProfileSection';
import IntroduceSection from '@/components/IntroduceSection';
import TechSkillSection from '@/components/TechSkillSection';
import { UserIcon, EnvelopeIcon, DevicePhoneMobileIcon, LinkIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main
      className="min-h-screen pb-20 pt-16 flex flex-col items-center"
      style={{
        background:
          'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 50%, #d4fc79 100%)',
        minHeight: '100vh',
      }}
    >
      <ProfileSection />
      <IntroduceSection />
      <TechSkillSection />
    </main>
  );
}
