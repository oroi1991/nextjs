import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: '포트폴리오 웹사이트',
    description: 'Next.js와 Tailwind CSS를 사용한 개인 포트폴리오 웹사이트',
    longDescription: '이 프로젝트는 Next.js와 Tailwind CSS를 사용하여 제작된 개인 포트폴리오 웹사이트입니다. 반응형 디자인을 적용하여 모든 디바이스에서 최적의 사용자 경험을 제공합니다.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/images/portfolio.jpg',
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://your-portfolio.com',
    features: [
      '반응형 디자인',
      '다크 모드 지원',
      '프로젝트 상세 페이지',
      'SEO 최적화',
      '성능 최적화'
    ]
  },
  {
    id: 'ecommerce',
    title: '이커머스 플랫폼',
    description: 'React와 Node.js를 사용한 풀스택 이커머스 플랫폼',
    longDescription: '이 프로젝트는 React와 Node.js를 사용하여 제작된 풀스택 이커머스 플랫폼입니다. 사용자 인증, 상품 관리, 결제 시스템 등 다양한 기능을 구현했습니다.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    imageUrl: '/images/ecommerce.jpg',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://your-ecommerce.com',
    features: [
      '사용자 인증',
      '상품 검색 및 필터링',
      '장바구니 기능',
      '결제 시스템 통합',
      '관리자 대시보드'
    ]
  }
]; 