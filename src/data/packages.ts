export interface Package {
    id: string;
    title: string;
    price: string;
    ageRange: string;
    duration: string;
    inclusions: string[];
    badge?: string;
    isPopular?: boolean;
}

export const packages: Package[] = [
    {
        id: 'starter',
        title: 'Play Starter',
        price: '$299',
        ageRange: '3-8 Years',
        duration: '1.5 Hours',
        inclusions: ['1 Host', 'Basic Games', 'Music System', 'Small Prize for B-day Child'],
        badge: 'Good Value'
    },
    {
        id: 'standard',
        title: 'Party Pro',
        price: '$450',
        ageRange: '4-10 Years',
        duration: '2 Hours',
        inclusions: ['2 Hosts', 'Themed Games', 'Music & Disco Lights', 'Prizes for All Kids', 'Gift for B-day Child'],
        badge: 'Most Popular',
        isPopular: true
    },
    {
        id: 'ultimate',
        title: 'Ultimate Bash',
        price: '$699',
        ageRange: 'All Ages',
        duration: '3 Hours',
        inclusions: ['3 Hosts', 'Full Decor Setup', 'Face Painting', 'Balloon Twisting', 'Premium Gift Bags'],
        badge: 'Everything Included'
    }
];
