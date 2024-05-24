import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  komikult,
  python,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  aws,
  R,
  mysql,
  tableau,
  pytorch,
  flask,
  mongodb,
  powerbi,
  datascience,
  statistics,
  datavizualization,
  western,
  mkbookkeeping,
  uiuc,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Data Science',
    icon: datascience,
  },
  {
    title: 'Statistics',
    icon: statistics,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Data Vizualization',
    icon: datavizualization,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'R',
    icon: R,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'tableau',
    icon: tableau,
  },
  {
    name: 'powerbi',
    icon: powerbi,
  },
  {
    name: 'pytorch',
    icon: pytorch,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'aws',
    icon: aws,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: "Bachelor's of Statistics",
    company_name: 'Western University',
    icon: western,
    iconBg: '#333333',
    date: 'Sep 2017 - May 2021',
  },
  {
    title: 'Software Developer Intern',
    company_name: 'Western University',
    icon: western,
    iconBg: '#333333',
    date: 'Apr 2019 - Aug 2019',
  },
  {
    title: 'Software Developer Intern',
    company_name: 'MK Bookkeeping and Tax Services',
    icon: mkbookkeeping,
    iconBg: '#333333',
    date: 'Apr 2020 - Aug 2020',
  },
  {
    title: "Master's of Computer Science in Data Science",
    company_name: 'University of Illinois Urbana Champaign',
    icon: uiuc,
    iconBg: '#333333',
    date: 'May 2023 - Dec 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Movie Recommender',
    description: 'A comic characters list app that displays Marvel characters.',
    // tags: [
    //   {
    //     name: 'react',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'mongodb',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'tailwind',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: komikult,
    repo: 'https://github.com/AmmarAlzureiqi/Movie-Recommender?tab=readme-ov-file',
    demo: 'https://movie-recommender-aa.streamlit.app/',
  },
  {
    id: 'project-2',
    name: 'Mood of Music',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    // tags: [
    //   {
    //     name: 'react',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'restapi',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'scss',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: leaderboard,
    repo: 'https://github.com/AmmarAlzureiqi/Mood-of-Music',
    demo: 'https://github.com/AmmarAlzureiqi/Mood-of-Music',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
