import {
  //AcademicCapIcon,
  //CalendarIcon,
  //DownloadIcon,
  //FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  //SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
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
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
//import heroImage = '/images/header-background.webp';
const heroImage = '/images/background.jpg';
const porfolioImage1 = '/images/portfolio/hedgehog.png';
const porfolioImage2 = '/images/portfolio/portfolio-2.jpg';
const porfolioImage3 = '/images/portfolio/portfolio-3.jpg';
const porfolioImage4 = '/images/portfolio/portfolio-4.jpg';
const porfolioImage5 = '/images/portfolio/portfolio-5.jpg';
const porfolioImage6 = '/images/portfolio/portfolio-6.jpg';
const porfolioImage7 = '/images/portfolio/portfolio-7.jpg';
const porfolioImage8 = '/images/portfolio/portfolio-8.jpg';
const porfolioImage9 = '/images/portfolio/portfolio-9.jpg';
const porfolioImage10 = '/images/portfolio/portfolio-10.jpg';
const porfolioImage11 = '/images/portfolio/portfolio-11.jpg';
const profilepic = '/images/profilepic.jpg';
const testimonialImage = '/images/testimonial.webp';


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
  name: `Hi, I'm Rayce`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I believe in making the US financial system more resilient with creative, high-quality software. I founded{' '}
      <a 
        className="font-bold text-inherit no-underline hover:text-inherit" 
        href="https://www.hedgehog.tech"
        rel="noopener noreferrer" 
        target="_blank"
      >
        Hedgehog
      </a>{' '}
         to bring wall street technology to main street banks and help them better serve their customers. 
        <br></br>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time I enjoy <strong className="text-stone-100">hiking</strong>,
        rocking out to <strong className="text-stone-100">musicals</strong>, and building 
        <strong className="text-stone-100"> computers</strong>.
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
  description: `Founder and proud dog mom. My latest research is focused on interest rates and the US banking system, 
  and I am fortunate enough to be working on this with two of my best friends. `,
  aboutItems: [
    {label: 'Location', text: 'Stanford, CA', Icon: MapIcon},
    //{label: 'Age', text: '29', Icon: CalendarIcon},
    //{label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    //{label: 'Interests', text: 'Being outside and playing piano', Icon: SparklesIcon},
    //{label: 'School', text: 'Stanford University', Icon: AcademicCapIcon},
    //{label: 'Organizations', text: 'Stanford Blockchain Accelerator', Icon: OfficeBuildingIcon},
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
    title: 'Hedgehog',
    description: 'Preventing bank failures with interest rate forecasting and analytics',
    url: 'https://www.hedgehogcompliance.com',
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
    content: <p></p>,
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
    date: '2023',
    location: 'Hedgehog',
    title: 'Founder',
    content: (
      <p>
        Hedgehog is committed to preventing bank failures with fully automated interest rate risk (IRR) software any bank can use. 
        Our modeling software integrates with bank policies and data to deliver tailored, accurate insights with complete documentation in seconds.
      </p>
    ),
  },
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
  {label: 'Hedgehog', Icon: OfficeBuildingIcon, href: 'https://hedgehog.tech'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/raycecoyne'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/raycecoyne/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/rayce.coyne/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
