import { Track } from '@/components/AudioPlayer/AudioPlayer';

export const portfolioTracks: Track[] = [
  {
    id: 'track-001',
    name: 'Cali Afro Night',
    artist: 'Original Production',
    genre: 'Afrobeat',
    bpm: 94,
    key: 'Am',
    duration: 185,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // PLACEHOLDER
  },
  {
    id: 'track-002',
    name: 'Reggaeton Flow',
    artist: 'Original Production',
    genre: 'Reggaeton',
    bpm: 92,
    key: 'Gm',
    duration: 210,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // PLACEHOLDER
  },
  {
    id: 'track-003',
    name: 'Urban Trap Vibes',
    artist: 'Original Production',
    genre: 'Trap',
    bpm: 140,
    key: 'Cm',
    duration: 195,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', // PLACEHOLDER
  },
  {
    id: 'track-004',
    name: 'Salsa Fusión',
    artist: 'Original Production',
    genre: 'Salsa / Afro',
    bpm: 88,
    key: 'F',
    duration: 220,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', // PLACEHOLDER
  },
  {
    id: 'track-005',
    name: 'Cinematic Strings',
    artist: 'Original Production',
    genre: 'Orquesta / Score',
    bpm: 110,
    key: 'D',
    duration: 240,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', // PLACEHOLDER
  },
];

export interface Product {
  id: string;
  type: 'beat' | 'sample-pack';
  slug: string;
  name: string;
  genre: string;
  bpm?: number;
  key?: string;
  mood?: string[];
  description: string;
  artwork?: string;
  audioPreview: string;
  price: number;
  stripePriceId?: string;
  tags: string[];
  featured: boolean;
  createdAt: string;
}

export const beats: Product[] = [
  {
    id: 'beat-001',
    type: 'beat',
    slug: 'cali-afro-night',
    name: 'Cali Afro Night',
    genre: 'Afrobeat',
    bpm: 94,
    key: 'Am',
    mood: ['dark', 'tropical'],
    description: 'Beat afrobeat con percusiones orgánicas y melodías de viento.',
    audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    price: 29,
    tags: ['cali', 'afro', 'oscuro'],
    featured: true,
    createdAt: '2025-06-01',
  },
  {
    id: 'beat-002',
    type: 'beat',
    slug: 'reggaeton-flow',
    name: 'Reggaeton Flow',
    genre: 'Reggaeton',
    bpm: 92,
    key: 'Gm',
    mood: ['hype', 'tropical'],
    description: 'Reggaeton moderno con synths pegajosos y percusión digital.',
    audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    price: 29,
    tags: ['reggaeton', 'urbano'],
    featured: true,
    createdAt: '2025-06-01',
  },
  {
    id: 'beat-003',
    type: 'beat',
    slug: 'urban-trap-vibes',
    name: 'Urban Trap Vibes',
    genre: 'Trap',
    bpm: 140,
    key: 'Cm',
    mood: ['dark', 'hype'],
    description: 'Trap urbano con 808s profundos y hi-hats crispy.',
    audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    price: 34,
    tags: ['trap', 'urbano', 'dark'],
    featured: false,
    createdAt: '2025-05-28',
  },
];

export const samplePacks: Product[] = [
  {
    id: 'pack-001',
    type: 'sample-pack',
    slug: 'cali-roots-pack',
    name: 'Cali Roots Pack',
    genre: 'Afrobeat / Salsa',
    description: '47 samples de percusión y melodías con ADN afrocolombiano.',
    audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    price: 39,
    tags: ['cali', 'afro', 'percussion'],
    featured: true,
    createdAt: '2025-06-01',
  },
  {
    id: 'pack-002',
    type: 'sample-pack',
    slug: 'cinematic-strings-pack',
    name: 'Cinematic Strings Pack',
    genre: 'Orquesta / Score',
    description: '32 muestras de cuerdas orquestales grabadas profesionalmente.',
    audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    price: 49,
    tags: ['cinematic', 'orquesta', 'strings'],
    featured: false,
    createdAt: '2025-05-25',
  },
];

export const credits = {
  music: [
    { artist: 'Juanes', role: 'Producción musical' },
    { artist: 'Carlos Vives', role: 'Producción y arreglos' },
    { artist: 'Gilberto Santa Rosa', role: 'Producción musical' },
    { artist: 'Café Tacvba', role: 'Producción y grabación' },
    { artist: 'Andrés Cepeda', role: 'Arreglos' },
    { artist: 'Dawer x Damper', role: 'Producción urbana' },
  ],
  cinema: [
    { title: 'El Chapo', platform: 'Netflix', role: 'Música original para serie' },
    { title: 'Rosario Tijeras', platform: 'RCN', role: 'Sound design + producción' },
    { title: 'En Coma', platform: 'Film colombiano', role: 'Score musical' },
    { title: 'Campañas publicitarias', platform: 'Múltiples', role: 'Sound design + dirección creativa' },
  ],
};
