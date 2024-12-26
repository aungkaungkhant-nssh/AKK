import Pf from '@/public/images/pf.png'
import ToeTet from '@/public/images/toetet.png'
import Insider from '@/public/images/insider.png';
import DramLab from '@/public/images/dreamlab.png';
import Ultimate from '@/public/images/ultimate.jpeg';
import ToeTetSS from '@/public/images/totetss.png';
import InsiderSS from '@/public/images/insiderss.png';
import DreamLavSS from '@/public/images/dreamlabss.png';
import InstaPostSS from '@/public/images/instapostss.jpg';
import AkkSportWearSS from '@/public/images/akksportwearss.jpg';
import SproutScribbleSS from '@/public/images/sproutscribless.png';
import UltimateSS from '@/public/images/ultimatess.png';
import Ucsl from '@/public/images/ucslss.png'

export const projectLists = [
    {
        id: 1,
        title: 'AKK Portfolio',
        subTitle: "Explore my portfolio to see projects that showcase my skills.",
        desc: "Lorem ipsum",
        logo: Pf.src,
        githubLink: "https://github.com/aungkaungkhant-nssh/AKK",
        demoLink: "https://akk-portfolio.vercel.app/",
        techStacks: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
        responsibilities: "Developed and designed the AKK Portfolio from scratch, utilizing Next.js and Tailwind CSS to create a responsive and visually appealing website. I handled the full development process, from building the frontend with TypeScript to deploying the site on Vercel, ensuring a seamless user experience across devices."
    },
    {
        id: 2,
        title: 'Toe Tet',
        subTitle: "Toe Tet: Empowering Learners with Accessible Online Education",
        desc: "Toe Tet is an e-learning platform offering courses in business, marketing, programming, and more. With a user-friendly interface and expert instructors, it aims to make online learning accessible and effective.",
        logo: ToeTet.src,
        photo: ToeTetSS.src,
        githubLink: null,
        demoLink: "https://www.toetet.com/home",
        techStacks: ["Nest Js", "Postgresql", "TypeOrm"],
        responsibilities: "Designed and developed the backend architecture using Node.js, Nest.js, and PostgreSQL. Integrated automation tools to ensure seamless communication and workflow between the frontend team and designers."
    },
    {
        id: 3,
        title: 'Insider Note',
        subTitle: "Empowering Communities with Collaborative Knowledge Sharing and Messaging",
        desc: "Insider Note offers comprehensive summaries and insights from a diverse range of non-fiction books, including subjects like marketing, business, psychology, and personal development. By providing clear and concise overviews, the platform enables users to grasp key concepts and actionable takeaways without the need to read the entire book. This approach caters to individuals seeking to expand their knowledge efficiently and effectively.",
        logo: Insider.src,
        photo: InsiderSS.src,
        githubLink: null,
        techStacks: ["Nest Js", "Postgresql", "TypeOrm"],
        responsibilities: "Engineered the backend system to efficiently handle large-scale data processing and API integrations using Nest.js and PostgreSQL. Collaborated closely with the frontend and design teams to create a seamless user experience."
    },
    {
        id: 4,
        title: 'Dream Lab',
        subTitle: "Your Gateway to Key Insights from Top Development Books in Myanmar",
        desc: "DreamLab is an online platform that offers concise summaries of personal, professional, and business development books in the Myanmar language. It provides users with quick access to key insights from renowned books, enabling them to enhance their knowledge efficiently. The platform is accessible online, allowing users to read and learn at their convenience.",
        logo: DramLab.src,
        photo: DreamLavSS.src,
        githubLink: null,
        demoLink: "https://dreamlab.news/",
        techStacks: ["Nest Js", "Postgresql", "TypeOrm"],
        responsibilities: "Built and maintained a robust backend framework to support DreamLab's functionality, leveraging Nest.js and PostgreSQL. Ensured smooth integration of services by automating workflows and enhancing backend performance."
    },
    {
        id: 5,
        title: 'Insta Posts',
        subTitle: "Where connections thrive, stories are shared, and communities grow.",
        desc: "Connect, share, and engage on [Insta Post], the ultimate social media platform designed to bring people together. Whether you're sharing moments, exploring new interests, or building your community, [Insta Posts] makes it easy to stay connected with what matters most.",
        logo: DramLab.src,
        photo: InstaPostSS.src,
        githubLink: "https://github.com/aungkaungkhant-nssh/SocialMedia",
        demoLink: null,
        techStacks: ["React Js", "MUI", "Express Js", "MongoDB"],
        responsibilities: "I was responsible for the end-to-end development of the Insta Post platform, including both frontend and backend architecture, as well as database management. I ensured the platform's scalability, optimized performance, and integrated all features to provide a smooth user experience."
    },
    {
        id: 6,
        title: 'AKK Sport Wear',
        subTitle: "Gear Up for the Game with Premium Football Equipment",
        desc: "Lorem ipsum",
        logo: DramLab.src,
        photo: AkkSportWearSS.src,
        githubLink: "https://github.com/aungkaungkhant-nssh/Football-equipment",
        demoLink: null,
        techStacks: ["React Js", "Tailwind Css", "Express Js", "MongoDB", "Stripe", "Web Hook"],
        responsibilities: "Led the full-stack development of AKK Sport Wear, overseeing both frontend and backend architecture. I handled the integration of payment systems using Stripe, designed the UI with React.js and Tailwind CSS, and managed the database with MongoDB. Additionally, I implemented webhooks to automate various processes, ensuring a seamless and efficient user experience."
    },

    {
        id: 7,
        title: 'Sprout Scribble',
        subTitle: "Ultimate Next Js project for e-commerce",
        desc: "Lorem ipsum",
        logo: DramLab.src,
        photo: SproutScribbleSS.src,
        githubLink: "https://github.com/aungkaungkhant-nssh/Sprout-Scribble",
        demoLink: null,
        techStacks: ["Next Js", "Tailwind Css", "Zustand", "Zod", "Drizzle ORM", "Neon Database", "Stripe"],
        responsibilities: "Managed the full-stack development of the Sprout Scribble e-commerce platform. I utilized Next.js for building dynamic web pages, integrated Stripe for payment processing, and implemented state management with Zustand. I also worked with Zod for input validation and leveraged Drizzle ORM with Neon Database to ensure smooth data handling and efficient storage."
    },

    {
        id: 8,
        title: 'UCSL Volting System',
        subTitle: "Empowering Students to Choose Their King and Queen through a Fair Voting System",
        desc: "Our university voting system is designed to provide a seamless and transparent process for selecting the king and queen. By leveraging an easy-to-use digital platform, students can cast their votes in real-time, ensuring that every voice is heard. The system promotes fairness, security, and efficiency, allowing participants to engage in the election with confidence. With this solution, we aim to create a fun and democratic way for students to elect their university leaders.",
        logo: DramLab.src,
        photo: Ucsl.src,
        githubLink: "https://github.com/aungkaungkhant-nssh/UCSLVoltingSystem",
        techStacks: ["React Js", "MUI", "Express Js", "MongoDB"],
        responsibilities: "Developed the UCSL Volting System from end-to-end, handling both frontend and backend development. I used React.js and MUI for the user-friendly interface, and Express.js with MongoDB for backend functionality to securely process votes and manage user data."
    },

    {
        id: 9,
        title: 'Ultimate Life Style',
        subTitle: "Health Care System",
        desc: "Our platform is designed to provide a seamless and transparent process for managing health-related information. With an easy-to-use digital interface, users can track and manage their health, ensuring a better lifestyle. The system promotes security, privacy, and efficiency, offering valuable insights to help users lead healthier lives.",
        logo: Ultimate.src,
        photo: UltimateSS.src,
        githubLink: null,
        demoLink: "https://www.ultimatelifestyle.app/",
        techStacks: ["Next Js", "Tailwind CSS", "Express Js", "MongoDB"],
        responsibilities: "I am responsible for the backend development of the Ultimate Life Style platform, utilizing Express.js and MongoDB for efficient data management and API development. My role includes designing and implementing the server-side architecture, ensuring data security, and optimizing backend performance to support a smooth user experience."
    }
]