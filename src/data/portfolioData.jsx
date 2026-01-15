import logo from '../assets/IeFund.png';
import skillinabox from '../assets/skillinabox.jpg';
import blup from '../assets/blup.jpg';
import prepbytes from '../assets/prepbytes.jpg';
import eventbeep from '../assets/EventBeep.jpg';
import extraaedge from '../assets/Extraaedge.jpg';

const portfolioData = [
    {
        id: 1,
        slug: "trigrexam",
        name: "Trigrexam",
        description: "AI-powered examination and assessment platform transforming how exams are created, conducted, and analyzed.",
        sector: "EdTech",
        logo: null,
        website: "#",
        title: "Kanchan Thakur’s IE Fund Invests ₹50 Lakh in AI EdTech Startup Trigrexam",
        date: "Mar 20, 2019",
        readTime: "4 min read",
        content: (
            <>
                <p className="mb-6">
                    In a significant development for India’s fast-growing edtech ecosystem, <strong className="font-medium text-slate-900">Kanchan Thakur</strong>, founder of IE Fund, has invested <strong className="font-medium text-slate-900">₹50 lakh</strong> in <strong className="font-medium text-slate-900">Trigrexam</strong> (Trigredge Solutions Pvt. Ltd.) through an equity funding round. The investment underscores growing investor confidence in technology-driven education platforms, particularly those leveraging artificial intelligence.
                </p>
                <p className="mb-6">
                    Trigrexam, accessible through Trigrexam.com, is an AI-powered examination and assessment platform focused on transforming the education space. The startup aims to simplify and modernize the way exams are created, conducted, analyzed, and managed using advanced AI and data-driven insights. With this funding, Trigrexam plans to enhance its technology infrastructure, expand its product offerings, and strengthen its market presence across India.
                </p>
                <p className="mb-6">
                    Founded by Manjeet Kumar Mehta and Dheeraj Kumar, alumni of IIT Roorkee, Trigrexam brings together strong academic and technical expertise. The founders envision Trigrexam as a one-stop solution for exams and assessments by 2030, serving schools, colleges, coaching institutes, corporates, and government organizations.
                </p>
                <p className="mb-6">
                    IE Fund’s backing provides not only capital but also strategic guidance and industry connections to help the startup scale sustainably.
                </p>
            </>
        )
    },
    {
        id: 2,
        slug: "skillinabox",
        name: "Skillinabox",
        description: "Skillinabox is a first-of-its-kind EdTech startup transforming STEM education by helping learners bring “Learning to Life” through IoT, Security, and Sustainability. The platform delivers customized DIY kits with raw materials, manuals, and video tutorials for hands-on learning across urban and rural India.",
        sector: "EdTech",
        logo: skillinabox,
        website: "#"
    },
    {
        id: 3,
        slug: "blup",
        name: "Blup",
        description: "Blup is a platform enabling developers, designers, and founders to build production-ready mobile apps with a 10X reduction in time, cost, and bandwidth.",
        sector: "DevTools",
        logo: blup,
        website: "#"
    },
    {
        id: 4,
        slug: "prepbytes",
        name: "PrepBytes",
        description: "PrepBytes focuses on making college students placement-ready in IT/software roles by strengthening computer science fundamentals, coding, and problem-solving through mentorship-driven programs.",
        sector: "EdTech",
        logo: prepbytes,
        website: "#"
    },
    {
        id: 5,
        slug: "eventbeep",
        name: "EventBeep",
        description: "EventBeep is a digital platform enabling college students to discover, attend, and engage with events and activities across campuses nationwide.",
        sector: "Social Platform",
        logo: eventbeep,
        website: "#"
    },
    {
        id: 6,
        slug: "extraaedge",
        name: "ExtraaEdge",
        description: "ExtraaEdge is an admissions and marketing automation CRM for the education industry, helping institutions grow admissions efficiently by transforming counsellors into high-performing sales teams.",
        sector: "B2B SaaS",
        logo: extraaedge,
        website: "#"
    }
];

export default portfolioData;
