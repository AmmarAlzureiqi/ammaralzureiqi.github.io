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
  postgresql,
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
  moodofmusic,
  aistudypal,
  movierecommender
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
    name: 'postgresql',
    icon: postgresql,
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
    description: 'The Movie Recommender Website allows users to search for movies and receive personalized recommendations based on movie titles, genres, or user input. It leverages machine learning algorithms to enhance the recommendation accuracy and improve user experience.',
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
    image: movierecommender,
    repo: 'https://github.com/AmmarAlzureiqi/Movie-Recommender?tab=readme-ov-file',
    demo: 'https://movie-recommender-aa.streamlit.app/',
  },
  {
    id: 'project-2',
    name: 'Mood of Music',
    description:
      'Mood of Music creates a personalized soundtrack from your surroundings. Upload an image, and the app curates a matching Spotify playlist, instantly added to your account and embedded on the website.',
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
    image: moodofmusic,
    repo: 'https://github.com/AmmarAlzureiqi/MoodofMusic',
    demo: 'https://moodofmusic.onrender.com/',
  },
  {
    id: 'project-3',
    name: 'AI Study Pal',
    description: 'An AI-powered student support hub—get study assistance, note summaries, and personalized study plans, all in one place.',
    // tags: [
    //   {
    //     name: 'nextjs',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'supabase',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'css',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    image: aistudypal,
    repo: 'https://github.com/AmmarAlzureiqi/AI-Study-Pal',
    demo: 'https://aistudypal.streamlit.app/',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
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
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
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
