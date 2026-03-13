export interface AppData {
  id: string;
  name: string;
  developer: string;
  version: string;
  size: string;
  androidVersion: string;
  category: string;
  rating: number;
  downloads: string;
  icon: string;
  screenshots: string[];
  description: string;
  features: string[];
  updatedAt: string;
  isFeatured: boolean;
  isTrending: boolean;
}

export const categories = [
  { id: 'games', name: 'Games', icon: 'Gamepad2' },
  { id: 'social', name: 'Social', icon: 'MessageCircle' },
  { id: 'tools', name: 'Tools', icon: 'Wrench' },
  { id: 'video', name: 'Video Players & Editors', icon: 'Video' },
  { id: 'education', name: 'Education', icon: 'BookOpen' },
];

export const apps: AppData[] = [
  {
    id: 'whatsapp-messenger',
    name: 'WhatsApp Messenger',
    developer: 'WhatsApp LLC',
    version: '2.24.5.76',
    size: '45 MB',
    androidVersion: '5.0 and up',
    category: 'social',
    rating: 4.8,
    downloads: '5B+',
    icon: 'https://picsum.photos/seed/whatsapp/150/150',
    screenshots: [
      'https://picsum.photos/seed/wa1/300/600',
      'https://picsum.photos/seed/wa2/300/600',
      'https://picsum.photos/seed/wa3/300/600',
    ],
    description: 'WhatsApp from Meta is a FREE messaging and video calling app. It\'s used by over 2B people in more than 180 countries. It\'s simple, reliable, and private, so you can easily keep in touch with your friends and family.',
    features: [
      'Private messaging across the world',
      'Simple and secure connections, right away',
      'High quality voice and video calls',
      'Group chats to keep you in contact',
      'Stay connected in real time'
    ],
    updatedAt: '2026-03-10',
    isFeatured: true,
    isTrending: true,
  },
  {
    id: 'subway-surfers',
    name: 'Subway Surfers',
    developer: 'SYBO Games',
    version: '3.25.1',
    size: '135 MB',
    androidVersion: '6.0 and up',
    category: 'games',
    rating: 4.6,
    downloads: '1B+',
    icon: 'https://picsum.photos/seed/subway/150/150',
    screenshots: [
      'https://picsum.photos/seed/ss1/300/600',
      'https://picsum.photos/seed/ss2/300/600',
      'https://picsum.photos/seed/ss3/300/600',
    ],
    description: 'DASH as fast as you can! DODGE the oncoming trains! Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog.',
    features: [
      'Grind trains with your cool crew!',
      'Colorful and vivid HD graphics!',
      'Hoverboard Surfing!',
      'Paint powered jetpack!',
      'Lightning fast swipe acrobatics!'
    ],
    updatedAt: '2026-03-12',
    isFeatured: true,
    isTrending: true,
  },
  {
    id: 'capcut',
    name: 'CapCut - Video Editor',
    developer: 'Bytedance Pte. Ltd.',
    version: '11.5.0',
    size: '180 MB',
    androidVersion: '5.0 and up',
    category: 'video',
    rating: 4.7,
    downloads: '500M+',
    icon: 'https://picsum.photos/seed/capcut/150/150',
    screenshots: [
      'https://picsum.photos/seed/cc1/300/600',
      'https://picsum.photos/seed/cc2/300/600',
    ],
    description: 'CapCut is the official free Video Editor and Video Maker with Music for TikTok that is versatile and easy-to-use.',
    features: [
      'Basic video editing',
      'Advanced video editor',
      'Intelligent features',
      'Text & Stickers',
      'Trending Effects & Filters'
    ],
    updatedAt: '2026-03-08',
    isFeatured: false,
    isTrending: true,
  },
  {
    id: 'duolingo',
    name: 'Duolingo: Language Lessons',
    developer: 'Duolingo',
    version: '5.145.4',
    size: '55 MB',
    androidVersion: '7.0 and up',
    category: 'education',
    rating: 4.7,
    downloads: '100M+',
    icon: 'https://picsum.photos/seed/duolingo/150/150',
    screenshots: [
      'https://picsum.photos/seed/dl1/300/600',
      'https://picsum.photos/seed/dl2/300/600',
    ],
    description: 'Learn a new language with the world\'s most-downloaded education app! Duolingo is the fun, free app for learning 40+ languages through quick, bite-sized lessons.',
    features: [
      'Duolingo is fun and effective.',
      'Duolingo works.',
      'Track your progress.',
      'Join the community.',
      'Every language course is free.'
    ],
    updatedAt: '2026-03-05',
    isFeatured: true,
    isTrending: false,
  },
  {
    id: 'zarchiver',
    name: 'ZArchiver',
    developer: 'ZDevs',
    version: '1.0.8',
    size: '5 MB',
    androidVersion: '4.0 and up',
    category: 'tools',
    rating: 4.8,
    downloads: '100M+',
    icon: 'https://picsum.photos/seed/zarchiver/150/150',
    screenshots: [
      'https://picsum.photos/seed/za1/300/600',
      'https://picsum.photos/seed/za2/300/600',
    ],
    description: 'ZArchiver - is a program for archive management. It has a simple and functional interface. The app doesn\'t have permission to access the internet, so cannot transmit any information to other services or persons.',
    features: [
      'Create following archive types: 7z (7zip), zip, bzip2 (bz2), gzip (gz), XZ, lz4, tar, zst (zstd);',
      'Decompress following archive types: 7z (7zip), zip, rar, rar5, bzip2, gzip, XZ, iso, tar, arj, cab, lzh, lha, lzma, xar, tgz, tbz, Z, deb, rpm, zipx, mtz, chm, dmg, cpio, cramfs, img (fat, ntfs, ubf), wim, ecm, lzip, zst (zstd), egg, alz;',
      'View archive contents',
      'Create and decompress password-protected archives',
      'Edit archives: add/remove files to/from the archive (zip, 7zip, tar, apk, mtz)'
    ],
    updatedAt: '2026-02-28',
    isFeatured: false,
    isTrending: false,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    developer: 'Instagram',
    version: '322.0.0.35.109',
    size: '58 MB',
    androidVersion: '6.0 and up',
    category: 'social',
    rating: 4.4,
    downloads: '1B+',
    icon: 'https://picsum.photos/seed/instagram/150/150',
    screenshots: [
      'https://picsum.photos/seed/ig1/300/600',
      'https://picsum.photos/seed/ig2/300/600',
    ],
    description: 'Bringing you closer to the people and things you love. — Instagram from Meta. Connect with friends, share what you\'re up to, or see what\'s new from others all over the world.',
    features: [
      'Watch & create fun short videos on Instagram Reels',
      'Add photos and videos to your story',
      'Message your friends in Direct',
      'Post photos and videos to your feed'
    ],
    updatedAt: '2026-03-11',
    isFeatured: false,
    isTrending: true,
  }
];

export const blogPosts = [
  {
    id: 'how-to-install-xapk',
    title: 'How to Install XAPK / APKs Files on Android',
    excerpt: 'A complete guide on how to easily install XAPK and split APKs files on your Android device without any errors.',
    date: 'March 10, 2026',
    image: 'https://picsum.photos/seed/blog1/600/400',
  },
  {
    id: 'top-10-android-games-2026',
    title: 'Top 10 Best Android Games of 2026',
    excerpt: 'Discover the most amazing and graphically intense Android games released this year that you must play.',
    date: 'March 5, 2026',
    image: 'https://picsum.photos/seed/blog2/600/400',
  },
  {
    id: 'fix-app-not-installed-error',
    title: 'How to Fix "App Not Installed" Error',
    excerpt: 'Running into the annoying "App Not Installed" error? Here are 5 proven methods to fix it quickly.',
    date: 'February 28, 2026',
    image: 'https://picsum.photos/seed/blog3/600/400',
  }
];
