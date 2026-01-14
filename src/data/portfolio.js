import nebulaImg from '../assets/nebula.png';
import finPulseImg from '../assets/FinPulse.png';
import vitalityImg from '../assets/Vitality.png';

// For the others, we can stick to the public images we generated, or reuse the assets if suitable.
// Since the user only specified these 3, we'll keep the others pointing to the public folder 
// or maybe reuse these 3 for consistency if the user implies "all images".
// But typically "such as" implies specific assignments.
// We'll trust the specific assignments and leave the others as valid paths (the /images/ ones).

const portfolioData = [
    {
        "id": 1,
        "name": "Nebula",
        "description": "Next-gen cloud infrastructure optimization for high-scale applications.",
        "sector": "B2B SaaS",
        "logo": nebulaImg,
        "website": "#"
    },
    {
        "id": 2,
        "name": "FinPulse",
        "description": "Embedded finance API for vertical SaaS platforms.",
        "sector": "Fintech",
        "logo": finPulseImg,
        "website": "#"
    },
    {
        "id": 3,
        "name": "Vitality",
        "description": "Personalized preventative healthcare plans powered by genomic AI.",
        "sector": "Healthcare",
        "logo": vitalityImg,
        "website": "#"
    },
    {
        "id": 4,
        "name": "Orbit",
        "description": "Satellite imagery analytics for supply chain resilience.",
        "sector": "Deep Tech",
        "logo": nebulaImg,
        "website": "#"
    },
    {
        "id": 5,
        "name": "FlowState",
        "description": "Productivity workspace for creative teams.",
        "sector": "Consumer",
        "logo": finPulseImg,
        "website": "#"
    },
    {
        "id": 6,
        "name": "Vertex",
        "description": "Industrial robotics automation software.",
        "sector": "AI / ML",
        "logo": vitalityImg,
        "website": "#"
    },
    {
        "id": 7,
        "name": "Lumina",
        "description": "Sustainable energy grid management platform.",
        "sector": "Climate Tech",
        "logo": nebulaImg,
        "website": "#"
    },
    {
        "id": 8,
        "name": "Cipher",
        "description": "Post-quantum cryptography solutions for enterprise security.",
        "sector": "Cybersecurity",
        "logo": finPulseImg,
        "website": "#"
    },
    {
        "id": 9,
        "name": "BaseCamp",
        "description": "The operating system for outdoor adventure travel.",
        "sector": "Consumer",
        "logo": vitalityImg,
        "website": "#"
    }
];

export default portfolioData;
