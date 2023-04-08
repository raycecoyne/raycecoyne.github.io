import {
  AcademicCapIcon,
  //CalendarIcon,
  //DownloadIcon,
  //FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
//import heroImage from '../images/header-background.webp';
import heroImage from '../images/background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rayce Coyne',
  description: "Resume site built with Tim Baker's react resume template, forked by rayce",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi there, I'm Rayce`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a leader and builder with a proven track record of driving innovation in technology and finance. 
        After several years working with my friends to build an awesome company, I chose to go back to school so I could work on myself and explore my passions. 
        <br></br>
        <br></br>
        In addition to hitting the books, I spend a lot of time thinking about markets and entrepreneurship. 
        If you want to geek out about option gamma, shill your favorite meme stock, or build the next killer app - hit me up.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time I enjoy <strong className="text-stone-100">hiking</strong> through alpine forests,
        rocking out to <strong className="text-stone-100">musicals</strong>, and thinking about the 
        <strong className="text-stone-100"> global financial system</strong>.
      </p>
    </>
  ),
  actions: [
    /*
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },

    Restore this once contact feature is added
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
    */
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Current Student. Former Chief Technology Officer of Texas Exchange Bank.
  My latest projects have focused on interest rates, cryptography, and fraud detection.`,
  aboutItems: [
    {label: 'Location', text: 'Stanford, CA', Icon: MapIcon},
    //{label: 'Age', text: '29', Icon: CalendarIcon},
    //{label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Being Outside, Brazilian Jiu-Jitsu, Building Computers', Icon: SparklesIcon},
    {label: 'School', text: 'Stanford University', Icon: AcademicCapIcon},
    {label: 'Organizations', text: 'Stanford Blockchain Accelerator', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Business',
    skills: [
      {
        name: 'Banks',
        level: 10,
      },
      {
        name: 'Interest Rates and Derivatives',
        level: 8,
      },
      {
        name: 'Capital Markets',
        level: 7,
      },
    ],
  },
  {
    name: 'Coding',
    skills: [
      {
        name: 'Databases',
        level: 9,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'JavaScript (Node/React)',
        level: 5,
      }
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 5,
      }
    ],
  },
  {
    name: 'Platforms',
    skills: [
      {
        name: 'Bloomberg',
        level: 9,
      },
      {
        name: 'Azure',
        level: 5,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'In Progress',
    location: 'MBA',
    title: 'Stanford University, Graduate School of Business',
    content: <p>
      Interesting Classes: Financial Restructuring, Optimization & Simulation, Cryptography
      <br></br><br></br>
      Head of Research @ Stanford Blockchain Accelerator
      </p>,
  },
  {
    date: 'A while back',
    location: 'Bachelors, Economics ',
    title: 'University of Oklahoma',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2020-2022',
    location: 'Texas Exchange Bank',
    title: 'Chief Technology Officer',
    content: (
      <p>
        Founded the bank's analytics division and led cross-functional teams across engineering, finance, and operations 
        in the turnaround and growth of the portfolio company
      </p>
    ),
  },
  {
    date: '2016-2022',
    location: 'Q Investments',
    title: 'Trading Desk Strategist',
    content: (
      <p>
         Developed trading strategies across sectors and themes including capital structure arbitrage, algorithmic strategies, and multileg options trades.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '',
      text: '',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: '',
      text: '',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Want to work toegether on something?',
  items: [
    {
      type: ContactType.Email,
      text: '',
      href: '',
    },
    {
      type: ContactType.Location,
      text: 'Stanford CA, United States',
      href: 'https://goo.gl/maps/BDSGoFH56ZuyzGxTA',
    },
    {
      type: ContactType.Instagram,
      text: '@rayce.coyne',
      href: 'https://www.instagram.com/rayce.coyne/',
    },
    {
      type: ContactType.Github,
      text: 'raycecoyne',
      href: 'https://github.com/raycecoyne',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/raycecoyne'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/raycecoyne/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/rayce.coyne/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
