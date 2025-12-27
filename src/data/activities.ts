import type { ImageMetadata } from 'astro';
import sensoryImg from '../assets/images/sensory-play-real.webp';
import craftImg from '../assets/images/creative-craft-real.webp';
import discoImg from '../assets/images/mini-disco-real.webp';

export interface Activity {
    id: string;
    title: string;
    description: string;
    ageRange: string;
    image: ImageMetadata;
}

export const activities: Activity[] = [
    {
        id: 'sensory',
        title: 'Sensory Play',
        description: 'Safe, tactile fun with slime, sand, and foam. Perfect for little explorers.',
        ageRange: '1-3 Years',
        image: sensoryImg
    },
    {
        id: 'craft',
        title: 'Creative Craft',
        description: 'Painting, building, and making a mess (so you don\'t have to clean it up!).',
        ageRange: '4-8 Years',
        image: craftImg
    },
    {
        id: 'disco',
        title: 'Mini Disco',
        description: 'Dance games, bubbles, and kid-friendly hits to get everyone moving.',
        ageRange: '3-10 Years',
        image: discoImg
    }
];
