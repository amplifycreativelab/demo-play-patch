export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 't1',
        name: 'Sarah Jenkins',
        role: 'Mum of 2',
        content: "Absolutely amazing. The team handled everything, and the kids were entertained from start to finish. I actually got to drink my coffee hot!"
    },
    {
        id: 't2',
        name: 'Mike Thompson',
        role: 'Dad of 3',
        content: "Professional, safe, and just great energy. The 'Party Pro' package was worth every cent. Highly recommend for stress-free parties."
    },
    {
        id: 't3',
        name: 'Jessica Lee',
        role: 'Parent',
        content: "My daughter claimed it was the 'best day ever'. The face painting was incredible and the hosts were so good with the shy kids."
    }
];
